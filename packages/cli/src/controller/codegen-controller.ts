// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0

import assert from 'assert';
import path from 'path';
import {DEFAULT_MANIFEST, getManifestPath, getSchemaPath, loadFromJsonOrYaml} from '@subql/common';
import {isCustomDs as isCustomConcordiumDs, isRuntimeDs as isRuntimeConcordiumDs} from '@subql/common-concordium';
import {
  isCustomCosmosDs,
  isRuntimeCosmosDs,
  generateProto,
  tempProtoDir,
  validateCosmosManifest,
  ProjectManifestImpls as CosmosManifest,
  generateCosmwasm,
  CosmosCustomModuleImpl,
} from '@subql/common-cosmos';
import {
  isCustomDs as isCustomEthereumDs,
  isRuntimeDs as isRuntimeEthereumDs,
  generateAbis,
} from '@subql/common-ethereum';
import {isCustomDs as isCustomNearDs, isRuntimeDs as isRuntimeNearDs} from '@subql/common-near';
import {isCustomDs as isCustomStellarDs, isRuntimeDs as isRuntimeStellarDs} from '@subql/common-stellar';
import {isCustomDs as isCustomSubstrateDs, SubstrateCustomDataSource} from '@subql/common-substrate';
import {
  RuntimeDatasourceTemplate as SubstrateDsTemplate,
  CustomDatasourceTemplate as SubstrateCustomDsTemplate,
} from '@subql/types';
import {
  RuntimeDatasourceTemplate as ConcordiumDsTemplate,
  CustomDatasourceTemplate as ConcordiumCustomDsTemplate,
} from '@subql/types-concordium';
import {BaseDataSource, BaseMapping, TemplateBase} from '@subql/types-core';
import {
  RuntimeDatasourceTemplate as CosmosDsTemplate,
  CustomDatasourceTemplate as CosmosCustomDsTemplate,
} from '@subql/types-cosmos';
import {
  RuntimeDatasourceTemplate as EthereumDsTemplate,
  CustomDatasourceTemplate as EthereumCustomDsTemplate,
  SubqlRuntimeDatasource as EthereumDs,
  SubqlCustomDatasource as EthereumCustomDs,
} from '@subql/types-ethereum';
import {
  RuntimeDatasourceTemplate as NearDsTemplate,
  CustomDatasourceTemplate as NearCustomDsTemplate,
} from '@subql/types-near';
import {
  RuntimeDatasourceTemplate as StellarDsTemplate,
  CustomDatasourceTemplate as StellarCustomDsTemplate,
} from '@subql/types-stellar';
import {
  getAllEntitiesRelations,
  getAllJsonObjects,
  setJsonObjectType,
  getTypeByScalarName,
  GraphQLEntityField,
  GraphQLJsonFieldType,
  GraphQLEntityIndex,
  getAllEnums,
} from '@subql/utils';
import {upperFirst, uniq, uniqBy} from 'lodash';
import {renderTemplate, prepareDirPath} from '../utils';

export type TemplateKind =
  | SubstrateDsTemplate
  | SubstrateCustomDsTemplate
  | CosmosDsTemplate
  | CosmosCustomDsTemplate
  | EthereumDsTemplate
  | EthereumCustomDsTemplate
  | NearDsTemplate
  | NearCustomDsTemplate
  | StellarDsTemplate
  | StellarCustomDsTemplate
  | ConcordiumDsTemplate
  | ConcordiumCustomDsTemplate;

export type DatasourceKind = SubstrateCustomDataSource | EthereumDs | EthereumCustomDs;

const MODEL_TEMPLATE_PATH = path.resolve(__dirname, '../template/model.ts.ejs');
const MODELS_INDEX_TEMPLATE_PATH = path.resolve(__dirname, '../template/models-index.ts.ejs');
const TYPES_INDEX_TEMPLATE_PATH = path.resolve(__dirname, '../template/types-index.ts.ejs');
const INTERFACE_TEMPLATE_PATH = path.resolve(__dirname, '../template/interface.ts.ejs');
const ENUM_TEMPLATE_PATH = path.resolve(__dirname, '../template/enum.ts.ejs');
const DYNAMIC_DATASOURCE_TEMPLATE_PATH = path.resolve(__dirname, '../template/datasource-templates.ts.ejs');
const TYPE_ROOT_DIR = 'src/types';
const MODEL_ROOT_DIR = 'src/types/models';
const RESERVED_KEYS = ['filter', 'filters'];

const exportTypes = {
  models: false,
  interfaces: false,
  enums: false,
  datasources: false,
};

// 3. Re-format the field of the entity
export interface ProcessedField {
  name: string;
  type: string;
  required: boolean;
  isEnum: boolean;
  indexed: boolean;
  unique?: boolean;
  isArray: boolean;
  isJsonInterface: boolean;
}

export async function generateJsonInterfaces(projectPath: string, schema: string): Promise<void> {
  const typesDir = path.join(projectPath, TYPE_ROOT_DIR);
  const jsonObjects = getAllJsonObjects(schema);
  const jsonInterfaces = jsonObjects.map((r) => {
    const object = setJsonObjectType(r, jsonObjects);
    const fields = processFields('jsonField', object.name, object.fields);
    return {
      interfaceName: object.name,
      fields,
    };
  });

  if (jsonInterfaces.length !== 0) {
    const interfaceTemplate = {
      props: {
        jsonInterfaces,
      },
      helper: {
        upperFirst,
      },
    };
    try {
      await renderTemplate(INTERFACE_TEMPLATE_PATH, path.join(typesDir, `interfaces.ts`), interfaceTemplate);
      exportTypes.interfaces = true;
    } catch (e) {
      throw new Error(`When render json interfaces having problems.`);
    }
  }
}

export async function generateEnums(projectPath: string, schema: string): Promise<void> {
  const typesDir = path.join(projectPath, TYPE_ROOT_DIR);
  const jsonObjects = getAllEnums(schema);
  const enums = jsonObjects.map((r) => {
    return {
      name: r.name,
      values: r.getValues().map((v) => v.name),
    };
  });

  if (enums.length !== 0) {
    const enumsTemplate = {
      props: {
        enums,
      },
    };
    try {
      await renderTemplate(ENUM_TEMPLATE_PATH, path.join(typesDir, `enums.ts`), enumsTemplate);
      exportTypes.enums = true;
    } catch (e) {
      throw new Error(`When render enums having problems.`);
    }
  }
}

export function processFields(
  type: 'entity' | 'jsonField',
  className: string,
  fields: (GraphQLEntityField | GraphQLJsonFieldType)[],
  indexFields: GraphQLEntityIndex[] = []
): ProcessedField[] {
  const fieldList: ProcessedField[] = [];
  for (const field of fields) {
    const injectField = {
      name: field.name,
      required: !field.nullable,
      isArray: field.isArray,
      isEnum: false,
    } as ProcessedField;
    if (type === 'entity') {
      const [indexed, unique] = indexFields.reduce<[boolean, boolean | undefined]>(
        (acc, indexField) => {
          if (indexField.fields.includes(field.name) && indexField.fields.length <= 1) {
            acc[0] = true;
            if (indexField.fields.length === 1 && indexField.unique) {
              acc[1] = true;
            } else if (indexField.unique === undefined) {
              acc[1] = false;
            }
          }
          return acc;
        },
        [false, undefined]
      );
      injectField.indexed = indexed;
      injectField.unique = unique;
    }
    if ((field as GraphQLEntityField).isEnum) {
      injectField.type = field.type;
      injectField.isEnum = true;
      injectField.isJsonInterface = false;
    } else {
      switch (field.type) {
        default: {
          const typeClass = getTypeByScalarName(field.type);
          assert(
            typeClass && typeClass.tsType,
            `Schema: undefined type "${field.type.toString()}" on field "${field.name}" in "type ${className} @${type}"`
          );
          injectField.type = typeClass.tsType;
          injectField.isJsonInterface = false;
          break;
        }
        case 'Json': {
          if (field.jsonInterface === undefined) {
            throw new Error(`On field ${field.name} type is Json but json interface is not defined`);
          }
          injectField.type = upperFirst(field.jsonInterface.name);
          injectField.isJsonInterface = true;
        }
      }
    }
    fieldList.push(injectField);
  }
  return fieldList;
}

//1. Prepare models directory and load schema
export async function codegen(projectPath: string, fileNames: string[] = [DEFAULT_MANIFEST]): Promise<void> {
  const modelDir = path.join(projectPath, MODEL_ROOT_DIR);
  const interfacesPath = path.join(projectPath, TYPE_ROOT_DIR, `interfaces.ts`);
  await prepareDirPath(modelDir, true);
  await prepareDirPath(interfacesPath, false);
  const plainManifests = fileNames.map((fileName) => {
    const project = loadFromJsonOrYaml(getManifestPath(projectPath, fileName));
    return project as {
      specVersion: string;
      templates?: TemplateKind[];
      dataSources: DatasourceKind[];
    };
  });

  const expectKeys = ['datasources', 'templates'];

  const customDatasources = plainManifests.flatMap((plainManifest) => {
    return Object.keys(plainManifest)
      .filter((key) => !expectKeys.includes(key))
      .map((dsKey) => {
        const value = (plainManifest as any)[dsKey];
        if (typeof value === 'object' && value) {
          return !!Object.keys(value).find((d) => d === 'assets') && value;
        }
      })
      .filter(Boolean);
  });

  const schema = getSchemaPath(projectPath, fileNames[0]);
  await generateSchemaModels(projectPath, schema);

  let datasources = plainManifests.reduce((prev, current) => {
    return prev.concat(current.dataSources);
  }, [] as BaseDataSource[]);

  const templates = plainManifests.reduce((prev, current) => {
    if (current.templates && current.templates.length !== 0) {
      return prev.concat(current.templates);
    }
    return prev;
  }, [] as TemplateKind[]);

  if (templates.length !== 0) {
    await generateDatasourceTemplates(projectPath, templates);
    datasources = datasources.concat(templates as DatasourceKind[]);
  }

  if (customDatasources.length !== 0) {
    datasources = datasources.concat(customDatasources);
  }

  const chainTypes = getChaintypes(plainManifests);

  if (chainTypes.length) {
    await generateProto(chainTypes, projectPath, prepareDirPath, renderTemplate, upperFirst, tempProtoDir);
  }
  // CosmosRuntimeDatasource
  await generateCosmwasm(datasources as any, projectPath, prepareDirPath, upperFirst, renderTemplate);

  // SubqlRuntimeDatasource
  await generateAbis(datasources as any, projectPath, prepareDirPath, upperFirst, renderTemplate);

  if (exportTypes.interfaces || exportTypes.models || exportTypes.enums || exportTypes.datasources) {
    try {
      await renderTemplate(TYPES_INDEX_TEMPLATE_PATH, path.join(projectPath, TYPE_ROOT_DIR, `index.ts`), {
        props: {
          exportTypes,
        },
      });
    } catch (e) {
      throw new Error(`When render index in types having problems.`);
    }
    console.log(`* Types index generated !`);
  }
}

export function getChaintypes(
  manifest: {templates?: TemplateKind[]; dataSources: DatasourceKind[]}[]
): Map<string, CosmosCustomModuleImpl>[] {
  const chaintypes: Map<string, CosmosCustomModuleImpl>[] = [];
  for (const m of manifest) {
    if (!validateCosmosManifest(m)) continue;
    if (!m.network.chaintypes || !m.network.chaintypes.size) continue;
    chaintypes.push(m.network.chaintypes);
  }

  return chaintypes;
}

export async function generateSchemaModels(projectPath: string, schemaPath: string): Promise<void> {
  const modelDir = path.join(projectPath, MODEL_ROOT_DIR);
  const interfacesPath = path.join(projectPath, TYPE_ROOT_DIR, `interfaces.ts`);
  await prepareDirPath(modelDir, true);
  await prepareDirPath(interfacesPath, false);

  await generateJsonInterfaces(projectPath, schemaPath);
  await generateModels(projectPath, schemaPath);
  await generateEnums(projectPath, schemaPath);
}

export function validateEntityName(name: string): string {
  for (const reservedKey of RESERVED_KEYS) {
    if (name.toLowerCase().endsWith(reservedKey.toLowerCase())) {
      throw new Error(`EntityName: ${name} cannot end with reservedKey: ${reservedKey}`);
    }
  }
  return name;
}
// 2. Loop all entities and render it
export async function generateModels(projectPath: string, schema: string): Promise<void> {
  const extractEntities = getAllEntitiesRelations(schema);
  for (const entity of extractEntities.models) {
    const baseFolderPath = '.../../base';
    const className = upperFirst(entity.name);

    const entityName = validateEntityName(entity.name);

    const fields = processFields('entity', className, entity.fields, entity.indexes);
    const importJsonInterfaces = uniq(fields.filter((field) => field.isJsonInterface).map((f) => f.type));
    const importEnums = uniq(fields.filter((field) => field.isEnum).map((f) => f.type));
    const indexedFields = fields.filter((field) => field.indexed && !field.isJsonInterface);
    const modelTemplate = {
      props: {
        baseFolderPath,
        className,
        entityName,
        fields,
        importJsonInterfaces,
        importEnums,
        indexedFields,
      },
      helper: {
        upperFirst,
      },
    };
    try {
      await renderTemplate(
        MODEL_TEMPLATE_PATH,
        path.join(projectPath, MODEL_ROOT_DIR, `${className}.ts`),
        modelTemplate
      );
    } catch (e) {
      console.error(e);
      throw new Error(`When render entity ${className} to schema having problems.`);
    }
    console.log(`* Schema ${className} generated !`);
  }
  const classNames = extractEntities.models.map((entity) => entity.name);
  if (classNames.length !== 0) {
    try {
      await renderTemplate(MODELS_INDEX_TEMPLATE_PATH, path.join(projectPath, MODEL_ROOT_DIR, `index.ts`), {
        props: {
          classNames,
        },
        helper: {
          upperFirst,
        },
      });
      exportTypes.models = true;
    } catch (e) {
      throw new Error(`When render index in models having problems.`);
    }
    console.log(`* Models index generated !`);
  }
}

export async function generateDatasourceTemplates(projectPath: string, templates: TemplateKind[]): Promise<void> {
  const props = templates.map((t) => ({
    name: (t as TemplateBase).name,
    args: hasParameters(t) ? 'Record<string, unknown>' : undefined,
  }));

  const propsWithoutDuplicates = uniqBy(props, (prop) => `${prop.name}-${prop.args}`);

  try {
    await renderTemplate(DYNAMIC_DATASOURCE_TEMPLATE_PATH, path.join(projectPath, TYPE_ROOT_DIR, `datasources.ts`), {
      props: propsWithoutDuplicates,
    });
    exportTypes.datasources = true;
  } catch (e) {
    console.error(e);
    throw new Error(`Unable to generate datasource template constructors`);
  }
  console.log(`* Datasource template constructors generated !`);
}

function hasParameters(t: TemplateKind): boolean {
  return (
    isRuntimeCosmosDs(t as CosmosDsTemplate) ||
    isCustomCosmosDs(t as CosmosDsTemplate) ||
    isRuntimeEthereumDs(t as EthereumDsTemplate) ||
    isCustomEthereumDs(t as EthereumDsTemplate) ||
    isCustomSubstrateDs(t as SubstrateDsTemplate) ||
    isRuntimeNearDs(t as NearDsTemplate) ||
    isCustomNearDs(t as NearDsTemplate) ||
    isRuntimeStellarDs(t as StellarDsTemplate) ||
    isCustomStellarDs(t as StellarDsTemplate) ||
    isRuntimeConcordiumDs(t as ConcordiumDsTemplate) ||
    isCustomConcordiumDs(t as ConcordiumDsTemplate)
  );
}

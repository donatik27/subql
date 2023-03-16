// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {Injectable} from '@nestjs/common';
import {DatasourceParams, IDynamicDsService} from '../dynamic-ds.service';

export type HostDynamicDS<DS> = {
  dynamicDsCreateDynamicDatasource: (params: DatasourceParams) => Promise<DS>;
  dynamicDsGetDynamicDatasources: () => Promise<DS[]>;
};

export const hostDynamicDsKeys: (keyof HostDynamicDS<any>)[] = [
  'dynamicDsCreateDynamicDatasource',
  'dynamicDsGetDynamicDatasources',
];

@Injectable()
export class WorkerDynamicDsService<DS> implements IDynamicDsService<DS> {
  constructor(private host: HostDynamicDS<DS>) {}

  async createDynamicDatasource(params: DatasourceParams): Promise<DS> {
    return this.host.dynamicDsCreateDynamicDatasource(params);
  }

  async getDynamicDatasources(): Promise<DS[]> {
    return this.host.dynamicDsGetDynamicDatasources();
  }
}
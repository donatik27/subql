// Copyright 2020-2023 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0

import {NodeConfig} from '../configure';
import {BaseDsProcessorService} from './ds-processor.service';
import {DynamicDsService} from './dynamic-ds.service';
import {BaseProjectService} from './project.service';
import {ISubqueryProject} from './types';

class TestProjectService extends BaseProjectService<any, any> {
  packageVersion = '1.0.0';

  async getBlockTimestamp(height: number): Promise<Date> {
    return Promise.resolve(new Date());
  }

  onProjectChange(project: any): void {
    return;
  }
}

describe('BaseProjectService', () => {
  let service: TestProjectService;

  beforeEach(() => {
    service = new TestProjectService(
      null as unknown as BaseDsProcessorService,
      null as unknown as any,
      null as unknown as any,
      null as unknown as any,
      {dataSources: []} as unknown as ISubqueryProject<any>,
      null as unknown as any,
      null as unknown as any,
      {unsafe: false} as unknown as NodeConfig,
      {getDynamicDatasources: jest.fn()} as unknown as DynamicDsService<any>,
      null as unknown as any,
      null as unknown as any
    );
  });

  test('hasDataSourcesAfterHeight', async () => {
    service.getDataSources = jest.fn().mockResolvedValue([{endBlock: 100}, {endBlock: 200}, {endBlock: 300}]);

    const result = await service.hasDataSourcesAfterHeight(150);
    expect(result).toBe(true);
  });

  test('hasDataSourcesAfterHeight - undefined endBlock', async () => {
    service.getDataSources = jest.fn().mockResolvedValue([{endBlock: 100}, {endBlock: undefined}]);

    const result = await service.hasDataSourcesAfterHeight(150);
    expect(result).toBe(true);
  });

  test('getDataSources', async () => {
    (service as any).project.dataSources = [
      {startBlock: 100, endBlock: 200},
      {startBlock: 1, endBlock: 100},
    ];
    (service as any).dynamicDsService.getDynamicDatasources = jest
      .fn()
      .mockResolvedValue([{startBlock: 150, endBlock: 250}]);

    const result = await service.getDataSources(175);
    expect(result).toEqual([
      {startBlock: 100, endBlock: 200},
      {startBlock: 150, endBlock: 250},
    ]);
  });

  test('getDatasourceMap', () => {
    (service as any).dynamicDsService.dynamicDatasources = [];
    (service as any).projectUpgradeService = {
      projects: [
        [
          1,
          {
            dataSources: [
              {startBlock: 1, endBlock: 300},
              {startBlock: 10, endBlock: 20},
              {startBlock: 1, endBlock: 100},
              {startBlock: 50, endBlock: 200},
              {startBlock: 500},
            ],
          },
        ],
      ],
    } as any;

    const result = service.getDataSourcesMap();
    expect(result.getAll()).toEqual(
      new Map([
        [
          1,
          [
            {startBlock: 1, endBlock: 300},
            {startBlock: 1, endBlock: 100},
          ],
        ],
        [
          10,
          [
            {startBlock: 1, endBlock: 300},
            {startBlock: 1, endBlock: 100},
            {startBlock: 10, endBlock: 20},
          ],
        ],
        [
          21,
          [
            {startBlock: 1, endBlock: 300},
            {startBlock: 1, endBlock: 100},
          ],
        ],
        [
          50,
          [
            {startBlock: 1, endBlock: 300},
            {startBlock: 1, endBlock: 100},
            {startBlock: 50, endBlock: 200},
          ],
        ],
        [
          101,
          [
            {startBlock: 1, endBlock: 300},
            {startBlock: 50, endBlock: 200},
          ],
        ],
        [201, [{startBlock: 1, endBlock: 300}]],
        [301, []],
        [500, [{startBlock: 500}]],
      ])
    );
  });
});
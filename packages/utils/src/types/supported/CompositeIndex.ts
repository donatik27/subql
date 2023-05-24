// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import {TypeClass} from '../TypeClass';

export const CompositeIndex = new TypeClass(
  'CompositeIndex',
  (data: string): Uint8Array => {
    return Buffer.from(data);
  },
  'string',
  'CompositeIndex',
  'text'
);

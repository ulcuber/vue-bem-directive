import { createLocalVue } from '@vue/test-utils';

import VueBem from '../../../src/main';

import {
  eachCase,
  block, element, mod, value,
} from '../../helpers';

import base from './base';
import withoutAnyBlock from './withoutAnyBlock';

import withBlock from './withBlock';
import withPropBlock from './withPropBlock';
import withPropBlockAndUpdate from './withPropBlockAndUpdate';

import withDataBlockAndUpdate from './withDataBlockAndUpdate';

import additionalClass from './additionalClass';
import additionalClassComputed from './additionalClassComputed';
import additionalClassComputedAndUpdate from './additionalClassComputedAndUpdate';
import additionalClassWithFullElementName from './additionalClassWithFullElementName';

describe('When v-bem installed', () => {
  const localVue = createLocalVue();
  localVue.use(VueBem);

  const args = {
    localVue, eachCase, block, element, mod, value,
  };

  base(args);

  withoutAnyBlock(args);

  withBlock(args);

  withPropBlock(args);
  withPropBlockAndUpdate(args);

  withDataBlockAndUpdate(args);

  additionalClass(args);
  additionalClassComputed(args);
  additionalClassComputedAndUpdate(args);
  additionalClassWithFullElementName(args);
});

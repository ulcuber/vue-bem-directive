import { assert } from 'chai';
import { extractValueClasses } from '../../src/helpers';

describe('extractValueClasses helper', () => {
  const value = {
    test1: true,
    test2: false,
  };
  const prefix = 'prefix_';
  it('should push keys with true values to first array', () => {
    const classes = [];
    const oldClasses = [];
    extractValueClasses(classes, oldClasses, value, prefix);
    assert.sameMembers([`${prefix}test1`], classes);
  });
  it('should push keys with false values to second array', () => {
    const classes = [];
    const oldClasses = [];
    extractValueClasses(classes, oldClasses, value, prefix);
    assert.sameMembers([`${prefix}test2`], oldClasses);
  });
});

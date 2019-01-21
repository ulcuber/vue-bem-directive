import { assert } from 'chai';
import { isEquals } from '../../src/helpers';

describe('isEquals helper', () => {
  it('should return true for equal strings', () => {
    assert.isTrue(isEquals('test', 'test'));
  });
  it('should return false for not equal strings', () => {
    assert.isFalse(isEquals('test', 'another'));
  });
  it('should return true for equal objects', () => {
    const obj1 = {
      test1: true,
      test2: true,
    };
    const obj2 = {
      test2: true,
      test1: true,
    };
    assert.isTrue(isEquals(obj1, obj2));
  });
  it('should return false for not equal objects', () => {
    const obj1 = {
      test1: true,
      test2: true,
    };
    const obj2 = {
      test1: true,
    };
    assert.isFalse(isEquals(obj1, obj2));
  });
});

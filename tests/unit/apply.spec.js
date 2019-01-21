import { assert } from 'chai';
import { filterClasses } from '../../src/apply';

describe('filterClasses', () => {
  it('should remove classes that contained in oldClasses', () => {
    const classes = ['test1', 'test2', 'test3'];
    const oldClasses = ['test2'];
    const toBe = ['test1', 'test3'];

    const filtered = filterClasses(classes, oldClasses);
    assert.sameMembers(filtered, toBe);
  });
});

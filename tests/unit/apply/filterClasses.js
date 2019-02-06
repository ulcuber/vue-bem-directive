import { expect } from 'chai';
import { filterClasses } from '../../../src/apply';

export default () => describe('filterClasses', () => {
  it('should remove classes that contained in oldClasses', () => {
    const classes = ['test1', 'test2', 'test3'];
    const oldClasses = ['test2'];
    const expectedClasses = ['test1', 'test3'];

    expect(
      filterClasses(classes, oldClasses),
    ).to.have.members(expectedClasses);
  });
});

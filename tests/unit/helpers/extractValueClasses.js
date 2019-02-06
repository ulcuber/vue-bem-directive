import { expect } from 'chai';
import { extractValueClasses } from '../../../src/helpers';

export default () => describe('extractValueClasses', () => {
  const value = {
    test1: true,
    test2: false,
  };
  const prefix = 'prefix_';
  it('should push keys with true values to first array', () => {
    const classes = [];
    const oldClasses = [];
    extractValueClasses(classes, oldClasses, value, prefix);
    expect(classes).to.have.members([`${prefix}test1`]);
  });
  it('should push keys with false values to second array', () => {
    const classes = [];
    const oldClasses = [];
    extractValueClasses(classes, oldClasses, value, prefix);
    expect(oldClasses).to.have.members([`${prefix}test2`]);
  });
});

import { expect } from 'chai';
import { getArgs } from '../../../src/args';

export default () => describe('getArgs', () => {
  it('should convert "" to []', () => {
    const args = getArgs('');
    expect(args).to.have.ordered.members([]);
  });
  it('should convert "element" to ["element"]', () => {
    const args = getArgs('element');
    expect(args).to.have.ordered.members(['element']);
  });
  it('should convert "block:element" to ["block", "element"]', () => {
    const args = getArgs('block:element');
    expect(args).to.have.ordered.members(['block', 'element']);
  });
});

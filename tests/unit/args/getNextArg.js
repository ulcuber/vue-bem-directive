import { expect } from 'chai';
import { getNextArg } from '../../../src/args';

export default () => describe('getNextArg', () => {
  it('should shift first arg and prefix it', () => {
    const prefix = 'prefix';
    const first = 'one';
    const second = 'two';
    const args = [first, second];
    expect(
      getNextArg(args, prefix),
    ).to.be.equal(prefix + first);
    expect(args).to.have.ordered.members([second]);
    expect(
      getNextArg(args, prefix),
    ).to.be.equal(prefix + second);
    expect(args).to.have.ordered.members([]);
  });
});

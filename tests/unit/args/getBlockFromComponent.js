import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { getBlockFromComponent } from '../../../src/args';

export default () => describe('getBlockFromComponent', () => {
  const factory = (additional, config = {}) => shallowMount({
    template: '<div></div>',
    ...additional,
  }, config);
  const block = 'block';
  const prefix = 'ns-';
  const expected = prefix + block;

  it('should extract from component name', () => {
    const wrapper = factory({ name: block });
    const prefixedBlock = getBlockFromComponent(wrapper.vm, prefix);
    expect(prefixedBlock).to.be.equal(expected);
    wrapper.destroy();
  });
  it('should extract from component block', () => {
    const wrapper = factory({ block });
    const prefixedBlock = getBlockFromComponent(wrapper.vm, prefix);
    expect(prefixedBlock).to.be.equal(expected);
    wrapper.destroy();
  });
  it('should extract from component prop', () => {
    const wrapper = factory({ props: { block: String } }, { propsData: { block } });
    const prefixedBlock = getBlockFromComponent(wrapper.vm, prefix);
    expect(prefixedBlock).to.be.equal(expected);
    wrapper.destroy();
  });
  it('should extract from empty component prop without prefix', () => {
    const wrapper = factory({ props: { block: String } }, { propsData: { block: '' } });
    const prefixedBlock = getBlockFromComponent(wrapper.vm, prefix);
    expect(prefixedBlock).to.be.equal('');
    wrapper.destroy();
  });
  it('should extract from missing component prop without prefix', () => {
    const wrapper = factory({ props: { block: String } });
    const prefixedBlock = getBlockFromComponent(wrapper.vm, prefix);
    expect(prefixedBlock).to.be.equal('');
    wrapper.destroy();
  });
});

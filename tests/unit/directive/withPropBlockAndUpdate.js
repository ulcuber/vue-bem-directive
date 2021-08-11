import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { replaceInArray } from '../../helpers';

export default ({
  localVue, eachCase, block,
}) => describe(`For component with prop block = '${block}' should remove old when prop changing`, () => {
  const factory = (template) => shallowMount({
    props: { block: String },
    template,
  }, { localVue, propsData: { block } });
  eachCase((directive, expectedClasses, { spaces, to }) => {
    it(`${directive}${spaces} => ${to}`, () => {
      const wrapper = factory(`<div ${directive}></div>`);

      const props = wrapper.props();
      const changedBlock = `${props.block}test`;
      const expectedClassesWithChangedBlock = replaceInArray(expectedClasses, block, changedBlock);
      wrapper.setProps({
        ...props,
        block: changedBlock,
      });
      expect(wrapper.classes()).to.have.members(expectedClassesWithChangedBlock);
      wrapper.destroy();
    });
  });
});

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { replaceInArray } from '../../helpers';

export default ({
  localVue, eachCase, block,
}) => describe(`For component with data block = '${block}' should remove old when data changing`, () => {
  const factory = (template) => shallowMount({
    data() { return { block }; },
    template,
  }, { localVue, propsData: { block } });
  eachCase((directive, expectedClasses, { spaces, to }) => {
    it(`${directive}${spaces} => ${to}`, () => {
      const wrapper = factory(`<div ${directive}></div>`);

      const changedBlock = `${block}test`;
      const expectedClassesWithChangedBlock = replaceInArray(expectedClasses, block, changedBlock);
      wrapper.setData({
        block: changedBlock,
      });
      expect(wrapper.classes()).to.have.members(expectedClassesWithChangedBlock);
      wrapper.destroy();
    });
  });
});

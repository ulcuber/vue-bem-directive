import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

export default ({
  localVue, eachCase, block,
}) => describe(`For component with name ${block}`, () => {
  const factory = template => shallowMount({
    name: block,
    template,
  }, { localVue });
  eachCase((directive, expectedClasses, { spaces, to }) => {
    it(`${directive}${spaces} => ${to}`, () => {
      const wrapper = factory(`<div ${directive}></div>`);
      expect(wrapper.classes()).to.have.members(expectedClasses);
      wrapper.destroy();
    });
  });
});

import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

export default ({
  localVue, eachCase,
}) => describe('For component without any block name', () => {
  const factory = template => shallowMount({
    template,
  }, { localVue });
  eachCase((directive, expectedClasses, { spaces, to }) => {
    it(`${directive}${spaces} => ${to}`, () => {
      const wrapper = factory(`<div ${directive}></div>`);
      const expected = to.indexOf('another') === -1
        ? [] : expectedClasses;
      expect(wrapper.classes()).to.have.members(expected);
      wrapper.destroy();
    });
  });
});

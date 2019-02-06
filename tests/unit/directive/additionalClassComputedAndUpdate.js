import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

export default ({
  localVue, eachCase, block,
}) => xdescribe(`For component with name ${block} and additional computed :class when it updates`, () => {
  const factory = template => shallowMount({
    name: block,
    data() {
      return {
        isActive: false,
      };
    },
    template,
  }, { localVue });
  eachCase((directive, expectedClasses, { spaces }) => {
    const additional = ':class="{add: isActive}"';
    const wrapper = factory(`<div ${directive} ${additional}></div>`);

    let to = expectedClasses.join(' ');
    it(`${directive} ${additional}${spaces} => ${to}`, () => {
      console.log({ active: wrapper.vm.isActive });
      expect(wrapper.classes()).to.have.members(expectedClasses);
      wrapper.destroy();
    });

    const withAdditional = expectedClasses.slice();
    withAdditional.push('add');
    to = withAdditional.join(' ');
    wrapper.setData({ isActive: true });
    it(`${directive} ${additional}${spaces} => ${to}`, () => {
      expect(wrapper.classes()).to.have.members(expectedClasses);
      wrapper.destroy();
    });
  });
});

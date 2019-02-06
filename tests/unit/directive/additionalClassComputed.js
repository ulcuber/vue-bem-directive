import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

export default ({
  localVue, eachCase, block,
}) => xdescribe(`For component with name ${block} and additional computed :class`, () => {
  const factory = template => shallowMount({
    name: block,
    template,
  }, { localVue });
  eachCase((directive, expectedClasses, { spaces }) => {
    const additionalClass = 'add';
    const additional = `:class="'${additionalClass}'"`;

    const withAdditional = expectedClasses.slice();
    withAdditional.push(additionalClass);

    const to = withAdditional.join(' ');
    it(`${directive} ${additional}${spaces} => ${to}`, () => {
      const wrapper = factory(`<div ${directive} ${additional}></div>`);
      expect(wrapper.classes()).to.have.members(expectedClasses);
      wrapper.destroy();
    });
  });
});

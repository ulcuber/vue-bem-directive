import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

export default ({
  localVue, eachCase, block, element,
}) => xdescribe(`For component with name ${block} and additional same as full element class`, () => {
  const factory = (template) => shallowMount({
    name: block,
    template,
  }, { localVue });
  eachCase((directive, expectedClasses, { spaces }) => {
    const additionalClass = `${block}__${element}`;
    const additional = `class="${additionalClass}"`;

    const withAdditional = expectedClasses.filter((item) => item !== additionalClass);
    withAdditional.push(additionalClass);

    const to = withAdditional.join(' ');
    it(`${directive} ${additional}${spaces} => ${to}`, () => {
      const wrapper = factory(`<div ${directive} ${additional}></div>`);
      expect(wrapper.classes()).to.have.members(expectedClasses);
      wrapper.destroy();
    });
  });
});

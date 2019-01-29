import { assert } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';

import {
  eachCase,
  getMaxLength,
  replaceInArray,
} from './helpers';
import VueBem from '../../src/main';

describe('When v-bem installed', () => {
  const maxLength = getMaxLength();
  const block = 'block';
  const localVue = createLocalVue();
  localVue.use(VueBem);

  describe(`For component with name ${block}`, () => {
    const factory = template => shallowMount({
      name: block,
      template,
    }, { localVue });
    eachCase((directive, shouldContain) => {
      const to = shouldContain.join(' ');
      const spaces = Array(maxLength - directive.length).fill('').join(' ');

      it(`${directive}${spaces} => ${to}`, () => {
        const wrapper = factory(`<div ${directive}></div>`);
        assert.sameMembers(shouldContain, wrapper.classes());
        wrapper.destroy();
      });
    });
  });

  describe(`For component with name ${block} and additional class`, () => {
    const factory = template => shallowMount({
      name: block,
      template,
    }, { localVue });
    eachCase((directive, shouldContain) => {
      const additionalClass = 'add';
      const additional = `class="${additionalClass}"`;

      const withAdditional = shouldContain.slice();
      withAdditional.push(additionalClass);

      const to = withAdditional.join(' ');
      const spaces = Array(maxLength - directive.length).fill('').join(' ');

      it(`${directive} ${additional}${spaces} => ${to}`, () => {
        const wrapper = factory(`<div ${directive} ${additional}></div>`);
        assert.sameMembers(withAdditional, wrapper.classes());
        wrapper.destroy();
      });
    });
  });

  describe(`For component with name ${block} and additional computed :class`, () => {
    const factory = template => shallowMount({
      name: block,
      template,
    }, { localVue });
    eachCase((directive, shouldContain) => {
      const additionalClass = 'add';
      const additional = `:class="'${additionalClass}'"`;

      const withAdditional = shouldContain.slice();
      withAdditional.push(additionalClass);

      const to = withAdditional.join(' ');
      const spaces = Array(maxLength - directive.length).fill('').join(' ');

      it(`${directive} ${additional}${spaces} => ${to}`, () => {
        const wrapper = factory(`<div ${directive} ${additional}></div>`);
        assert.sameMembers(withAdditional, wrapper.classes());
        wrapper.destroy();
      });
    });
  });

  describe(`For component with prop block = '${block}'`, () => {
    const factory = template => shallowMount({
      props: { block: String },
      template,
    }, { localVue, propsData: { block } });
    eachCase((directive, shouldContain) => {
      it(`${directive}`, () => {
        const wrapper = factory(`<div ${directive}></div>`);
        assert.sameMembers(shouldContain, wrapper.classes());
        wrapper.destroy();
      });
    });
  });

  describe(`For component with block = '${block}'`, () => {
    const factory = template => shallowMount({
      block,
      template,
    }, { localVue });
    eachCase((directive, shouldContain) => {
      it(`${directive}`, () => {
        const wrapper = factory(`<div ${directive}></div>`);
        assert.sameMembers(shouldContain, wrapper.classes());
        wrapper.destroy();
      });
    });
  });

  describe(`For component with prop block = '${block}' should remove old when prop changing`, () => {
    const factory = template => shallowMount({
      props: { block: String },
      template,
    }, { localVue, propsData: { block } });
    eachCase((directive, shouldContain) => {
      it(`${directive}`, () => {
        const wrapper = factory(`<div ${directive}></div>`);

        const props = wrapper.props();
        const changedBlock = `${props.block}test`;
        const contain = replaceInArray(shouldContain, block, changedBlock);
        wrapper.setProps({
          ...props,
          block: changedBlock,
        });
        assert.sameMembers(contain, wrapper.classes());
        wrapper.destroy();
      });
    });
  });

  describe(`For component with data block = '${block}' should remove old when data changing`, () => {
    const factory = template => shallowMount({
      data() { return { block }; },
      template,
    }, { localVue, propsData: { block } });
    eachCase((directive, shouldContain) => {
      it(`${directive}`, () => {
        const wrapper = factory(`<div ${directive}></div>`);

        const changedBlock = `${block}test`;
        const contain = replaceInArray(shouldContain, block, changedBlock);
        wrapper.setData({
          block: changedBlock,
        });
        assert.sameMembers(contain, wrapper.classes());
        wrapper.destroy();
      });
    });
  });
});

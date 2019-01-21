// @flow
import type { Delimiters } from '../flow-types';

import { isEquals, extractValueClasses } from './helpers';
import { getArgs, getBEM } from './args';
import apply from './apply';

export default (
  el: HTMLElement,
  bindings: Object,
  component: any,
  delimiters: Delimiters,
  oldBlock: string,
) => {
  const oldClasses: string[] = [];
  const classes: string[] = [];

  const args = getArgs(bindings.arg);
  const {
    block,
    element,
    modifier,
    modifierValue,
  } = getBEM(component, args, delimiters, bindings.modifiers.b);

  function pushArgsClasses(to: string[], b: string) {
    const fullElement = b + element;
    if (args.length > 0) {
      if (modifier) {
        if (bindings.modifiers.f) {
          to.push(fullElement);
        }
        to.push(fullElement + modifier + modifierValue);
      } else {
        to.push(fullElement);
      }
    } else if (b) {
      to.push(b);
    }
  }

  pushArgsClasses(oldClasses, block);
  const { value, oldValue } = bindings;
  if (value === undefined) {
    pushArgsClasses(classes, block);
  } else {
    const prefixBlock: string = oldBlock === undefined || bindings.modifiers.b
      ? block
      : delimiters.ns + oldBlock;

    const oldPrefix: string = bindings.modifiers.e
      ? prefixBlock + delimiters.el
      : prefixBlock + element + delimiters.mod;

    const prefix: string = bindings.modifiers.e
      ? block + delimiters.el
      : block + element + delimiters.mod;

    if (oldValue !== undefined) {
      if (isEquals(oldValue, value)) {
        return;
      }
      extractValueClasses(oldClasses, [], oldValue, oldPrefix);
    }

    extractValueClasses(oldClasses, [], value, oldPrefix);

    if (typeof value === 'boolean') {
      if (value) {
        pushArgsClasses(classes, block);
      } else {
        pushArgsClasses(oldClasses, block);
      }
    } else {
      if (bindings.modifiers.f) {
        classes.push(block + element);
      }
      extractValueClasses(classes, oldClasses, value, prefix);
    }
  }
  if (oldBlock !== undefined) {
    pushArgsClasses(oldClasses, oldBlock);
  }

  apply(el, classes, oldClasses);
};

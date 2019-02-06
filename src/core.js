// @flow
import type { Delimiters, VNodeDirective, Component } from '../flow-types';

import { isEquals, extractValueClasses } from './helpers';
import { getArgs, getNextArg, getBlockFromComponent } from './args';
import apply from './apply';

export default function (
  el: HTMLElement,
  bindings: VNodeDirective,
  component: Component,
  delimiters: Delimiters,
  oldBlock: ?string = undefined,
) {
  const oldClasses: string[] = [];
  const classes: string[] = [];

  const evaluated: string = bindings.arg;
  const args: string[] = getArgs(evaluated);
  const hasArgs: boolean = args.length > 0;

  const block: string = bindings.modifiers.b
    ? getNextArg(args, delimiters.ns)
    : getBlockFromComponent(component, delimiters.ns);
  if (!block && oldBlock === undefined) { return; }
  const element: string = getNextArg(args, delimiters.el);
  const modifier: string = getNextArg(args, delimiters.mod);
  const modifierValue: string = getNextArg(args, delimiters.modVal);

  function pushArgsClasses(to: string[], b: string) {
    const fullElement: string = b + element;
    if (hasArgs) {
      if (modifier) {
        if (bindings.modifiers.f) {
          to.push(fullElement);
        }
        to.push(fullElement + modifier + modifierValue);
      } else {
        to.push(fullElement);
      }
    } else {
      to.push(b);
    }
  }

  pushArgsClasses(oldClasses, block);
  const { value, oldValue } = bindings;
  if (value === undefined) {
    pushArgsClasses(classes, block);
  } else {
    const prefixBlock: string = !oldBlock || bindings.modifiers.b
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
        pushArgsClasses(classes, block);
      }
      extractValueClasses(classes, oldClasses, value, prefix);
    }
  }
  if (oldBlock) {
    pushArgsClasses(oldClasses, oldBlock);
  }

  apply(el, classes, oldClasses);
}

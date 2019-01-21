// @flow
import type { Delimiters } from '../flow-types';

import core from './core';

export default (delimiters: Delimiters) => (el: HTMLElement, bindings: Object, vnode: any) => {
  core(el, bindings, vnode.context, delimiters);
};

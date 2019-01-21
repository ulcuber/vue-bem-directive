// @flow
import type { Delimiters, Config } from '../flow-types';

import core from './core';
import update from './update';

const watchers: { [string]: Function } = {};

function getWatcherKey(component, bindings) {
  /* eslint-disable-next-line no-underscore-dangle */
  return component._uid + bindings.rawName;
}

function addWatcher(component, bindings, unwatch) {
  const key = getWatcherKey(component, bindings);
  watchers[key] = unwatch;
}
function removeWatcher(component, bindings) {
  const key = getWatcherKey(component, bindings);
  if (typeof watchers[key] === 'function') {
    watchers[key]();
    watchers[key] = undefined;
  }
}

export default {
  install(Vue: any, config: Config = { delimiters: {} }) {
    const delimiters: Delimiters = {
      ns: '',
      el: '__',
      mod: '_',
      modVal: '-',
      ...config.delimiters,
    };
    Vue.directive('bem', {
      bind(el: HTMLElement, bindings: Object, vnode: any) {
        const component = vnode.context;

        if (component.block !== undefined) {
          const unwatch = component.$watch('block', (block, oldBlock) => {
            core(el, bindings, component, delimiters, oldBlock);
          });
          addWatcher(component, bindings, unwatch);
        }

        core(el, bindings, component, delimiters);
      },
      update: update(delimiters),
      unbind(el: HTMLElement, bindings: Object, vnode: any) {
        const component = vnode.context;
        removeWatcher(component, bindings);
      },
    });
  },
};

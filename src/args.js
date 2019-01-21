// @flow
import type { BEM, Delimiters } from '../flow-types';

export function getArgs(arg: ?string): string[] {
  if (arg) {
    return arg.split(':');
  }
  return [];
}

function getNextArg(arr: string[], prefix: string): string {
  const first = arr.shift();
  return first ? prefix + first : '';
}

export function getBEM(
  component: any,
  args: string[],
  delimiters: Delimiters,
  hasArgsBlock: boolean = false,
): BEM {
  const bem = args.slice();

  let block: string;
  if (hasArgsBlock) {
    block = getNextArg(bem, delimiters.ns);
  } else {
    const { $options } = component;
    const name = (
      component.block || $options.block || $options.name
    );
    block = name ? delimiters.ns + name : '';
  }

  const element: string = getNextArg(bem, delimiters.el);
  const modifier: string = getNextArg(bem, delimiters.mod);
  const modifierValue: string = getNextArg(bem, delimiters.modVal);

  return {
    block,
    element,
    modifier,
    modifierValue,
  };
}

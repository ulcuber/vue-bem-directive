// @flow
import type { Component } from '../flow-types';

export function getArgs(arg: ?string): string[] {
  if (arg) {
    return arg.split(':');
  }
  return [];
}

export function getNextArg(arr: string[], prefix: string): string {
  const first = arr.shift();
  return first ? prefix + first : '';
}

export function getBlockFromComponent(component: Component, prefix: string): string {
  const { $options } = component;
  const name: ?string = (
    component.block || $options.block || $options.name
  );
  return name ? prefix + name : '';
}

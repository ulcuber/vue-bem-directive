declare type Delimiters = {
  ns: string,
  el: string,
  mod: string,
  modVal: string,
}

declare type Config = {
  delimiters: Delimiters,
}

declare type BEM = {
  block: string,
  element: ?string,
  modifier: ?string,
  modifierValue: ?string,
}

declare type Component = {
  _uid: string,
  block: ?string,
  $options: {
    name: ?string,
    block: ?string,
  }
}

declare type MountedComponentVNode = {
  context: Component;
}

declare type VNodeDirective = {
  name: string;
  rawName: string;
  value?: any;
  oldValue?: any;
  arg?: string;
  modifiers?: ASTModifiers;
  def?: Object;
}

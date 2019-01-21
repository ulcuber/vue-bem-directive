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

# vue-bem-directive

[![Build Status](https://travis-ci.org/ulcuber/vue-bem-directive.svg?branch=master)](https://travis-ci.org/ulcuber/vue-bem-directive)
[![Coverage Status](https://coveralls.io/repos/github/ulcuber/vue-bem-directive/badge.svg?branch=master)](https://coveralls.io/github/ulcuber/vue-bem-directive?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e5307c48d88f4e02ae9addbb2bd6d006)](https://app.codacy.com/app/ulcuber/vue-bem-directive?utm_source=github.com&utm_medium=referral&utm_content=ulcuber/vue-bem-directive&utm_campaign=Badge_Grade_Dashboard)
![](https://img.shields.io/npm/l/vue-bem-directive.svg?style=flat)

## Install

```js
import bem from 'vue-bem-directive';

Vue.use(bem, {
  delimiters: {
    mod: '_',
  },
});
```

## Use

The prop `block`, non-standard option `block` or option `name` of the component will be used as `Block` part of the class names.

```html
<template>
<div>
  <div v-bem></div>
  <div v-bem:element></div>
  <div v-bem:element="{ mod: true, mod2: false }"></div>
</div>
</template>

<script>
export default {
  name: 'block'
};
</script>
```

will produce

```html
<div>
  <div class="block"></div>
  <div class="block__element"></div>
  <div class="block__element_mod"></div>
</div>
```

## Configuration

You can pass in an object defining the delimiters and a namespace when
registering the directive.

| Option | Description                                     | Default      |
| ------ | ----------------------------------------------- | ------------ |
| ns     | Namespace                                       | `''` (empty) |
| el     | Separator between `Block` and `Element` part    | `'__'`       |
| mod    | Separator between `Element` and `Modifier` part | `'_'`        |
| modVal | Separator between `Modifier` name and value     | `'-'`        |

## Syntax

The directive can be used with one or multiple arguments or with an expression
and can control the output with modifiers.

See [spec](spec.txt) for all use cases.

### Arguments

The first argument is used as `Element` part. Second and third arguments are
`Modifier` name and value. If the `.b` modifier is used, the first argument
becomes the `Block` part, second the `Element`, etc.

```txt
    v-bem:element            =>  block__element
    v-bem:element:mod        =>  block__element_mod
    v-bem:element:mod:value  =>  block__element_mod-value
    v-bem:another:element.b  =>  another__element
```

### Expressions

Plugin was created mostly for this use cases.

If the expression is a _boolean value_, it will control the output of the
last argument:

```txt
    v-bem="false"          =>
    v-bem:element="true"   =>  block__element
    v-bem:element="false"  =>
```

If the expression is a _string_ it will be used as dynamic `Element` / `Modifier`:

```txt
    v-bem="'element'"    =>  block__element
    v-bem:element="'mod'"  =>  block__element_mod
```

If the expression is an _object_ it will define multiple dynamic `Modifier` name.

```txt
    v-bem:element="{ mod: true, mod2: false }"  =>  block__element_mod
    v-bem:element="{ mod: true, mod2: true }"   =>  block__element_mod block__element_mod2
```

Using the `.e` modifier it is possible to specify multiple dynamic `Element` names:

```txt
    v-bem.e="{ element: true, element2: true }"   =>  block__element block__element2
    v-bem.e="{ element: true, element2: false }"  =>  block__element
```

### Modifiers

Modifiers can be set either on the directive name (`v-bem`) or on a the argument.

| Modifier | Description                                                        | Example                                                       |
| :------- | :----------------------------------------------------------------- | :------------------------------------------------------------ |
| .e       | Use the expression as `Element` part(s)                            | `v-bem.e="'element'"` → `'block__element'`                    |
| .b       | Use the first argument as `Block` part of the class name           | `v-bem:yoghurt:element.b` → `'yoghurt__element'`              |
| .f       | Used on an `Element`, also print the class name without modifiers. | `v-bem:element:mod.f` → `'block__element block__element_mod'` |
| .f       | Used on `Block` level, also output the `block` class name.         | `v-bem.e.f="{ element: true }"` → `'block block__element'`    |

## Changelog

Detailed changes for each release are documented in the [release notes](CHANGELOG.md).

## License

[ISC](https://opensource.org/licenses/ISC)

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

See [spec](spec.txt) for all use cases

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

## Changelog

Detailed changes for each release are documented in the [release notes](CHANGELOG.md).

## License

[ISC](https://opensource.org/licenses/ISC)

# vue-bem-directive

[![Build Status](https://travis-ci.org/ulcuber/vue-bem-directive.svg?branch=master)](https://travis-ci.org/ulcuber/vue-bem-directive)

[![Coverage Status](https://coveralls.io/repos/github/ulcuber/vue-bem-directive/badge.svg?branch=master)](https://coveralls.io/github/ulcuber/vue-bem-directive?branch=master)

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
<div v-bem></div>
</template>

<script>
export default {
  name: 'block'
};
</script>
```

will produce

```html
<div class="block"></div>
```

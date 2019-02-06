# vue-bem-directive

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e5307c48d88f4e02ae9addbb2bd6d006)](https://app.codacy.com/app/ulcuber/vue-bem-directive?utm_source=github.com&utm_medium=referral&utm_content=ulcuber/vue-bem-directive&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/ulcuber/vue-bem-directive.svg?branch=master)](https://travis-ci.org/ulcuber/vue-bem-directive)

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

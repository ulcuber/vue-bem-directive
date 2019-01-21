module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:flowtype/recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  plugins: [
    'flowtype'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};

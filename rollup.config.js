import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import babel from '@rollup/plugin-babel';
import flow from 'rollup-plugin-flow';

import pkg from './package.json';

const plugins = (targets, browser = false) => ([
  flow(),
  ...(browser ? [resolve()] : []),
  ...(browser ? [commonjs()] : []),
  babel({
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [['@babel/preset-env', { modules: false, targets }]],
    plugins: [...(browser ? ['@babel/plugin-transform-runtime'] : []), 'babel-plugin-transform-object-rest-spread'],
    comments: false,
    babelHelpers: browser ? 'runtime' : 'bundled',
  }),
]);

const output = (format, file) => ({
  file,
  format,
  name: 'VueBemDirective',
  exports: 'default',
});

export default [
  {
    input: 'src/main.js',
    output: [
      {
        ...output('umd', pkg.browser),
        globals: {
          '@babel/runtime/helpers/extends': '_extends',
          '@babel/runtime/helpers/typeof': '_typeof',
        },
      },
    ],
    plugins: plugins({ chrome: '58', ie: '10' }, true),
    external: (id) => id.includes('@babel/runtime'),
  },
  {
    input: 'src/main.js',
    output: [
      output('cjs', pkg.main),
    ],
    plugins: plugins({ node: '6' }),
  },
  {
    input: 'src/main.js',
    output: [
      output('es', pkg.module),
    ],
    plugins: plugins({ node: '15' }),
  },
];

// used by vue-cli-service which runs tests
// not used by rollup because manually ignored as it uses multi-target
module.exports = {
  presets: [
    '@babel/preset-flow',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: true,
            },
          },
        ],
      ],
      plugins: [
        'istanbul',
      ],
    },
  },
};

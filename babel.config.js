module.exports = {
  presets: [
    '@babel/preset-flow',
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '58',
          ie: '10',
        },
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        'istanbul',
      ],
    },
  },
};

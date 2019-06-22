'use strict'

module.exports = {
  extends: [
    './packages/commitlint-config',
  ],

  rules: {
    'scope-enum': [1, 'always', [
      'commitlint',
      'eslint-base',
      'eslint-mocha',
      'eslint-node',
      'eslint-react',
      'eslint-typescript',
      'eslint-react-native',
      'prettier',
      'remark',
      'stylelint',
    ]],
  },
}

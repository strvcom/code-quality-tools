'use strict'

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],

  rules: {
    'scope-enum': [1, 'always', [
      'commitlint-config',
      'eslint-config-base',
      'eslint-config-node',
      'eslint-config-react',
      'prettier-config',
      'stylelint-config-styled-components',
    ]],

    'body-leading-blank': [2, 'always'],
  },
}

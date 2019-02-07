'use strict'

module.exports = {
  extends: [
    './packages/commitlint-config'
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

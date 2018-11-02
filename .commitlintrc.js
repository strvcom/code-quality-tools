'use strict'

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],

  rules: {
    'scope-enum': [1, 'always', [
      // List of packages in the monorepo should be added here.
    ]],

    'body-leading-blank': [2, 'always'],
  },
}

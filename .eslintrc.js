'use strict'

module.exports = {

  reportUnusedDisableDirectives: true,

  ignorePatterns: [
    'node_modules',
    '!.*.js',
  ],

  extends: [
    './packages/eslint-config-node/v16.js',
    './packages/eslint-config-node/optional.js',
    './packages/eslint-config-node/style.js',
  ],

  rules: {
    // If your editor cannot show these to you, occasionally turn this off and run the linter
    'no-warning-comments': 0,

    // TODO: eslint-plugin-node does not correctly recognise `ecmaVersion: 2021`
    'node/no-unsupported-features/es-syntax': ['error', {
      version: '>=16',
    }],
  },
}

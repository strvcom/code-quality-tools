'use strict'

module.exports = {

  reportUnusedDisableDirectives: true,

  ignorePatterns: [
    'node_modules',
    '!.*.js',
  ],

  extends: [
    './packages/eslint-config-node/v20.js',
    './packages/eslint-config-node/optional.js',
    './packages/eslint-config-node/style.js',
  ],

  rules: {
    // If your editor cannot show these to you, occasionally turn this off and run the linter
    'no-warning-comments': 0,
  },
}

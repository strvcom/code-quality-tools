'use strict'

module.exports = {

  extends: [
    './packages/eslint-config-node/v16.js',
    './packages/eslint-config-node/optional.js',
    './packages/eslint-config-node/style.js',
  ],

  rules: {
    // If your editor cannot show these to you, occasionally turn this off and run the linter
    'no-warning-comments': 0,
  },
}

'use strict'

module.exports = {

  extends: [
    '@strv/javascript/environments/nodejs/v10',
    '@strv/javascript/environments/nodejs/optional',
    '@strv/javascript/environments/mocha/recommended',
    '@strv/javascript/coding-styles/recommended',
  ],

  rules: {
    // If your editor cannot show these to you, occasionally turn this off and run the linter
    'no-warning-comments': 0,
  },
}

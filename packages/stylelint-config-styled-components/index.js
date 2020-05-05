'use strict'

module.exports = {
  extends: [
    '@code-quality/stylelint-base-config',
  ],
  rules: {
    //
    // Turn off base rules
    //

    // Possible errors

    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
    'string-no-newline': null,
    'selector-pseudo-class-no-unknown': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-type-no-unknown': null,
    'no-descending-specificity': null,

    // Limit language features

    'selector-max-empty-lines': null,
    'selector-no-vendor-prefix': null,

    // Stylistic issues

    'no-missing-end-of-source-newline': null,
    'function-name-case': null,
    'value-keyword-case': null,
    'no-empty-first-line': null,
  }
}

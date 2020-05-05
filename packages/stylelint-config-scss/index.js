'use strict'

module.exports = {
  extends: [
    '@strv/stylelint-base-config',
    'stylelint-config-rational-order',
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    //
    // Turn off base rules
    //

    'at-rule-no-unknown': null,
    'selector-type-no-unknown': null,

    //
    // Stylelint SCSS
    //

    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/selector-no-redundant-nesting-selector': true,
  }
}

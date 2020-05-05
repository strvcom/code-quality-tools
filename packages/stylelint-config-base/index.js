'use strict'

module.exports = {
  rules: {
    //
    // Possible errors
    //

    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'media-feature-name-no-unknown': true,
    'at-rule-no-unknown': true,
    'comment-no-empty': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'font-family-no-missing-generic-family-keyword': true,
    'no-empty-source': true,
    'string-no-newline': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'no-descending-specificity': true,

    //
    // Limit language features
    //

    'color-named': 'never',
    'number-max-precision': 3,
    'unit-blacklist': ['px'],
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'property-no-vendor-prefix': [
      true,
      {
        severity: 'warning',
      }
    ],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-no-important': true,
    'declaration-block-single-line-max-declarations': 1,
    'media-feature-name-blacklist': ['/^max-/'],
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'max-nesting-depth': 3,
    'no-unknown-animations': true,
    'selector-max-empty-lines': 0,
    'selector-no-vendor-prefix': true,

    //
    // Stylistic issues
    //

    'color-hex-case': 'upper',
    'font-weight-notation': 'numeric',
    'function-comma-newline-after': 'always-multi-line',
    'function-max-empty-lines': 0,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': 'single',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-max-empty-lines': 0,
    'property-case': 'lower',

    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',

    'selector-list-comma-newline-after': 'always',
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
    'selector-pseudo-element-colon-notation': 'double',

    'indentation': 2,
    'linebreaks': 'unix',
    'max-empty-lines': 1,
    'max-line-length': 150,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'function-name-case': 'lower',
    'value-keyword-case': 'lower',
    'no-empty-first-line': true,
  }
}

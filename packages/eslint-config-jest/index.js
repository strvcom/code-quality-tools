/**
 * strvcom/eslint-config-jest
 *
 * @author      Michal Jarnot <m.jarnot@yahoo.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: ['plugin:jest-formatting/recommended'],
  plugins: ['jest', 'jest-formatting'],
  overrides: [{
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    env: {
      'jest/globals': true,
    },
  }],
  rules: {
    //
    // Recommended
    //

    'jest/expect-expect': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-mocks-import': 0,
    'jest/no-test-callback': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',

    //
    // Optional
    //

    'jest/consistent-test-it': 'error',
    'jest/lowercase-name': 'error',
    'jest/no-hooks': 0,
    'jest/no-large-snapshots': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-truthy-falsy': 0,
    'jest/prefer-called-with': 1,
    'jest/prefer-expect-assertions': 0,
    'jest/prefer-inline-snapshots': 0,
    'jest/prefer-spy-on': 0,
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-todo': 'error',

    //
    // Style
    //

    'jest/no-alias-methods': 'error',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
  },
}

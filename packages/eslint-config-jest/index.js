/**
 * strvcom/eslint-config-jest
 *
 * @author      Michal Jarnot <m.jarnot@yahoo.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: ['plugin:jest-formatting/strict'],
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

    'jest/expect-expect': 2,
    'jest/no-disabled-tests': 2,
    'jest/no-focused-tests': 2,
    'jest/no-identical-title': 2,
    'jest/no-jasmine-globals': 2,
    'jest/no-jest-import': 2,
    'jest/no-mocks-import': 2,
    'jest/no-test-callback': 2,
    'jest/no-test-prefixes': 2,
    'jest/valid-describe': 2,
    'jest/valid-expect-in-promise': 2,
    'jest/valid-expect': 2,
    'jest/no-standalone-expect': 2,

    //
    // Optional
    //

    'jest/consistent-test-it': 2,
    'jest/lowercase-name': 2,
    'jest/no-hooks': 0,
    'jest/no-large-snapshots': 2,
    'jest/no-test-return-statement': 2,
    'jest/no-truthy-falsy': 0,
    'jest/prefer-called-with': 2,
    'jest/prefer-expect-assertions': 0,
    'jest/prefer-inline-snapshots': 0,
    'jest/prefer-spy-on': 0,
    'jest/prefer-strict-equal': 2,
    'jest/prefer-todo': 2,

    //
    // Style
    //

    'jest/no-alias-methods': 2,
    'jest/prefer-to-be-null': 2,
    'jest/prefer-to-be-undefined': 2,
    'jest/prefer-to-contain': 2,
    'jest/prefer-to-have-length': 2,
  },
}

/**
 * strvcom/eslint-config-react-native
 *
 * @author      Petr Konecny <petr.konecny@strv.com>
 * @copyright   2023-present STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: [
    'universe/native',
    'universe/shared/typescript-analysis',
    require.resolve('@strv/eslint-config-react/style'),
  ],
  rules: {
    // overrides the Expo Universe config, enforces hooks have dependencies listed in the dependency arrays
    // preventing issues with hooks not running correctly when dependency values change
    // Original expo config disabled this because they felt it is returning too many false positives
    // https://github.com/expo/expo/pull/9130
    'react-hooks/exhaustive-deps': 'warn',

    // overrides the base config, creates issues with import rules setup in the Expo universe config
    'padding-line-between-statements': 'off',

    // overrides base config, adds exceptions to the id-length rule from base config
    // coordinates are often used in React Native and it is not a good idea to rename them
    // also there is a common translation function 't' which is also not a good candidate for renaming
    // additionally, we allow single letter variables for loops
    // a, b are often used in sorting functions
    'id-length': ['warn', { properties: 'never', exceptions: ['x', 'y', 'z', 't', 'i', 'j', 'n', 'a', 'b', '_'] }],

    // overrides the Expo Universe config, as we feel there is a value in having to specifically mark floating
    // promises as void
    'no-void': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      rules: {
        // Adds a new rule from as we feel there is a value in having to specifically mark floating
        // promises as void
        '@typescript-eslint/no-floating-promises': 'error',
      },
    },
  ],
}

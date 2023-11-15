/**
 * strvcom/eslint-config-react-native
 *
 * @author      Petr Konecny <petr.konecny@strv.com>
 * @copyright   2023-present STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: ['universe/native'],
  rules: {
    // enforces hooks have dependencies listed in the dependency arrays
    // preventing issues with hooks not running correctly when dependency values change
    // Original expo config disabled this because they felt it is returning too many false positives
    // https://github.com/expo/expo/pull/9130
    'react-hooks/exhaustive-deps': 'warn',
  },
}

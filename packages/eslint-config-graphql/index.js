/**
 * strvcom/eslint-config-graphql
 *
 * @author      Michal Jarnot <m.jarnot@yahoo.com>
 * @copyright   2020 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': ['error', {
      env: 'apollo',
    }],
  },
}

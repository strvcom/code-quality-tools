/**
 * strvcom/eslint-config-ramda
 *
 * @author      Michal Jarnot <m.jarnot@yahoo.com>
 * @copyright   2020 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

module.exports = {
  plugins: ['ramda'],
  rules: {
    'ramda/always-simplification': 'error',
    'ramda/any-pass-simplification': 'error',
    'ramda/both-simplification': 'error',
    'ramda/complement-simplification': 'error',
    'ramda/compose-simplification': 'error',
    'ramda/cond-simplification': 'error',
    'ramda/either-simplification': 'error',
    'ramda/eq-by-simplification': 'error',
    'ramda/filter-simplification': 'error',
    'ramda/if-else-simplification': 'error',
    'ramda/map-simplification': 'error',
    'ramda/merge-simplification': 'error',
    'ramda/no-redundant-and': 'warn',
    'ramda/no-redundant-not': 'warn',
    'ramda/no-redundant-or': 'warn',
    'ramda/pipe-simplification': 'error',
    'ramda/prefer-both-either': 'error',
    'ramda/prefer-complement': 'error',
    'ramda/prefer-ramda-boolean': 'error',
    'ramda/prop-satisfies-simplification': 'error',
    'ramda/reduce-simplification': 'error',
    'ramda/reject-simplification': 'error',
    'ramda/set-simplification': 'error',
    'ramda/unless-simplification': 'error',
    'ramda/when-simplification': 'error'
  },
}

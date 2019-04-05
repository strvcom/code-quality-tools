/**
 * strvcom/eslint-config-node
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: './v8.js',

  parserOptions: {
    ecmaVersion: 2018,
  },

  rules: {
    // Suggest using named capture group in regular expression
    // This rule is aimed at using named capture groups instead of numbered capture groups in
    // regular expressions.
    // @TODO(semver-major): Remove this override once we drop support for Node 8
    // This rule is already enabled in the base ruleset
    'prefer-named-capture-group': 'warn',
  },
}

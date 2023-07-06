/**
 * strvcom/eslint-config-node
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2023 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  extends: './index.js',

  parserOptions: {
    ecmaVersion: 2023,
  },

  env: {
    es2023: true,
  },
}

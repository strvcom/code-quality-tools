/**
 * strvcom/eslint-config-node
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2020 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {

  extends: './index.js',

  parserOptions: {
    ecmaVersion: 2020,
  },

  env: {
    es2020: true,
  },
}

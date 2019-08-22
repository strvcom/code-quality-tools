/**
 * strvcom/eslint-config-base
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = {
  // Test files patterns
  tests: [
    'test/**',
    '**/*.test.*',
    '**/*.spec.*',
  ],

  // Configuration files patterns
  configs: [
    '**/config/**',
    '**/configuration/**',
  ],

  javascripts: [
    '*.js',
    '.*.js',
    '*.cjs',
    '.*.cjs',
  ],

  esmodules: [
    '*.mjs',
    '.*.mjs',
  ],

  typescripts: [
    '*.ts',
    '.*.ts',
    '*.tsx',
    '.*.tsx',
  ],
}

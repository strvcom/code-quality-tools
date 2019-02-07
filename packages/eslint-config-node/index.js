/**
 * strvcom/eslint-config-node
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const globs = require('@strv/eslint-config-base/globs')

module.exports = {

  extends: require.resolve('@strv/eslint-config-base'),

  parserOptions: {
    ecmaVersion: 2017,
  },

  env: {
    es6: true,
    node: true,
  },

  plugins: [
    'node',
  ],

  rules: {
    // Enforce `require()` on the top-level module scope
    // It's arguably harder to identify dependencies when they are deeply nested inside of functions
    // and other statements. Since require() does a synchronous load, it can cause performance
    // problems when used in other locations.
    'global-require': 'warn',

    // Disallow use of the deprecated Buffer() constructor
    // In Node.js, the behavior of the Buffer constructor is different depending on the type of its
    // argument. Passing an argument from user input to Buffer() without validating its type can
    // lead to security vulnerabilities such as remote memory disclosure and denial of service.
    'no-buffer-constructor': 2,

    // Disallow new require
    // This rule aims to eliminate use of the `new require` expression.
    'no-new-require': 'error',

    // Disallow string concatenation when using _dirname and _filename
    // This rule aims to prevent string concatenation of directory paths in Node.js to make sure
    // developers use a platform-independent way of creating paths (we feel you, Windows).
    'no-path-concat': 'error',

    // Disallow process.env
    // This rule is aimed at discouraging use of process.env to avoid global dependencies throughout
    // the project's codebase.
    //
    // Note: Env vars are a great way of managing configuration options. This rule can be safely
    // turned off for a particular file/folder where project configuration is gathered and stored in
    // custom configuration objects which you then use throughout your app, but the use of
    // process.env outside of preparing configuration data should be discouraged.
    'no-process-env': 'warn',

    // Disallow `process.exit()`
    // It's better to throw an error and allow the application to handle it appropriately. Unhandled
    // errors always exit the process, but contrary to `process.exit()` they also print a stack
    // trace.
    'no-process-exit': 'error',

    // Disallow Synchronous Methods
    // This rule is aimed at preventing synchronous methods from being called in Node.js. It looks
    // specifically for the method suffix "Sync" (as is the convention with Node.js operations).
    'no-sync': ['warn', {
      allowAtRootLevel: true,
    }],

    // Disallow unsupported ECMAScript features on the specified version
    // This rule reports unsupported ECMAScript built-in variables on the configured Node.js version
    // as lint errors. This rule reads the engines field of package.json to detect which Node.js
    // versions your module is supporting.
    'node/no-unsupported-features/es-builtins': 'error',

    // Disallow unsupported ECMAScript syntax on the specified version
    // This rule reports unsupported ECMAScript syntax on the configured Node.js version as lint
    // errors. This rule reads the engines field of package.json to detect which Node.js versions
    // your module is supporting.
    'node/no-unsupported-features/es-syntax': 'error',

    // Disallow unsupported Node.js built-in APIs on the specified version
    // This rule reports unsupported Node.js built-in APIs on the configured Node.js version as lint
    // errors. This rule reads the engines field of package.json to detect which Node.js versions
    // your module is supporting.
    'node/no-unsupported-features/node-builtins': 'error',

    // Treat process.exit() the same code path as throw
    // If you turn this rule on, ESLint comes to address process.exit() as throw in code path
    // analysis.
    'node/process-exit-as-throw': 'error',

    // Suggest correct usage of shebang
    // This rule checks bin field of package.json, then if a target file matches one of bin files,
    // it checks whether or not there is a correct shebang. Otherwise it checks whether or not there
    // is not a shebang.
    'node/shebang': 'warn',

    // Disallow deprecated API
    // Node has many deprecated API. The community is going to remove those API from Node in future,
    // so we should not use those.
    'node/no-deprecated-api': 'warn',
  },

  overrides: [{
    files: globs.javascripts,

    parserOptions: {
      sourceType: 'script',
    },
  }, {
    files: globs.esmodules,

    parserOptions: {
      sourceType: 'module',
    },

    env: {
      es6: true,
    },
  }],
}

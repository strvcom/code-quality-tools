/**
 * strvcom/eslint-config-node
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const base = require('@strv/eslint-config-base')
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

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          ...base.settings['import/resolver'].node.extensions,
          '.node',
        ],
      },
    },
  },

  rules: {
    // Disallow use of the deprecated Buffer() constructor
    // In Node.js, the behavior of the Buffer constructor is different depending on the type of its
    // argument. Passing an argument from user input to Buffer() without validating its type can
    // lead to security vulnerabilities such as remote memory disclosure and denial of service.
    'no-buffer-constructor': 2,

    // Enforce Return After Callback
    // This rule is aimed at ensuring that callbacks used outside of the main function block are
    // always part of or immediately preceding a return statement.
    'node/callback-return': ['error', [
      // The following variables will be considered callbacks. More can be added as necessary.
      'cb',
      'callback',
      'next',
      'done',
    ]],

    // Enforce `require()` on the top-level module scope
    // It's arguably harder to identify dependencies when they are deeply nested inside of functions
    // and other statements. Since require() does a synchronous load, it can cause performance
    // problems when used in other locations.
    'node/global-require': 'warn',

    // Enforce Callback Error Handling
    // This rule expects that when you're using the callback pattern in node you'll handle the
    // error. Matches: err, Err, error, someErr, someError, any_error, ...
    'node/handle-callback-err': ['error', '^.*(e|E)rr(or)?'],

    // Ensure the Node.js error-first callback pattern is followed
    // When invoking a callback function which uses the Node.js error-first callback pattern, all of
    // your errors should either use the Error class or a subclass of it. It is also acceptable to
    // use undefined or null if there is no error.
    'node/no-callback-literal': ['warn'],

    // Disallow assignment to exports object
    // This rule is aimed at disallowing `exports = {}`.
    'node/no-exports-assign': 'error',

    // Disallow new require
    // This rule aims to eliminate use of the `new require` expression.
    'node/no-new-require': 'error',

    // Disallow string concatenation when using _dirname and _filename
    // This rule aims to prevent string concatenation of directory paths in Node.js to make sure
    // developers use a platform-independent way of creating paths (we feel you, Windows).
    'node/no-path-concat': 'error',

    // Disallow process.env
    // This rule is aimed at discouraging use of process.env to avoid global dependencies throughout
    // the project's codebase.
    //
    // Note: Env vars are a great way of managing configuration options. This rule can be safely
    // turned off for a particular file/folder where project configuration is gathered and stored in
    // custom configuration objects which you then use throughout your app, but the use of
    // process.env outside of preparing configuration data should be discouraged.
    'node/no-process-env': 'warn',

    // Disallow `process.exit()`
    // It's better to throw an error and allow the application to handle it appropriately. Unhandled
    // errors always exit the process, but contrary to `process.exit()` they also print a stack
    // trace.
    'node/no-process-exit': 'error',

    // Disallow Synchronous Methods
    // This rule is aimed at preventing synchronous methods from being called in Node.js. It looks
    // specifically for the method suffix "Sync" (as is the convention with Node.js operations).
    'node/no-sync': ['warn', {
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
    files: [
      ...globs.esmodules,
      ...globs.typescripts,
    ],

    parserOptions: {
      sourceType: 'module',
    },

    env: {
      es6: true,
    },

    rules: {
      // Allow ES Modules to be used in these source files
      'node/no-unsupported-features/es-syntax': ['error', {
        ignores: ['modules'],
      }],

      // Report modules without any exports & individual exports not being statically imported or
      // required from other modules in the same project
      'import/no-unused-modules': ['warn', {
        missingExports: true,
        unusedExports: true,
      }],
    },
  }],
}

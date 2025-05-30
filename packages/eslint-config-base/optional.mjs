import { defineConfig } from 'eslint/config'

/** @returns {ReturnType<typeof defineConfig>} */
export default defineConfig({
  name: '@strv/eslint-config-base/optional',
  rules: {
    // Require Consistent Returns
    // This rule is aimed at ensuring all return statements either specify a value or don't specify
    // a value.
    'consistent-return': ['warn', {
      treatUndefinedAsUnspecified: true,
    }],

    // Limit Maximum Depth
    // This rule aims to reduce the complexity of your code by allowing you to configure the maximum
    // depth blocks can be nested in a function.
    'max-depth': ['warn', 5],

    // Disallow Use of console
    // In general, you should use a logging library which offers more flexibility in terms of log
    // level configuration and log destinations (i.e. sending logs to external storage/monitoring
    // service), such as `debug` or `bunyan`.
    // Feel free to turn this rule off in your project-level ruleset if you are ok with logging to
    // console only.
    // On frontend, custom logging logic should be implemented.
    //
    // @see  https://www.npmjs.com/package/debug

    // @see  https://www.npmjs.com/package/bunyan
    'no-console': 'warn',

    // Require Function Expressions to have a Name
    // If you provide the optional name for a function expression then you will get the name of the
    // function expression in the stack trace.
    // If you are tempted to create anonymous function expression, consider using arrow function
    // instead.
    'func-names': ['warn', 'as-needed'],

    // Disallow Use of `undefined` Variable
    // In ECMAScript 3 it was possible to overwrite the value of undefined. While ECMAScript 5
    // disallows overwriting undefined, it's still possible to shadow `undefined`.
    'no-undefined': 'warn',

    // Require symbol description
    // This rule requires a description when creating symbols. Using description promotes easier
    // debugging - when a symbol is logged the description is used.
    'symbol-description': 'warn',

    // Reports if a resolved path is imported more than once
    'import/no-duplicates': 'warn',
  },
})

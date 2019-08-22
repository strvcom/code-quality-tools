/**
 * strvcom/eslint-config-typescript
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const base = require('@strv/eslint-config-base')

module.exports = {

  extends: require.resolve('@strv/eslint-config-base'),

  settings: {
    // Correctly recognise .ts and .d.ts files when checking import paths against the filesystem
    'import/resolver': {
      node: {
        extensions: [
          '.ts',
          '.tsx',
          '.d.ts',
          ...base.settings['import/resolver'].node.extensions,
        ],
      },
    },
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint',
  ],

  env: {
    es6: true,
  },

  rules: {

    // TS code is mostly self-documented and having JSDoc directives for everything is redundant
    // when you can easily infer return values and argument types from the code itself.
    'valid-jsdoc': 'off',

    // Disabled because it generates false positives with interface declarations and TypeScript
    // blows up anyway during compilation when it encouters an undefined variable.
    'no-undef': 'off',

    // Disabled because it conflicts with typescript/no-unused-vars and does not support
    // typescript specific declarations properly.
    'no-unused-vars': 'off',

    'no-useless-constructor': 'off',

    // Require that member overloads be consecutive
    // Grouping overloaded members together can improve readability of the code.
    '@typescript-eslint/adjacent-overload-signatures': 'warn',

    // Requires using either T[] or Array<T> for arrays
    // This rule aims to standardise usage of array types within your codebase.
    '@typescript-eslint/array-type': ['warn', {
      default: 'array-simple',
      readonly: 'array-simple',
    }],

    // Disallows awaiting a value that is not a Promise
    // This rule disallows awaiting a value that is not a "Thenable" (an object which has then
    // method, such as a Promise). While it is valid JavaScript to await a non-Promise-like value
    // (it will resolve immediately), this pattern is often a programmer error, such as forgetting
    // to add parenthesis to call a function that returns a Promise.
    '@typescript-eslint/await-thenable': 'warn',

    // Bans “// @ts-ignore” comments from being used
    // Suppressing Typescript Compiler Errors can be hard to discover.
    '@typescript-eslint/ban-ts-ignore': 'error',


    // Require PascalCased class and interface names
    // This rule aims to make it easy to differentiate classes from regular variables at a glance.
    '@typescript-eslint/class-name-casing': 'warn',

    // Require explicit return types on functions and class methods
    // Explicit types for function return values makes it clear to any calling code what type is
    // returned. This ensures that the return value is assigned to a variable of the correct type;
    // or in the case where there is no return value, that the calling code doesn't try to use the
    // undefined value when it shouldn't.
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      allowExpressions: true,
    }],

    // Require explicit accessibility modifiers on class properties and methods
    // This rule aims to make code more readable and explicit about who can use which properties.
    '@typescript-eslint/explicit-member-accessibility': ['warn', {
      accessibility: 'no-public',
    }],

    // Require a consistent member declaration order
    // A consistent ordering of fields, methods and constructors can make interfaces, type literals,
    // classes and class expressions easier to read, navigate and edit.
    '@typescript-eslint/member-ordering': 'warn',

    // Disallow generic Array constructors
    // Use of the Array constructor to construct a new array is generally discouraged in favor of
    // array literal notation because of the single-argument pitfall and because the Array global
    // may be redefined.
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow the declaration of empty interfaces
    // An empty interface is equivalent to its supertype. If the interface does not implement a
    // supertype, then the interface is equivalent to an empty object ({}). In both cases it can be
    // omitted.
    '@typescript-eslint/no-empty-interface': 'warn',

    // Disallows explicit type declarations for variables or parameters initialized to a number,
    // string, or boolean
    // This rule disallows explicit type declarations on parameters, variables and properties where
    // the type can be easily inferred from its value.
    '@typescript-eslint/no-explicit-any': 'warn',

    // Forbids the use of classes as namespaces
    // This rule warns when a class is accidentally used as a namespace.
    '@typescript-eslint/no-extraneous-class': ['warn', {
      allowConstructorOnly: true,
    }],

    // @TODO(semver-major): -> error
    // Requires Promise-like values to be handled appropriately
    // This rule forbids usage of Promise-like values in statements without handling their errors
    // appropriately. Unhandled promises can cause several issues, such as improperly sequenced
    // operations, ignored Promise rejections and more.
    '@typescript-eslint/no-floating-promises': 'warn',

    // @TODO(semver-major): -> error. The indexes are treated as strings!
    // Disallow iterating over an array with a for-in loop
    // A for-in loop (for (var k in o)) iterates over the properties of an Object. While it is legal
    // to use for-in loops with array types, it is not common. for-in will iterate over the indices
    // of the array as strings, omitting any "holes" in the array.
    '@typescript-eslint/no-for-in-array': 'warn',

    // @TODO(semver-major): -> error
    // Enforce valid definition of new and constructor
    // Warns on apparent attempts to define constructors for interfaces or new for classes.
    '@typescript-eslint/no-misused-new': 'warn',

    // @TODO(semver-major): -> error
    // Avoid using promises in places not designed to handle them
    // This rule forbids using promises in places where the Typescript compiler allows them but they
    // are not handled properly. These situations can often arise due to a missing await keyword or
    // just a misunderstanding of the way async functions are handled/awaited.
    '@typescript-eslint/no-misused-promises': 'warn',

    // Disallow the use of custom TypeScript modules and namespaces
    // Custom TypeScript modules (module foo {}) and namespaces (namespace foo {}) are considered
    // outdated ways to organize TypeScript code. ES2015 module syntax is now preferred
    // (import/export).
    '@typescript-eslint/no-namespace': 'error',

    // Disallow non-null assertions using the ! postfix operator
    // Using non-null assertions cancels the benefits of the strict null-checking mode.
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // Disallow the use of parameter properties in class constructors
    // This rule disallows the use of parameter properties in constructors, forcing the user to
    // explicitly declare all properties in the class.
    '@typescript-eslint/no-parameter-properties': 'warn',

    // Disallows invocation of require()
    // Prefer the newer ES6-style imports over require().
    '@typescript-eslint/no-require-imports': 'warn',

    // Disallow aliasing this
    // Assigning a variable to this instead of properly using arrow lambdas may be a symptom of
    // pre-ES6 practices or not managing scope well.
    '@typescript-eslint/no-this-alias': ['warn', {
      allowDestructuring: true,
    }],

    // Warns when a namespace qualifier is unnecessary
    // This rule aims to let users know when a namespace or enum qualifier is unnecessary, whether
    // used for a type or for a value.
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',

    // Warns if a type assertion does not change the type of an expression
    // This rule aims to prevent unnecessary type assertions.
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',

    // Disallow /// <reference path="" /> comments
    // Triple-slash reference directive comments should not be used anymore. Use import instead.
    '@typescript-eslint/triple-slash-reference': ['error', {
      path: 'never',
      types: 'never',
      lib: 'never',
    }],

    // Variables that are declared and not used anywhere in the code are most likely an error due
    // to incomplete refactoring. Such variables take up space in the code and can lead to
    // confusion by readers.
    '@typescript-eslint/no-unused-vars': base.rules['no-unused-vars'],

    // Disallow the use of variables before they are defined
    // This rule will warn when it encounters a reference to an identifier that has not yet been
    // declared.
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
      classes: false,
      typedefs: false,
    }],

    // Disallows the use of require statements except in import statements
    // In other words, the use of forms such as var foo = require("foo") are banned. Instead use ES6
    // style imports or import foo = require("foo") imports.
    '@typescript-eslint/no-var-requires': 'error',

    // Disallow unnecessary constructors
    // This rule flags class constructors that can be safely removed without changing how the class
    // works.
    '@typescript-eslint/no-useless-constructor': base.rules['no-useless-constructor'],

    // Require the use of the namespace keyword instead of the module keyword to declare custom
    // TypeScript modules
    // In an effort to prevent further confusion between custom TypeScript modules and the new
    // ES2015 modules, starting with TypeScript v1.5 the keyword namespace is now the preferred way
    // to declare custom TypeScript modules.
    '@typescript-eslint/prefer-namespace-keyword': 'warn',

    // Functions that return promises must be async

    // Requires any function or method that returns a Promise to be marked async. Ensures that each
    // function is only capable of:
    // - returning a rejected promise, or
    // - throwing an Error object
    //
    // In contrast, non-async Promise-returning functions are technically capable of either. Code
    // that handles the results of those functions will often need to handle both cases, which can
    // get complex.
    '@typescript-eslint/promise-function-async': 'warn',

    // Enforce giving compare argument to Array#sort
    // This rule is aimed at preventing the calls of Array#sort method. This rule ignores the sort
    // methods of user-defined types.
    '@typescript-eslint/require-array-sort-compare': 'warn',

    // Disallow async functions which have no await expression
    '@typescript-eslint/require-await': base.rules['require-await'],

    // @TODO(semver-major): -> error
    // When adding two variables, operands must both be of type number or of type string
    '@typescript-eslint/restrict-plus-operands': 'warn',

    // Enforces unbound methods are called with their expected scope
    // Class functions don't preserve the class scope when passed as standalone variables.
    '@typescript-eslint/unbound-method': 'warn',
  },
}

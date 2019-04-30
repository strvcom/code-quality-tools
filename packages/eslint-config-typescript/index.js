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

    // Require that member overloads be consecutive
    // Grouping overloaded members together can improve readability of the code.
    '@typescript-eslint/adjacent-overload-signatures': 'warn',

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
    '@typescript-eslint/explicit-member-accessibility': 'warn',

    // Require that interface names be prefixed with I
    // It can be hard to differentiate between classes and interfaces. Prefixing interfaces with "I"
    // can help telling them apart at a glance.
    '@typescript-eslint/interface-name-prefix': ['warn', 'always'],

    // Require a specific member delimiter style for interfaces and type literals
    // This rule aims to standardise the way interface and type literal members are delimited.
    '@typescript-eslint/member-delimiter-style': ['warn', {
      multiline: {
        delimiter: 'none',
      },
      singleline: {
        delimiter: 'comma',
      },
    }],

    // Require a consistent member declaration order
    // A consistent ordering of fields, methods and constructors can make interfaces, type literals,
    // classes and class expressions easier to read, navigate and edit.
    '@typescript-eslint/member-ordering': 'warn',

    // Enforces the use of `as Type` assertions instead of `<Type>` assertions
    // This rule aims to standardise the use of type assertion style across the codebase.
    '@typescript-eslint/no-angle-bracket-type-assertion': 'warn',

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

    // Disallow /// <reference path="" /> comments
    // Triple-slash reference directive comments should not be used anymore. Use import instead.
    '@typescript-eslint/no-triple-slash-reference': 'error',

    // Variables that are declared and not used anywhere in the code are most likely an error due
    // to incomplete refactoring. Such variables take up space in the code and can lead to
    // confusion by readers.
    '@typescript-eslint/no-unused-vars': 'error',

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

    // Require the use of the namespace keyword instead of the module keyword to declare custom
    // TypeScript modules
    // In an effort to prevent further confusion between custom TypeScript modules and the new
    // ES2015 modules, starting with TypeScript v1.5 the keyword namespace is now the preferred way
    // to declare custom TypeScript modules.
    '@typescript-eslint/prefer-namespace-keyword': 'warn',

    // Require consistent spacing around type annotations
    // This rule aims to enforce specific spacing patterns around type annotations and function
    // types in type literals.
    '@typescript-eslint/type-annotation-spacing': 'warn',
  },
}

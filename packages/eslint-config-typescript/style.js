/**
 * strvcom/eslint-config-typescript
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const style = require('@strv/eslint-config-base/style')

module.exports = {

  extends: require.resolve('@strv/eslint-config-base/style'),

  rules: {
    // Conflicts with typescript
    camelcase: 'off',
    'func-call-spacing': 'off',
    indent: 'off',
    'no-extra-parens': 'off',
    quotes: 'off',
    semi: 'off',

    // Enforce camelCase naming convention
    '@typescript-eslint/camelcase': style.rules.camelcase,

    // Enforces consistent usage of type assertions
    // This rule aims to standardise the use of type assertion style across the codebase.
    '@typescript-eslint/consistent-type-assertions': ['warn', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    }],

    // Consistent type definition with either interface or type
    // Interfaces are generally preferred over type literals because interfaces can be implemented,
    // extended and merged.
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

    // Require or disallow spacing between function identifiers and their invocations
    // This rule extends the base eslint/func-call-spacing rule. It supports all options and
    // features of the base rule. This version adds support for generic type parameters on function
    // calls.
    '@typescript-eslint/func-call-spacing': style.rules['func-call-spacing'],

    // Enforce consistent indentation
    '@typescript-eslint/indent': style.rules.indent,

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

    // disallow unnecessary parentheses
    '@typescript-eslint/no-extra-parens': style.rules['no-extra-parens'],

    // Disallows explicit type declarations for builtin primitive values
    // This rule disallows explicit type declarations on parameters, variables and properties where
    // the type can be easily inferred from its value.
    '@typescript-eslint/no-inferrable-types': 'warn',

    // Enforces that types will not to be used
    // Warns if an explicitly specified type argument is the default for that type parameter.
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

    // Use for-of loops instead of standard for loops over arrays
    // This rule recommends a for-of loop when the loop index is only used to read from an array
    // that is being iterated.
    '@typescript-eslint/prefer-for-of': 'warn',

    // Use function types instead of interfaces with call signatures
    // This rule suggests using a function type instead of an interface or object type literal with
    // a single call signature.
    '@typescript-eslint/prefer-function-type': 'warn',

    // Enforce includes method over indexOf method
    // This rule is aimed at suggesting includes method if indexOf method was used to check whether
    // an object contains an arbitrary value or not.
    '@typescript-eslint/prefer-includes': 'warn',

    // require never-modified private members be marked as readonly
    // Member variables with the privacy private are never permitted to be modified outside of their
    // declaring class. If that class never modifies their value, they may safely be marked as
    // readonly.
    '@typescript-eslint/prefer-readonly': 'warn',

    // Enforce to use RegExp#exec over String#match
    // This rule is aimed at enforcing the more performant way of applying regular expressions on
    // strings.
    '@typescript-eslint/prefer-regexp-exec': 'warn',

    // Enforce the use of String#startsWith and String#endsWith
    // This rule is aimed at enforcing a consistent way to check whether a string starts or ends
    // with a specific string.
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

    // Enforce the consistent use of either backticks, double, or single quotes
    // This rule extends the base eslint/quotes rule. It supports all options and features of the
    // base rule.
    '@typescript-eslint/quotes': style.rules.quotes,

    // Enforce or Disallow Semicolons
    // This rule is aimed at ensuring consistent use of semicolons.
    '@typescript-eslint/semi': style.rules.semi,

    // Require consistent spacing around type annotations
    // This rule aims to enforce specific spacing patterns around type annotations and function
    // types in type literals.
    '@typescript-eslint/type-annotation-spacing': 'warn',

    // Warns for any two overloads that could be unified into one
    // Warns for any two overloads that could be unified into one by using a union or an
    // optional/rest parameter. This rule aims to keep the source code as maintanable as posible by
    // reducing the amount of overloads.
    '@typescript-eslint/unified-signatures': 'warn',
  },
}

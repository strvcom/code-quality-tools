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

    // Enforce consistent brace style for blocks
    '@typescript-eslint/brace-style': style.rules['brace-style'],
    'brace-style': 'off',

    '@typescript-eslint/comma-dangle': style.rules['comma-dangle'],
    'comma-dangle': 'off',

    // Enforces consistent spacing before and after commas
    '@typescript-eslint/comma-spacing': style.rules['comma-spacing'],
    'comma-spacing': 'off',

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

    // Enforce default parameters to be last
    // This rule enforces default or optional parameters to be the last of parameters.
    '@typescript-eslint/default-param-last': style.rules['default-param-last'],
    'default-param-last': 'off',

    '@typescript-eslint/dot-notation': style.rules['dot-notation'],
    'dot-notation': 'off',

    // Require or disallow spacing between function identifiers and their invocations
    // This rule extends the base eslint/func-call-spacing rule. It supports all options and
    // features of the base rule. This version adds support for generic type parameters on function
    // calls.
    '@typescript-eslint/func-call-spacing': style.rules['func-call-spacing'],
    'func-call-spacing': 'off',

    // Enforce consistent indentation
    '@typescript-eslint/indent': style.rules.indent,
    indent: 'off',

    // This rule will enforce consistency of spacing around keywords and keyword-like tokens
    '@typescript-eslint/keyword-spacing': style.rules['keyword-spacing'],
    'keyword-spacing': 'off',

    // Require an empty line between class members
    '@typescript-eslint/lines-between-class-members': style.rules['lines-between-class-members'],
    'lines-between-class-members': 'off',

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

    // Enforce using a particular method signature syntax
    '@typescript-eslint/method-signature-style': ['warn', 'method'],

    // Enforces naming conventions for everything across a codebase
    '@typescript-eslint/naming-convention': ['warn', {
      selector: 'class',
      format: ['PascalCase'],
    }, {
      selector: 'classMethod',
      format: ['camelCase'],
    }, {
      selector: 'typeLike',
      format: ['PascalCase'],
    }, {
      selector: 'enumMember',
      format: ['UPPER_CASE', 'PascalCase'],
    }],

    // Reports if a resolved path is imported more than once
    'import/no-duplicates': 'warn',

    // disallow unnecessary parentheses
    '@typescript-eslint/no-extra-parens': style.rules['no-extra-parens'],
    'no-extra-parens': 'off',

    // Disallow extra non-null assertion
    '@typescript-eslint/no-extra-non-null-assertion': 'warn',

    // Disallow the `void` operator except when used to discard a value
    '@typescript-eslint/no-meaningless-void-operator': 'warn',

    // Flags unnecessary equality comparisons against boolean literals
    // Comparing boolean values to boolean literals is unnecessary, those comparisons result in the
    // same booleans. Using the boolean values directly, or via a unary negation (`!value`), is more
    // concise and clearer.
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',

    // Enforces that types will not to be used
    // Warns if an explicitly specified type argument is the default for that type parameter.
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',

    // Prefers a non-null assertion over explicit type cast when possible
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',

    // Enforce consistent spacing inside braces
    '@typescript-eslint/object-curly-spacing': style.rules['object-curly-spacing'],
    'object-curly-spacing': 'off',

    // Prefer usage of `as const` over literal type
    // This rule recommends usage of `const` assertion when type primitive value is equal to type.
    '@typescript-eslint/prefer-as-const': 'warn',

    // Use for-of loops instead of standard for loops over arrays
    // This rule recommends a for-of loop when the loop index is only used to read from an array
    // that is being iterated.
    '@typescript-eslint/prefer-for-of': 'warn',

    // Enforce includes method over indexOf method
    // This rule is aimed at suggesting includes method if indexOf method was used to check whether
    // an object contains an arbitrary value or not.
    '@typescript-eslint/prefer-includes': 'warn',

    // Prefer using concise optional chain expressions instead of chained logical ands
    // TypeScript 3.7 added support for the optional chain operator. This operator allows you to
    // safely access properties and methods on objects when they are potentially `null` or
    // `undefined`.
    '@typescript-eslint/prefer-optional-chain': 'warn',

    // Enforce to use RegExp#exec over String#match
    // This rule is aimed at enforcing the more performant way of applying regular expressions on
    // strings.
    '@typescript-eslint/prefer-regexp-exec': 'warn',

    // Enforce the use of String#startsWith and String#endsWith
    // This rule is aimed at enforcing a consistent way to check whether a string starts or ends
    // with a specific string.
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',

    '@typescript-eslint/prefer-ts-expect-error': 'warn',

    // Enforce the consistent use of either backticks, double, or single quotes
    // This rule extends the base eslint/quotes rule. It supports all options and features of the
    // base rule.
    '@typescript-eslint/quotes': style.rules.quotes,
    quotes: 'off',

    // Enforce or Disallow Semicolons
    // This rule is aimed at ensuring consistent use of semicolons.
    '@typescript-eslint/semi': style.rules.semi,
    semi: 'off',

    // Enforces consistent spacing before blocks
    '@typescript-eslint/space-before-blocks': 'warn',
    'space-before-blocks': 'off',

    // Require or disallow a space before function parenthesis
    '@typescript-eslint/space-before-function-paren': style.rules['space-before-function-paren'],
    'space-before-function-paren': 'off',

    // This rule is aimed at ensuring there are spaces around infix operators
    '@typescript-eslint/space-infix-ops': style.rules['space-infix-ops'],
    'space-infix-ops': 'off',

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

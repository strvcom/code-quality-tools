/**
 * strvcom/eslint-config-base
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

// These rules are the baseline coding style that prevails in most JS projects in the wild. It's
// main purpose is to serve as a baseline for all other coding style guidelines.
module.exports = {

  plugins: [
    'import',
  ],

  rules: {
    // enforce line breaks after opening and before closing array brackets
    // Requires consistent usage of linebreaks for each pair of brackets. It reports an error if one
    // bracket in the pair has a linebreak inside it and the other bracket does not.
    'array-bracket-newline': ['warn', 'consistent'],

    // Disallow or enforce spaces inside of brackets
    // Disallow
    'array-bracket-spacing': ['warn', 'never'],

    // enforce line breaks between array elements
    // A number of style guides require or disallow line breaks between array elements. This ruleset
    // requires consistent usage of linebreaks between array elements.
    'array-element-newline': ['warn', 'consistent'],

    // Require braces in arrow function body
    // This rule can enforce the use of braces around arrow function body.
    'arrow-body-style': ['warn', 'as-needed'],

    // Require parens in arrow function arguments
    // Arrow functions can omit parentheses when they have exactly one parameter. Since their main
    // strength lies in being short and concise, parens around arguments should be omitted when they
    // are not needed.
    'arrow-parens': ['warn', 'as-needed'],

    // Require space before/after arrow function's arrow
    'arrow-spacing': ['warn', {
      before: true,
      after: true,
    }],

    // Disallow or enforce spaces inside of single line blocks
    // Enforce
    'block-spacing': ['warn', 'always'],

    // Require Brace Style
    // The one true brace style is one of the most common brace styles in JavaScript, in which the
    // opening curly brace of a block is placed on the same line as its corresponding statement or
    // declaration.
    'brace-style': ['warn', '1tbs', {
      allowSingleLine: true,
    }],

    // Require Camelcase
    // This rule looks for any underscores (_) located within the source code. It ignores leading
    // and trailing underscores and only checks those in the middle of a variable name. If ESLint
    // decides that the variable is a constant (all uppercase), then no warning will be thrown.
    camelcase: ['warn'],

    // This rule enforces consistent use of trailing commas in object and array literals
    // Allow trailing commas for func parameters, array and object literals spread across
    // multiple lines
    'comma-dangle': ['warn', 'always-multiline'],

    // Enforces spacing around commas
    // This rule aims to enforce spacing around a comma.
    // A space must be only after comma, i.e. `var a, b`
    'comma-spacing': ['warn', {
      before: false,
      after: true,
    }],

    // Comma style
    // This rule is aimed at enforcing a particular comma style in JavaScript.
    // Commas should be placed at the end of line, not at the beginning
    'comma-style': ['warn', 'last'],

    // Disallow or enforce spaces inside of computed properties
    // This rule aims to maintain consistency around the spacing inside of computed properties.
    // No spaces allowed
    'computed-property-spacing': ['warn', 'never'],

    // Require Consistent This
    // This rule designates a variable as the chosen alias for `this`.
    'consistent-this': ['warn', 'self'],

    // Require Following Curly Brace Conventions
    // This rule is aimed at preventing bugs and increasing code clarity by ensuring that block
    // statements are wrapped in curly braces.
    // All block statements must be wrapped in curly braces
    curly: ['warn', 'all'],

    // Enforce default clauses in switch statements to be last
    'default-case-last': 'warn',

    // Enforce default parameters to be last
    // Putting default parameter at last allows function calls to omit optional tail arguments.
    'default-param-last': 'warn',

    // Enforce newline before and after dot
    // This rule aims to enforce newline consistency in member expressions. This rule prevents the
    // use of mixed newlines around the dot in a member expression.
    // Require the dot to be placed together with the property identifier
    'dot-location': ['warn', 'property'],

    // Require Dot Notation
    // This rule is aimed at maintaining code consistency and improving code readability by
    // encouraging use of the dot notation style whenever possible.
    'dot-notation': 'warn',

    // Require file to end with single newline
    // Benefits of trailing newlines include the ability to concatenate or append to files as well
    // as output files to the terminal without interfering with shell prompts.
    'eol-last': ['warn', 'unix'],

    // Enforce consistent line breaks inside function parentheses
    // Requires linebreaks inside function parentheses if any of the parameters/arguments have a
    // line break between them. Otherwise, it disallows linebreaks.
    'function-paren-newline': ['warn', 'multiline'],

    // Require or disallow spacing between function identifiers and their invocations
    // This rule disallows spaces between the function name and the opening parenthesis that calls
    // it.
    'func-call-spacing': 'warn',

    // Enforce Function Style
    // Due to these different behaviors, it is common to have guidelines as to which style of
    // function should be used. There is really no correct or incorrect choice here, it is just a
    // preference. A good reason to use function declarations is that the function names then appear
    // in stack traces which help during debugging.
    // Allow arrow functions to be saved into variables
    'func-style': ['warn', 'declaration', {
      allowArrowFunctions: true,
    }],

    // Require function names to match the name of the variable to which they are assigned
    'func-name-matching': 'warn',

    // Enforce spacing around the * in generator functions
    // This rule enforces that the * is placed together with the `function` keyword. The reasoning
    // is that a generator function is a special type of function, therefore it should come together
    // with the `function` keyword. In contrast, it has nothing to do with the function's name,
    // which may be missing completely.
    'generator-star-spacing': ['warn', {
      before: false,
      after: true,
      // For class/object methods, the * should come together with the name
      method: 'before',
    }],

    // Require grouped accessor pairs in object literals and classes
    // This rule requires grouped definitions of accessor functions for the same property in object
    // literals, class declarations and class expressions.
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],

    // Limit minimum and maximum length for identifiers
    // This rule is aimed at increasing code readability and maintainability by enforcing an
    // identifier length convention.
    'id-length': ['warn', {
      min: 2,
      max: 30,
      exceptions: [
        // index
        'i',
        // lodash 💩
        '_',
        // ramda 😍
        'R',
        // jQuery 🤮
        '$',
      ],
    }],

    // Validate Indentation
    // This rule is aimed to enforce consistent indentation style.
    indent: ['warn', 2, {
      SwitchCase: 1,
    }],

    // Enforce Property Spacing
    // This rule will warn when spacing in properties does not match the specified options. In the
    // case of long lines, it is acceptable to add a new line wherever whitespace is allowed.
    'key-spacing': ['warn', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],

    // This rule will enforce consistency of spacing around keywords and keyword-like tokens
    'keyword-spacing': ['warn', {
      before: true,
      after: true,
    }],

    // Disallow mixing CRLF and LF linebreaks
    // This rule aims to ensure having consistent line endings independent of operating system.
    'linebreak-style': ['error', 'unix'],

    // Require an empty line between class members
    // This rule improves readability by enforcing lines between class members. It will not check
    // empty lines before the first member and after the last member, since that is already taken
    // care of by padded-blocks.
    'lines-between-class-members': ['warn', 'always', {
      exceptAfterSingleLine: true,
    }],

    // Limit Maximum Length of Line
    // Very long lines of code in any language can be difficult to read. In order to aid in
    // readability and maintainability many coders have developed a convention to limit lines of
    // code to a certain number of characters.
    'max-len': ['warn', 100, 2],

    // Limit Maximum Number of Parameters
    // Functions that take numerous parameters can be difficult to read and write because it
    // requires the memorization of what each parameter is, its type, and the order they should
    // appear in.
    'max-params': ['warn', 4],

    // Set Maximum Depth of Nested Callbacks
    // This rule is aimed at increasing code clarity by discouraging deeply nesting callbacks.
    'max-nested-callbacks': ['warn', 4],

    // Specify the Maximum Number of Statements Allowed per Line
    // A line of code containing too many statements can be difficult to read. Code is generally
    // read from the top down, especially when scanning, so limiting the number of statements
    // allowed on a single line can be very beneficial for readability and maintainability.
    'max-statements-per-line': 'warn',

    // Enforce a particular style for multiline comments
    // Prefer consecutive line comments for multiline comment block
    'multiline-comment-style': ['warn', 'separate-lines'],

    // Enforce newlines between operands of ternary expressions
    // Enforce either the whole ternary on a single line or each part of the ternary on its own line
    // if the expression contains a newline
    'multiline-ternary': ['warn', 'always-multiline'],

    // Newline Per Chained Method Call
    // This rule checks and reports the chained calls if there are no new lines after each call or
    // deep member access.
    'newline-per-chained-call': ['warn', {
      ignoreChainWithDepth: 3,
    }],

    // Require Constructors to Use Initial Caps
    // This rule is aimed at helping to distinguish regular functions from constructor functions. As
    // such, it warns whenever it sees new followed by an identifier that isn't capitalized or
    // whenever it sees capitalized function called directly without new operator.
    'new-cap': ['warn', {
      newIsCap: true,
      capIsNew: true,
    }],

    // Require Parens for Constructors
    // This rule is aimed at highlighting a lack of convention and increasing code clarity by
    // requiring the use of parentheses when invoking a constructor via the new keyword.
    'new-parens': 'warn',

    // Enforce the location of single-line statements
    // When writing if, else, while, do-while, and for statements, the body can be a single
    // statement instead of a block. It can be useful to enforce a consistent location for these
    // single statements.
    'nonblock-statement-body-position': ['warn', 'below', {
      overrides: {
        if: 'beside',
        else: 'beside',
      },
    }],

    // Disallow return in else
    // If an if block contains a return statement, the else block becomes unnecessary. Its contents
    // can be placed outside of the block.
    'no-else-return': 'warn',

    // Disallow Extra Boolean Casts
    // In contexts such as an if statement's test where the result of the expression will already be
    // coerced to a Boolean, casting to a Boolean via double negation (!!) is unnecessary.
    'no-extra-boolean-cast': 'warn',

    // Disallow unnecessary parentheses
    // This rule restricts the use of parentheses to only where they are necessary.
    // developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
    'no-extra-parens': ['warn', 'all', {
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'multi-line',
    }],

    // Disallow Floating Decimals
    // Float values in JavaScript contain a decimal point, and there is no requirement that the
    // decimal point be preceded or followed by a number. Although not a syntax error, this format
    // for numbers can make it difficult to distinguish between true decimal numbers and the dot
    // operator.
    'no-floating-decimal': 'warn',

    // Disallow the type conversion with shorter notations
    // This rule is aimed to flag shorter notations for the type conversion, then suggest a more
    // self-explanatory notation.
    'no-implicit-coercion': 'warn',

    // Disallows comments after code
    // This rule will disallow comments on the same line as code.
    'no-inline-comments': 'warn',

    // Disallow if as the Only Statement in an else Block
    // This rule warns when an if statement's else block contains only another if statement.
    'no-lonely-if': 'warn',

    // Disallow mixes of different operators
    // Enclosing complex expressions by parentheses clarifies the developer’s intention, which makes
    // the code more readable. This rule warns when different operators are used consecutively
    // without parentheses in an expression.
    'no-mixed-operators': 'warn',

    // Disallow mixed spaces and tabs for indentation
    // The no-mixed-spaces-and-tabs rule is aimed at flagging any lines of code that are indented
    // with a mixture of tabs and spaces.
    'no-mixed-spaces-and-tabs': 'warn',

    // Disallow Use of Chained Assignment Expressions
    // This rule disallows using multiple assignments within a single statement.
    'no-multi-assign': 'warn',

    // Disallows multiple blank lines
    // Whitespace is useful for separating logical sections of code, but excess whitespace takes up
    // more of the screen.
    'no-multiple-empty-lines': ['warn', {
      max: 2,
      maxEOF: 1,
    }],

    // Disallow multiple spaces
    // This rule aims to disallow multiple whitespace around logical expressions, conditional
    // expressions, declarations, array elements, object properties, sequences and function
    // parameters.
    'no-multi-spaces': 'warn',

    // Disallow tabs
    // Use of tabs is discouraged in favour of spaces because there is no "standard" width for a tab
    // character and many viewers/editors use their own tab width, which could cause code to be
    // misaligned and not formatted as intended/indented.
    'no-tabs': 'warn',

    // Disallow Nested Ternaries
    // The no-nested-ternary rule aims to increase the clarity and readability of code by
    // disallowing the use of nested ternary expressions.
    'no-nested-ternary': 'error',

    // Disallow trailing spaces at the end of lines
    // Sometimes in the course of editing files, you can end up with extra whitespace at the end of
    // lines. These whitespace differences can be picked up by source control systems and flagged as
    // diffs, causing frustration for developers. While this extra whitespace causes no functional
    // issues, many code conventions require that trailing spaces be removed before checkin.
    'no-trailing-spaces': 'warn',

    // Disallow Dangling Underscores in Identifiers
    'no-underscore-dangle': 'warn',

    // Disallow conditional expressions that can be expressed with simpler constructs
    // Use || instead of ternary in default assignments
    'no-unneeded-ternary': ['warn', {
      defaultAssignment: false,
    }],

    // Disallow unnecessary computed property keys on objects
    // It’s unnecessary to use computed properties when the property name is a literal.
    'no-useless-computed-key': 'warn',

    // Disallow Warning Comments
    // These comments are a warning signal, that there is something not production ready in your
    // code. Most likely you want to fix it or remove the comments before you roll out your code
    // with a good feeling.
    'no-warning-comments': ['warn', {
      location: 'anywhere',
    }],

    // Disallow whitespace before properties
    // This rule alerts for whitespace around the dot or brackets before properties of objects if
    // they are on the same line. It does not alert for whitespace when the object and property are
    // on separate lines.
    'no-whitespace-before-property': 'warn',

    // Enforce consistent line breaks inside braces
    'object-curly-newline': ['warn', {
      consistent: true,
    }],

    // Enforce spaces inside of curly braces in objects
    // This rule aims to maintain consistency around the spacing inside of object literals. It also
    // applies to EcmaScript 6 destructured assignment and import/export specifiers.
    'object-curly-spacing': ['warn', 'always'],

    // Enforce placing object properties on separate lines
    // This rule makes it possible to ensure, as some style guides require, that property
    // specifications appear on separate lines or on the same line for better readability.
    'object-property-newline': ['warn', {
      allowAllPropertiesOnSameLine: true,
    }],

    // Require Object Literal Shorthand Syntax
    // EcmaScript 6 provides a concise form for defining object literal methods and properties. This
    // syntax can make defining complex object literals much cleaner.
    'object-shorthand': ['warn', 'always'],

    // Require or Disallow One Variable Declaration per Scope
    // This rule is aimed at enforcing the use of one variable declaration per function (for var)
    // and multiple variable declaration per block (for let and const) scope.
    'one-var': ['warn', {
      var: 'always',
      let: 'never',
      const: 'never',
    }],

    // Require a newline around variable declarations
    // This rule enforces a consistent coding style where newlines are required after each var
    // declaration or just when there is a variable initialization. It ignores var declarations
    // inside for loop conditionals.
    'one-var-declaration-per-line': 'warn',

    // Operator Assignment Shorthand
    // This rule enforces use of the shorthand assignment operators by requiring them where
    // possible.
    'operator-assignment': ['warn', 'always'],

    // Operator Linebreak
    // When a statement is too long to fit on a single line, line breaks are generally inserted next
    // to the operators separating expressions. This rule is aimed at enforcing a particular
    // operator line break style.
    'operator-linebreak': ['warn', 'before'],

    // Enforce padding within blocks
    // This rule enforces consistent padding within blocks.
    'padded-blocks': ['warn', 'never'],

    // Require or disallow padding lines between statements
    // This rule requires or disallows blank lines between the given 2 kinds of statements. Properly
    // blank lines help developers to understand the code.
    'padding-line-between-statements': ['warn',
      // Newline after directives ("use strict" etc.), but not between them
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'never', prev: 'directive', next: 'directive' },
      // Newline after CommonJS require statements, but not between them
      { blankLine: 'always', prev: 'cjs-import', next: '*' },
      { blankLine: 'never', prev: 'cjs-import', next: 'cjs-import' },
      // Newline after ES modules' import statements, but not between them
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
      // Newline before CommonJS export assignments
      { blankLine: 'always', prev: '*', next: 'cjs-export' },
      // Newline before ES modules export statements
      { blankLine: 'always', prev: '*', next: 'export' },
      // Newline before class declarations
      { blankLine: 'always', prev: '*', next: 'class' },
      // Newline before function declarations
      { blankLine: 'always', prev: '*', next: 'function' }],

    // Suggest using arrow functions as callbacks
    // This rule is aimed to flag usage of function expressions in an argument list.
    'prefer-arrow-callback': ['warn', {
      allowNamedFunctions: true,
    }],

    // Suggest using const
    // This rule is aimed at flagging variables that are declared using let keyword, but never
    // modified after the initial assignment. This helps v8 to better optimise code at runtime.
    'prefer-const': 'warn',

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // This rule disallows parseInt() if it is called with two arguments: a string and a radix
    // option of 2 (binary), 8 (octal), or 16 (hexadecimal).
    'prefer-numeric-literals': 'warn',

    // Prefer use of an object spread over Object.assign
    // When Object.assign is called using an object literal as the first argument, this rule
    // requires using the object spread syntax instead. This rule also warns on cases where an
    // Object.assign call is made using a single argument that is an object literal, in this case,
    // the Object.assign call is not needed.
    'prefer-object-spread': 'warn',

    // Disallow use of the RegExp constructor in favor of regular expression literals
    'prefer-regex-literals': ['warn', {
      disallowRedundantWrapping: true,
    }],

    // Suggest using template literals instead of string concatenation
    // This rule is aimed to flag usage of + operators with strings.
    'prefer-template': 'warn',

    // Quoting Style for Property Names
    // This rule aims to enforce use of quotes in property names.
    // Require quotes where necessary, disallow where unnecessary
    'quote-props': ['warn', 'as-needed'],

    // Enforce Quote Style
    // This rule is aimed at ensuring consistency of string quotes.
    quotes: ['warn', 'single', 'avoid-escape'],

    // Enforce spacing between rest and spread operators and their expressions
    // This rule aims to enforce consistent spacing between rest and spread operators and their
    // expressions.
    'rest-spread-spacing': ['warn', 'never'],

    // Enforce spacing before and after semicolons
    'semi-spacing': ['warn', {
      before: false,
      after: true,
    }],

    // Enforce location of semicolons
    // Generally, semicolons are at the end of lines. However, in semicolon-less style, semicolons
    // are at the beginning of lines. This rule enforces that semicolons are at the configured
    // location.
    'semi-style': ['warn', 'first'],

    // Enforce or Disallow Semicolons
    // This rule is aimed at ensuring consistent use of semicolons.
    semi: ['warn', 'never'],

    // Require Or Disallow Space Before Blocks
    // This rule will enforce consistency of spacing before blocks.
    'space-before-blocks': ['warn', 'always'],

    // Require or disallow a space before function parenthesis
    'space-before-function-paren': ['warn', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],

    // Disallow or enforce spaces inside of parentheses
    // This rule will enforce consistency of spacing directly inside of parentheses, by disallowing
    // or requiring one or more spaces to the right of ( and to the left of ). In either case, ()
    // will still be allowed.
    'space-in-parens': ['warn', 'never'],

    // Require Spaces Around Infix Operators
    // This rule is aimed at ensuring there are spaces around infix operators.
    'space-infix-ops': 'warn',

    // Require or disallow spaces before/after unary operators
    // This rule enforces consistency regarding the spaces after words unary operators and
    // after/before nonwords unary operators.
    'space-unary-ops': ['warn', {
      words: true,
      nonwords: false,
    }],

    // Require or disallow a whitespace beginning a comment
    // This rule will enforce consistency of spacing after the start of a comment // or /*.
    'spaced-comment': ['warn', 'always', {
      // Allow TypeScript's `/// <reference />` stanzas
      markers: ['/'],
    }],

    // Enforce spacing around colons of switch statements
    // This rule controls spacing around colons of case and default clauses in switch statements.
    // Spacing around colons improves readability of case/default clauses.
    'switch-colon-spacing': 'warn',

    // Enforce Usage of Spacing in Template Strings
    // This rule aims to maintain consistency around the spacing inside of template literals.
    'template-curly-spacing': 'warn',

    // Require or disallow spacing between template tags and their literals
    // This rule aims to maintain consistency around the spacing between template tag functions and
    // their template literals.
    'template-tag-spacing': ['warn', 'never'],

    // Require IIFEs to be Wrapped
    'wrap-iife': ['warn', 'inside'],

    // Enforce spacing around the * in `yield*` expressions
    'yield-star-spacing': ['warn', 'after'],

    // Require or disallow Yoda Conditions
    // Yoda conditions are so named because the literal value of the condition comes first while the
    // variable comes second ("red" === color).
    yoda: 'warn',


    // PLUGIN: eslint-plugin-import


    // Enforce all exports to be declared at the bottom of the file
    // The exports-last rule is currently only working on ES6 exports.
    'import/exports-last': 'warn',

    // Reports when named exports are not grouped together in a single export declaration or when
    // multiple assignments to CommonJS module.exports or exports object are present in a single
    // file
    // An export declaration or module.exports assignment can appear anywhere in the code. By
    // requiring a single export declaration all your exports will remain at one place, making it
    // easier to see what exports a module provides.
    'import/group-exports': 'warn',

    // Ensure that there are no useless path segments in import statement path
    'import/no-useless-path-segments': ['warn', {
      noUselessIndex: true,
    }],

    // Enforce a convention in the order of require() / import statements
    'import/order': 'warn',

    // Enforces having an empty line after the last top-level import statement or require call
    'import/newline-after-import': 'warn',
  },
}

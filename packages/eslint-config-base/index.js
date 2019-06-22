/**
 * strvcom/eslint-config-base
 *
 * @author      Robert Rossmann <rr.rossmann@me.com>
 * @copyright   2019 STRV
 * @license     http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

const globs = require('./globs')

module.exports = {

  plugins: [
    'import',
  ],

  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.mjs',
          '.cjs',
          '.js',
          '.json',
          '.node',
        ],
      },
    },
  },

  rules: {
    // Enforce return statements in callbacks of array's methods
    // This rule enforces usage of return statement in callbacks of array's methods.
    'array-callback-return': 'error',

    // Enforce Return After Callback
    // This rule is aimed at ensuring that callbacks used outside of the main function block are
    // always part of or immediately preceding a return statement.
    'callback-return': ['error', [
      // The following variables will be considered callbacks. More can be added as necessary.
      'cb',
      'callback',
      'next',
      'done',
    ]],

    // Enforce for loop update clause moving the counter in the right direction
    // A for loop with a stop condition that can never be reached, such as one with a counter that
    // moves in the wrong direction, will run infinitely. While there are occasions when an infinite
    // loop is intended, the convention is to construct such loops as while loops. More typically,
    // an infinite for loop is a bug.
    'for-direction': 'error',

    // Enforce that a return statement is present in property getters
    // Not returning a value from a property getter is most likely a programmer mistake.
    'getter-return': 'error',

    // Require Guarding for-in
    // This rule is aimed at preventing unexpected behavior that could arise from using a for-in
    // loop without filtering the results in the loop.
    'guard-for-in': 'error',

    // Enforce Callback Error Handling
    // This rule expects that when you're using the callback pattern in node you'll handle the
    // error. Matches: err, Err, error, someErr, someError, any_error, ...
    'handle-callback-err': ['error', '^.*(e|E)rr(or)?'],

    // Enforce a maximum number of classes per file
    // Files containing multiple classes can often result in a less navigable and poorly structured
    // codebase. Best practice is to keep each file limited to a single responsibility.
    'max-classes-per-file': ['warn', 1],

    // Disallow using an async function as a Promise executor
    // This rule aims to disallow async Promise executor functions.
    'no-async-promise-executor': 'error',

    // Disallow await inside of loops
    // Performing an operation on each element of an iterable is a common task. However, performing
    // an await as part of each operation is an indication that the program is not taking full
    // advantage of the parallelization benefits of async/await.
    'no-await-in-loop': 'warn',

    // Disallow lexical declarations in case/default clauses
    // This rule disallows lexical declarations (let, const, function and class) in case/default
    // clauses. The reason is that the lexical declaration is visible in the entire switch block but
    // it only gets initialized when it is assigned, which will only happen if the case where it is
    // defined is reached.
    'no-case-declarations': 'error',

    // Disallow comparing against -0
    // The rule should warn against code that tries to compare against -0, since that will not work
    // as intended. That is, code like x === -0 will pass for both +0 and -0.
    'no-compare-neg-zero': 'error',

    // Disallow Assignment in Conditional Statements
    // This rule is aimed at eliminating ambiguous assignments in for, if, while, and do...while
    // conditional statements.
    'no-cond-assign': ['error', 'except-parens'],

    // Disallow use of constant expressions in conditions
    // Comparing a literal expression in a condition is usually a typo or development trigger for a
    // specific behavior.
    'no-constant-condition': 'error',

    // Disallow Controls Characters in Regular Expressions
    // Control characters are special, invisible characters in the ASCII range 0-31. These
    // characters are rarely used in JavaScript strings so a regular expression containing these
    // characters is most likely a mistake.
    'no-control-regex': 'error',

    // Disallow debugger
    // Production code should definitely not contain debugger.
    'no-debugger': 'error',

    // No duplicate arguments
    // Outside of strict mode duplicate arguments will mask the value of the first argument.
    'no-dupe-args': 'error',

    // Disallow Duplicate Keys
    // Creating objects with duplicate keys in objects can cause unexpected behavior in your
    // application.
    'no-dupe-keys': 'error',

    // Rule to disallow a duplicate case label
    // A switch statements with duplicate case labels is normally an indication of a programmer
    // error.
    'no-duplicate-case': 'error',

    // Disallow Empty Character Classes
    // Empty character classes in regular expressions do not match anything and can result in code
    // that may not work as intended.
    'no-empty-character-class': 'error',

    // Disallow Empty Block Statements
    // Empty block statements are usually an indicator of an error, or at the very least, an
    // indicator that some refactoring is likely needed.
    'no-empty': 'error',

    // Disallow eval()
    // This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by
    // disallowing the use of the eval() function.
    'no-eval': 'error',

    // Disallow Assignment of the Exception Parameter
    // When an error is caught using a catch block, it's possible to accidentally (or purposely)
    // overwrite the reference to the error. This makes it impossible to track the error from that
    // point on.
    'no-ex-assign': 'error',

    // Disallow Extending of Native Objects
    // In JavaScript, you can extend any object, including builtin or "native" objects. Sometimes
    // people change the behavior of these native objects in ways that break the assumptions made
    // about them in other parts of the code.
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    'no-extra-bind': 'error',

    // Disallow Unnecessary Labels
    // If a loop contains no nested loops or switches, labeling the loop is unnecessary.
    'no-extra-label': 'error',

    // Disallow Extra Semicolons
    // JavaScript will more or less let you put semicolons after any statement without complaining.
    // Typos and misunderstandings about where semicolons are required can lead to extra semicolons
    // that are unnecessary.
    'no-extra-semi': 'error',

    // Disallow Function Assignment
    // JavaScript functions can be written as a FunctionDeclaration `function foo() { ... }` or as a
    // FunctionExpression `var foo = function() { ... }`. While a JavaScript interpreter might
    // tolerate it, overwriting/reassigning a function written as a FunctionDeclaration is often
    // indicative of a mistake or issue.
    'no-func-assign': 'error',

    // Disallow Implied eval()
    // This rule aims to eliminate implied eval() through the use of setTimeout(), setInterval() or
    // execScript().
    'no-implied-eval': 'error',

    // Declarations in Program or Function Body
    // In JavaScript, prior to ES6, a function declaration is only allowed in the first level of a
    // program or the body of another function, though parsers sometimes erroneously accept them
    // elsewhere.
    // A variable declaration is permitted anywhere a statement can go, even nested deeply inside
    // other blocks. This is often undesirable due to variable hoisting, and moving declarations to
    // the root of the program or function body can increase clarity.
    'no-inner-declarations': ['error', 'both'],

    // Disallow Invalid Regular Expressions
    // This rule validates string arguments passed to the RegExp constructor.
    'no-invalid-regexp': 'error',

    // No irregular whitespace
    // Various whitespace characters can be inputted by programmers by mistake for example from
    // copying or keyboard shortcuts. Pressing Alt + Space on OS X adds in a non breaking space
    // character for example.
    'no-irregular-whitespace': 'error',

    // Disallow Iterator (__iterator__)
    // This rule is aimed at preventing errors that may arise from using the __iterator__ property,
    // which is not implemented in several browsers.
    'no-iterator': 'error',

    // Disallow Unnecessary Nested Blocks
    // This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of
    // a script or within other blocks.
    'no-lone-blocks': 'error',

    // Disallow Functions in Loops
    // This error is raised to highlight a piece of code that may not work as you expect it to and
    // could also indicate a misunderstanding of how the language works.
    'no-loop-func': 'warn',

    // Disallow characters which are made with multiple code points in character class syntax
    // Unicode includes characters which are made with multiple code points. RegExp character class
    // syntax (/[abc]/) cannot handle characters which are made by multiple code points as a
    // character; those characters will be dissolved to each code point. For example, ❇️ is made by
    // ❇ (U+2747) and VARIATION SELECTOR-16 (U+FE0F). If this character is in RegExp character
    // class, it will match to either ❇ (U+2747) or VARIATION SELECTOR-16 (U+FE0F) rather than ❇️.
    'no-misleading-character-class': 'error',

    // Disallow unnecessary `return await`
    // Inside an async function, return await is useless. Since the return value of an async
    // function is always wrapped in Promise.resolve, return await doesn’t actually do anything
    // except add extra time before the overarching Promise resolves or rejects. This pattern is
    // almost certainly due to programmer ignorance of the return semantics of async functions.
    'no-return-await': 'warn',

    // Disallow Initializing to undefined
    // In JavaScript, a variable that is declared and not initialized to any value automatically
    // gets the value of undefined.
    'no-undef-init': 'error',

    // Disallow negating the left operand of relational operators
    // This rule disallows negating the left operand of Relational Operators
    // See MDN: https://goo.gl/nFA3Mk
    'no-unsafe-negation': 'error',

    // Disallow Unused Variables
    // This rule is aimed at eliminating unused variables, functions and variables in parameters of
    // functions.
    'no-unused-vars': 'error',

    // Disallow Early Use
    // This rule will warn when it encounters a reference to an identifier that has not been yet
    // declared (but is declared later)
    // Function declarations are exempted from the rule, so it is allowed to use a function name
    // before its declaration
    'no-use-before-define': ['error', {
      functions: false,
      classes: false,
    }],

    // Disallow new For Side Effects
    // This rule is aimed at maintaining consistency and convention by disallowing constructor calls
    // using the new keyword that do not assign the resulting object to a variable.
    'no-new': 'error',

    // Disallow Function Constructor
    // This error is raised to highlight the use of a bad practice. By passing a string to the
    // Function constructor, you are requiring the engine to parse that string much in the way it
    // has to when you call the eval function.
    'no-new-func': 'error',

    // Disallow the use of the Object constructor
    // While there are no performance differences between the two approaches, the byte savings and
    // conciseness of the object literal form is what has made it the de facto way of creating new
    // objects.
    'no-new-object': 'warn',

    // Disallow Symbol Constructor
    // This rule is aimed at preventing the accidental calling of Symbol with the `new` operator.
    'no-new-symbol': 'error',

    // Disallow Primitive Wrapper Instances
    // Primitive wrapper objects are, in fact, objects. That means typeof will return "object"
    // instead of "string", "number", or "boolean". The second problem comes with boolean objects.
    // Every object is truthy, that means an instance of Boolean always resolves to true even when
    // its actual value is false. This rule aims to eliminate the use of String, Number, and Boolean
    // with the `new` operator.
    'no-new-wrappers': 'error',

    // Disallow Global Object Function Calls
    // This rule is aimed at preventing the accidental calling of global objects as functions.
    'no-obj-calls': 'error',

    // Disallow Spaces in Regular Expressions
    // This rule aims to eliminate errors due to multiple spaces inside of a regular expression.
    'no-regex-spaces': 'error',

    // Disallow Assignment in return Statement
    // This rule aims to eliminate assignments from return statements.
    'no-return-assign': 'error',

    // Disallow Script URLs
    // Using javascript: URLs is considered by some as a form of eval. Code passed in javascript:
    // URLs has to be parsed and evaluated by the browser in the same way that eval is processed.
    'no-script-url': 'error',

    // Disallow Self Assignment
    // Self assignments have no effect, so probably those are an error due to incomplete
    // refactoring. Those indicate that what you should do is still remaining.
    'no-self-assign': 'error',

    // Disallow Use of the Comma Operator
    // The comma operator includes multiple expressions where only one is expected. It evaluates
    // each operand from left to right and returns the value of the last operand. However, this
    // frequently obscures side effects, and its use is often an accident.
    'no-sequences': 'error',

    // Disallow Sparse Arrays
    // Sparse arrays contain empty slots, most frequently due to multiple commas being used in an
    // array literal. The confusion around sparse arrays defined in this manner is enough that it's
    // recommended to avoid using them.
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // This rule aims to warn when a regular string contains what looks like a template literal
    // placeholder.
    'no-template-curly-in-string': 'warn',

    // Avoid unexpected multiline expressions
    // This particular rule aims to spot scenarios where a newline looks like it is ending a
    // statement, but is not.
    'no-unexpected-multiline': 'error',

    // Disallow unmodified conditions of loops
    // This rule finds references which are inside of loop conditions, then checks the variables of
    // those references are modified in the loop.
    'no-unmodified-loop-condition': 'warn',

    // Disallow Unreachable Code
    // This rule is aimed at detecting unreachable code. It produces an error when a statements in a
    // block exist after a `return`, `throw`, `break`, or `continue` statement.
    'no-unreachable': 'error',

    // Disallow control flow statements in finally blocks
    // JavaScript suspends the control flow statements of `try` and `catch` blocks until the
    // execution of `finally` block finishes. So, when `return`, `throw`, `break`, or `continue` is
    // used in `finally`, control flow statements inside `try` and `catch` are overwritten, which is
    // considered as unexpected behavior.
    'no-unsafe-finally': 'error',

    // Disallow Unused Labels
    // Labels that are declared and not used anywhere in the code are most likely an error due to
    // incomplete refactoring.
    'no-unused-labels': 'error',

    // Disallow unnecessary .call() and .apply()
    // This rule is aimed to flag usage of Function.prototype.call() and Function.prototype.apply()
    // that can be replaced with the normal function invocation.
    'no-useless-call': 'error',

    // Disallow unncessary concatenation of strings
    // This rule aims to flag the concatenation of 2 literals when they could be combined into a
    // single literal.
    'no-useless-concat': 'warn',

    // Disallow unnecessary constructor
    // ES2015 provides a default class constructor if one is not specified. As such, it is
    // unnecessary to provide an empty constructor or one that simply delegates into its parent
    // class.
    'no-useless-constructor': 'error',

    // Disallow unnecessary escape usage
    // Escaping non-special characters in strings and regular expressions doesn’t have any effects
    // on results. This rule flags escapes that can be safely removed without changing behavior.
    'no-useless-escape': 'error',

    // Disallow redundant return statements
    // A `return` statement with nothing after it is redundant, and has no effect on the runtime
    // behavior of a function. This can be confusing, so it’s better to disallow these redundant
    // statements.
    'no-useless-return': 'warn',

    // Require let or const instead of var
    // This rule is aimed at discouraging the use of var and encouraging the use of const or let
    // instead.
    'no-var': 'error',

    // Suggest using the rest parameters instead of `arguments`
    // This rule is aimed to flag usage of `arguments` variables.
    'prefer-rest-params': 'error',

    // Require isNaN()
    // This rule is aimed at eliminating potential errors as the result of comparing against the
    // special value NaN.
    'use-isnan': 'error',

    // Ensures that the results of typeof are compared against a valid string
    // This rule aims to prevent errors from likely typos by ensuring that when the result of a
    // typeof operation is compared against a string, that the string is a valid value.
    'valid-typeof': 'error',

    // Verify calls of super() in constructors
    // This rule is aimed to flag invalid/missing super() calls.
    'constructor-super': 'error',

    // Disallow modifying variables of class declarations
    // This rule is aimed to flag modifying variables of class declarations.
    'no-class-assign': 'error',

    // Disallow modifying variables that are declared using `const`
    // We cannot modify variables that are declared using const keyword. It will raise a runtime
    // error.
    'no-const-assign': 'error',

    // Disallow duplicate name in class members
    // If there are declarations of the same name in class members, the last declaration overwrites
    // other declarations silently. It can cause unexpected behaviors.
    'no-dupe-class-members': 'error',

    // Disallow use of `this`/`super` before calling `super()` in constructors
    // In the constructor of derived classes, if `this`/`super` are used before `super()` calls, it
    // raises a reference error.
    'no-this-before-super': 'error',

    // Disallow Variables Deletion
    // The delete operator will only delete the properties of objects. It cannot "delete" variables
    // or anything else. Using them on variables might lead to unexpected behavior.
    'no-delete-var': 'error',

    // Disallow Labels That Are Variable Names
    // This rule aims to create clearer code by disallowing the bad practice of creating a label
    // that shares a name with a variable that is in scope.
    'no-label-var': 'error',

    // Disallow Shadowing of Restricted Names
    // Value Properties of the Global Object (NaN, Infinity, undefined) as well as strict mode
    // restricted identifiers eval and arguments are considered to be restricted names in
    // JavaScript. Defining them to mean something else can have unintended consequences and confuse
    // others reading the code.
    'no-shadow-restricted-names': 'error',

    // Disallow Shadowing
    // This rule aims to eliminate shadowed variable declarations.
    'no-shadow': ['error', {
      builtinGlobals: true,
      hoist: 'functions',
      allow: ['name'],
    }],

    // Disallow Undeclared Variables
    // This rule can help you locate potential ReferenceErrors resulting from misspellings of
    // variable and parameter names, or accidental implicit globals.
    'no-undef': ['error', {
      typeof: true,
    }],

    // Enforces getter/setter pairs in objects
    // It's a common mistake in JavaScript to create an object with just a setter for a property but
    // never have a corresponding getter defined for it. Without a getter, you cannot read the
    // property, so it ends up not being used.
    'accessor-pairs': 'error',

    // Require Default Case in Switch Statements
    // The thinking is that it's better to always explicitly state what the default behavior should
    // be so that it's clear whether or not the developer forgot to include the default behavior by
    // mistake. This rule aims to require default case in switch statements. You may optionally
    // include a `// no default` after the last case if there is no default case.
    'default-case': 'error',

    // Require === and !==
    // The reason for this is that == and != do type coercion which follows the rather obscure
    // Abstract Equality Comparison Algorithm. This rule is aimed at eliminating the type-unsafe
    // equality operators.
    //
    // @see  http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
    eqeqeq: 'error',

    // Disallow creation of dense arrays using the Array constructor
    // Use of the Array constructor to construct a new array is generally discouraged in favour of
    // array literal notation because of the single-argument pitfall.
    'no-array-constructor': 'error',

    // Disallow Use of caller/callee
    // The use of arguments.caller and arguments.callee make several code optimizations impossible.
    // They have been deprecated in future versions of JavaScript and their use is forbidden in
    // ECMAScript 5 while in strict mode.
    'no-caller': 'error',

    // Disallow Labeled Statements
    // This rule aims to eliminate the use of labeled statements in JavaScript. It will warn
    // whenever a labeled statement is encountered and whenever break or continue are used with a
    // label.
    'no-labels': 'error',

    // Disallow empty destructuring patterns
    // This rule aims to flag any empty patterns in destructured objects and arrays.
    'no-empty-pattern': 'error',

    // Disallow Case Statement Fallthrough
    // This rule is aimed at eliminating unintentional fallthrough of one case to the other.
    'no-fallthrough': 'error',

    // Disallow assignment to native objects or read-only global variables
    // This rule disallows modifications to read-only global variables.
    'no-global-assign': ['error', {
      exceptions: ['Promise'],
    }],

    // Disallow Octal Escapes
    // As of version 5 of the ECMAScript specification, octal escape sequences are a deprecated
    // feature and should not be used. It is recommended that Unicode escapes be used instead.
    'no-octal-escape': 'error',

    // Disallow Octal Literals
    // The rule is aimed at preventing the use of a deprecated JavaScript feature, the use of octal
    // literals.
    'no-octal': 'error',

    // Disallow Use of __proto__
    // __proto__ property has been deprecated as of ECMAScript 3.1 and shouldn't be used in the
    // code. Use getPrototypeOf method instead.
    'no-proto': 'error',

    // Disallow Redeclaring Variables
    // This rule is aimed at eliminating variables that have multiple declarations in the same
    // scope.
    'no-redeclare': ['error', {
      builtinGlobals: true,
    }],

    // Disallow Comparisons to Itself
    // This rule aims to highlight a potentially confusing and potentially pointless piece of code.
    // There are almost no situations in which you would need to compare something to itself.
    'no-self-compare': 'error',

    // Restrict what can be thrown as an exception
    // This rule is aimed at maintaining consistency when throwing exception by disallowing to throw
    // literals and other expressions which cannot possibly be an Error object.
    'no-throw-literal': 'error',

    // Disallow Unused Expressions
    // This rule aims to eliminate unused expressions. The value of an expression should always be
    // used, except in the case of expressions that side effect: function calls, assignments, and
    // the `new` operator.
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],

    // No `with` Statements
    // The with statement is potentially problematic because it adds members of an object to the
    // current scope, making it impossible to tell what a variable inside the block actually refers
    // to. Additionally, the with statement cannot be used in strict mode.
    'no-with': 'error',

    // Suggest using named capture group in regular expression
    // This rule is aimed at using named capture groups instead of numbered capture groups in
    // regular expressions.
    'prefer-named-capture-group': 'warn',

    // Require using Error objects as Promise rejection reasons
    // It is considered good practice to only instances of the built-in Error object for
    // user-defined errors in Promises. Error objects automatically store a stack trace, which can
    // be used to debug an error by determining where it came from. If a Promise is rejected with a
    // non-Error value, it can be difficult to determine where the rejection occurred.
    'prefer-promise-reject-errors': 'error',

    // Suggest using the spread operator instead of .apply()
    // This rule is aimed to flag usage of Function.prototype.apply() that can be replaced with the
    // spread operator.
    'prefer-spread': 'warn',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // This rule aims to report assignments to variables or properties where all of the following
    // are true:
    // - A variable or property is reassigned to a new value which is based on its old value
    // - A yield or await expression interrupts the assignment after the old value is read, and
    //   before the new value is set
    'require-atomic-updates': 'warn',

    // Disallow async functions which have no await expression
    // Async functions which have no await expression may be the unintentional result of
    // refactoring.
    'require-await': 'warn',

    // Enforce the use of u flag on RegExp
    // RegExp u flag has two effects:
    // - Make the regular expression handling UTF-16 surrogate pairs correctly
    // - Make the regular expression throw syntax errors early by disabling Annex B extensions
    //
    // The u flag disables the recovering logic Annex B defined. As a result, you can find errors
    // early. This is similar to the strict mode. Therefore, the u flag lets us work better with
    // regular expressions.
    'require-unicode-regexp': 'error',

    // Disallow generator functions that do not have yield
    'require-yield': 'error',

    // Strict Mode
    // This rule is aimed at controlling how Use Strict Directives are used in code.
    // Require 'use strict' to be present at module-level scope
    strict: ['error', 'global'],

    // Require Variable Declarations to be at the top of their scope
    // This rule aims to keep all variable declarations in the leading series of statements.
    // Allowing multiple declarations helps promote maintainability.
    'vars-on-top': 'warn',

    // Ensure an imported module can be resolved to a module on the local filesystem
    'import/no-unresolved': ['error', {
      commonjs: true,
    }],

    // Verifies that all named imports are part of the set of named exports in the referenced module
    'import/named': 'error',

    // If a default import is requested, this rule will report if there is no default export in the
    // imported module
    'import/default': 'error',

    // This rule reports any imports that come after non-import statements
    'import/first': 'error',

    // Enforces names exist at the time they are dereferenced, when imported as a full namespace
    'import/namespace': 'error',

    // Forbid import of modules using absolute paths
    // Node.js allows the import of modules using an absolute path such as */home/xyz/file.js*. That
    // is a bad practice as it ties the code using it to your computer.
    'import/no-absolute-path': 'error',

    // Reports funny business with exports, like repeated exports of names or defaults
    'import/export': 'error',

    // Ensure consistent use of file extension within the import path
    'import/extensions': ['warn', 'never'],

    // Reports if a module's default export is unnamed
    // Ensuring that default exports are named helps improve the grepability of the codebase by
    // encouraging the re-use of the same identifier for the module's default export at its
    // declaration site and at its import sites.
    'import/no-anonymous-default-export': ['warn', {
      allowObject: true,
      allowArray: true,
    }],

    // Forbid the use of extraneous packages
    // Forbid the import of external modules that are not declared in package.json.
    'import/no-extraneous-dependencies': 'error',

    // Forbid the use of mutable exports with var or let
    'import/no-mutable-exports': 'error',

    // Reports use of an exported name as the locally imported name of a default export
    'import/no-named-as-default': 'warn',

    // Reports use of a default export as a locally named import
    'import/no-named-default': 'warn',

    // Reports use of an exported name as a property on the default export
    // Accessing a property that has a name that is shared by an exported name from the same module
    // is likely to be a mistake.
    'import/no-named-as-default-member': 'warn',

    // Forbid a module from importing itself
    'import/no-self-import': 'error',

    // Ensures that there is no resolvable path back to this module via its dependencies
    'import/no-cycle': ['error', {
      maxDepth: 8,
    }],
  },

  overrides: [{
    files: globs.configs,

    rules: {
      // Using process.env is encouraged in configuration files
      'no-process-env': 'off',
    },
  }],
}

import mocha from 'eslint-plugin-mocha'
import imports from 'eslint-plugin-import'

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: {
    mocha,
    import: imports,
  },
  rules: {
    // Enforce a maximum number of classes per file
    // When testing it is often practical to define a dummy/test class in each test case or test
    // suite. This rule makes it quite difficult -> turn it off!
    'max-classes-per-file': 'off',

    // Set Maximum Depth of Nested Callbacks
    // This rule is aimed at increasing code clarity by discouraging deeply nesting callbacks.
    // Allow some extra nesting for Mocha tests, due to Mocha's test coding patterns encouraging
    // some extra callback nesting.
    'max-nested-callbacks': ['warn', 6],

    // Enforces handling of callbacks for async tests
    // Mocha allows you to write asynchronous tests by adding a done callback to the parameters of
    // your test function. It is easy to forget calling this callback after the asynchronous
    // operation is done.
    'mocha/handle-done-callback': 'error',

    // Limit the number of top-level suites in a single file
    // This rule enforces having a limited amount of top-level suites in a file.
    'mocha/max-top-level-suites': ['warn', { limit: 1 }],

    // Disallow async functions passed to describe
    // This rule disallows the use of an async function with describe. It usually indicates a
    // copy/paste error or that you're trying to use describe for setup code, which should happen
    // in before or beforeEach.
    'mocha/no-async-suite': 'warn',

    // Disallow empty test descriptions
    // This rule enforces you to specify the suite/test descriptions for each test.
    'mocha/no-empty-description': 'warn',

    // Disallow exclusive tests
    // This rule reminds you to remove .only from your tests by raising a warning whenever you are
    // using the exclusivity feature.
    'mocha/no-exclusive-tests': 'warn',

    // Disallow global tests
    // This rule checks each mocha test function to not be located directly in the global scope.
    'mocha/no-global-tests': 'warn',

    // Disallow identical titles
    // This rule looks at the title of every test and test suites. It will report when two test
    // suites or two test cases at the same level of a test suite have the same title.
    'mocha/no-identical-title': 'warn',

    // Disallow tests to be nested within other tests
    // This rule looks for all test cases (it, specify and test) or suites (describe, context and
    // suite) which are nested within another test case.
    'mocha/no-nested-tests': 'error',

    // Disallow returning in a test or hook function that uses a callback
    // Mocha's tests or hooks (like before) may be asynchronous by either returning a Promise or
    // specifying a callback parameter for the function. It can be confusing to have both methods
    // used in a test or hook, and from Mocha v3 on, causes the test to fail in order to force
    // developers to remove this source of confusion.
    'mocha/no-return-and-callback': 'error',

    // Disallow returning from an async test or hook
    // Mocha's tests or hooks (like before) may be asynchronous by returning a Promise. When such
    // a Promise-returning function is defined using an ES7 async function it can be confusing
    // when combined with an explicit return of a Promise, as it's mixing the two styles.
    'mocha/no-return-from-async': 'warn',

    // Disallow setup in describe blocks
    // Any setup directly in a describe is run before all tests execute. This rule reports all
    // function calls and use of the dot operator (due to getters and setters) directly in
    // describe blocks.
    'mocha/no-setup-in-describe': 'warn',

    // Do not require test files to have exports or to be imported from somewhere inside the
    // project. Test files are usually sourced by Mocha directly.
    'import/no-unused-modules': 'off',
  },
}

export default config

'use strict'

module.exports = {
  rules: {
    terminology: {
      defaultTerms: false,
      skip: ['Blockquote', 'Header', 'Link', 'Emphasis', 'Strong'],
      terms: [
        // Brands
        'Airbnb',
        'AVA',
        'Browsersync',
        'ESLint',
        'JavaScript',
        'Lodash',
        'Markdown',
        'Sass',
        'TypeScript',
        'UglifyJS',
        ['JSDocs?', 'JSDoc'],
        ['Node[ .]js', 'Node'], // Official is Node.js, but it’s way too complicated
        ['React[ .]js', 'React'],
        ['StackOverflow', 'Stack Overflow'],
        ['HTTP[ /]2(?:\\.0)?', 'HTTP/2'],
        ['OS X', 'macOS'],
        ['Mac ?OS', 'macOS'],
        ['a npm', 'an npm'],
        'npm',
        'styled-components',
        'react-router',
        'ECMAScript',

        // Words and phrases
        'ID', // http://stackoverflow.com/questions/1151338/id-or-id-on-user-interface
        ["id['’]?s", 'IDs'],
        ['back[- ]end(\\w*)', 'backend$1'],
        ['front[- ]end(\\w*)', 'frontend$1'],
        ['end ?to ?end', 'end-to-end'],
        ['hot[- ]key', 'hotkey'],
        ['build system(s?)', 'build tool$1'],
        ['CLI tool(s?)', 'command line tool$1'],
        ['web[- ]?site(s?)', 'site$1'],
        ['repo\\b', 'repository'],
        ['style-?guide(s?)', 'style guide$1'],
        ['change-?log(s?)', 'change log$1'],
        ['source-?map(s?)', 'source map$1'],
        ['pre[- ]release(s?)', 'prerelease$1'],
        ['server ?side', 'server-side'],
        ['client ?side', 'client-side'],
        ['filetype(s?)', 'file type$1'],
        ['auto[- ]?complete', 'autocomplete'],
        ['auto[- ]?format', 'autoformat'],
        ['auto[- ]?fix', 'autofix'],
        ['auto[- ]?fixing', 'autofixing'],
        ['bug[- ]?fix(es?)', 'bugfix$1'],
        ['lock[- ]?file(s?)', 'lockfile$1'],
        ['name[- ]space(s?)', 'namespace$1'],
        ['tree-?shaking', 'tree shaking'],
        ['css-?in-?js', 'CSS in JS'],
        ['higher ?order', 'higher-order'],

        // Starts from a lower case letter in the middle of a sentence
        ['(\\w+[^.?!]\\)? )internet', '$1internet'],
        ['(\\w+[^.?!]\\)? )stylelint', '$1stylelint']
        // ["(\\w+[^.?!]\\)? )webpack", "$1webpack"]
      ]
    },
    'stop-words': true,
    'common-misspellings': true,
    'write-good': {
      adverb: false,
      passive: false,
      tooWordy: false,
      weasel: false
    },
    'title-case': {
      exclusions: ['documentation.js', 'gh-lint', 'lint-staged', 'npm', 'webpack', 'size-limit']
    },
    apostrophe: true
  },
  filters: {
    comments: true
  }
}

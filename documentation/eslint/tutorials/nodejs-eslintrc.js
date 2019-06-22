'use strict'

// Put this file to the directory where your node.js code is located. This could be the root
// directory, or a subdirectory if your project consists of both node.js and browser code.
module.exports = {
  extends: [
    '@strv/node/v12',
    '@strv/node/optional',
    '@strv/node/style',
    '@strv/mocha',
  ],
}

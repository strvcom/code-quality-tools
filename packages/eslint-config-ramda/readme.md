# @strv/eslint-config-ramda 🐏

## Install

```bash
$ npm install @strv/eslint-config-ramda -D
```

## Usage

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    // ... (base eslint config)
    '@strv/eslint-config-ramda',
  ],
}
```

The shareable config can be customized in your [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring).

## Plugins

This configuration uses the following plugins:

- [eslint-plugin-ramda](https://github.com/ramda/eslint-plugin-ramda)

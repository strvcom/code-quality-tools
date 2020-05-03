# @strv/eslint-config-functional

## Install

```bash
$ npm install @code-quality/eslint-config-functional -D
```

## Usage

Create a _.eslintrc.js_ file with the following contents:

```js
module.exports = {
  extends: [
    // ... (base eslint config)
    '@code-quality/eslint-config-functional',
  ],
}
```

The shareable config can be customized in your [**eslint** configuration file](https://eslint.org/docs/user-guide/configuring).

## Plugins

This configuration uses the following plugins:

- [`eslint-plugin-functional`](https://github.com/jonaskello/eslint-plugin-functional)

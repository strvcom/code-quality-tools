# @strv/textlint-rule-preset-strv

> STRV's config for [textlint][textlint-home]

Textlint doesn't support ["extends" convention](https://github.com/textlint/textlint/issues/210), thus we created [rule-preset](https://textlint.github.io/docs/rule-preset.html), which is a collection of rules and rulesConfig.

## Usage

```sh
# Yarn:
yarn add --dev @strv/textlint-rule-preset-strv

# npm:
npm install --save-dev @strv/textlint-rule-preset-strv
```

## Recommended textlint config

`.textlintrc.js`

```js
module.exports = {
  rules: {
    '@strv/textlint-rule-preset-strv': true,
  },
}
```

`.textlintrc` or `.textlintrc.json`

```json
{
  "rules": {
    "@strv/textlint-rule-preset-strv": true
  }
}
```

## License

See the [LICENSE](LICENSE) file for more information.

[textlint-home]: https://github.com/textlint/textlint

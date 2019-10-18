# @strv/textlint-rule-preset-strv

> STRV's config for [textlint][textlint-home]

Textlint doesn't support ["extends" convention](https://github.com/textlint/textlint/issues/210), thus we created [rule-preset](https://textlint.github.io/docs/rule-preset.html), which is a collection of rules and rulesConfig.

## Usage

```sh
npm i --save-dev @strv/textlint-rule-preset-strv
```

## Recommended textlint config

```js
// .textlintrc.js

'use strict'

module.exports = {
  rules: {
    '@strv/textlint-rule-preset-strv': true,
  },
}
```

<details>
<summary><i>.textlintrc</i> or <i>.textlintrc.json</i></summary>

```json
{
  "rules": {
    "@strv/textlint-rule-preset-strv": true
  }
}
```

</details>

## License

See the [LICENSE](LICENSE) file for more information.

[textlint-home]: https://github.com/textlint/textlint

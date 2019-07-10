# `@strv/stylelint-config-styled-components`

> STRV's config for stylelint with styled-components

## STRV Config

package.json

```json
{
  "stylelint": {
    "extends": [
      "@strv/stylelint-config-styled-components",
      "stylelint-config-prettier"
    ]
  }
}
```

.stylelintrc or .stylelintrc.json

```json
{
  "extends": [
    "@strv/stylelint-config-styled-components",
    "stylelint-config-prettier"
  ]
}
```

stylelint.config.js or .stylelintrc.js

```js
module.exports = {
  extends: [
    '@strv/stylelint-config-styled-components',
    'stylelint-config-prettier'
  ]
}
```

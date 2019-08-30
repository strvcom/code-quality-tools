# Prettier Config Documentation

> Documentation for the `@strv/prettier-config` module.

## Usage

```bash
# Yarn:
yarn add --dev @strv/prettier-config

# npm:
npm install --save-dev @strv/prettier-config
```

And reference it in your _.prettierrc.js_ file:

```js
module.exports = require('@strv/prettier-config')
```

Or you can of course choose your preffered way of using configs:

<!-- markdownlint-disable MD033 -->
<details>
<summary>package.json</summary>

```json
{
  // ...
  "prettier": "@strv/prettier-config"
}
```

</details>
<details>
<summary>.prettierrc or .prettierrc.json</summary>

```json
{
  "extends": ["@strv/prettier-config"]
}
```

</details>
<!-- markdownlint-enable MD033 -->

_Note: If you are using `prettier` < v1.17 check [this note](#Prettier-version)._

## Extending

To extend the current options you will need to create a _.prettierrc.js_ and add the following:

```js
module.exports = {
  ...require('@strv/prettier-config'),

  // Add custom options bellow:
  useTabs: true,
}
```

## Notes

### Prettier version

Versions of `prettier` prior to v1.17 did not feature the possibility to use a shared config via _package.json_. The way to do it is similar to when [extending](#Extending), except that you can just export the config directly:

```js
// .prettierrc.js

module.exports = require('@strv/prettier-config')
```

## More

- [Prettier Documentation](https://prettier.io/docs/en/index.html)

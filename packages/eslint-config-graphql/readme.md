# @strv/eslint-config-graphql

## Installation

```sh
npm install -D @strv/eslint-config-graphql
```

## Usage

```js
// eslint.config.mjs
import graphql from '@strv/eslint-config-graphql'

/** @type {Array<import("eslint").Linter.FlatConfig>} */
const config = [{
  // Perhaps also apply other configs?
  { files: ['**/*.js'], ...graphql },
}]

export default config
```

Additionally don't forget to have `.graphqlconfig` file:

```json
{
  // ...
  "schemaPath": "schema.json"
  // ...
}
```

## License

See the [LICENSE](LICENSE) file for information.

# @strv/remark-config

> STRV's config for [remark-cli][remark-cli-home]

## Usage

```sh
npm i --dev remark-cli @strv/remark-config
```

Now, create a _.remarkrc.js_ file in your project's root with the following contents:

```js
'use strict'

const config = require('./packages/remark-config')

module.exports = {
  ...config,
}
```

Remark's configuration does not support built-in extensibility/inheritance of configuration so if you'd like to change some configuration options you will have to resort to standard JavaScript's object mutation/extension patterns.

## License

See the [LICENSE](LICENSE) file for more information.

[remark-cli-home]: https://github.com/remarkjs/remark/tree/master/packages/remark-cli

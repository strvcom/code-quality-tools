# Migration from @strv/eslint-config-javascript

This new initiative provides all the functionality which was included in the old ESLint config package, with the only exception being the **flow** ruleset which has been removed. The `v1.0.0` versions of all packages hosted here are 1:1 compatible with the latest version of `@strv/eslint-config-javascript` (`9.2.0`), therefore no new errors or warnings should be reported after the migration.

- Uninstall `@strv/eslint-config-javascript`
- Open your _.eslintrc.js_ file and check which rulesets you use
- Based on the table below, replace the rulesets in your config file with the new names
- Install the missing rulesets from npm

| Old ruleset                                  | New ruleset          | package                                                                    |
| -------------------------------------------- | -------------------- | -------------------------------------------------------------------------- |
| `@strv/javascript/environments/nodejs/*`     | `@strv/node/*`       | [`@strv/eslint-config-node`][es-node-home]                                 |
| `@strv/javascript/environments/react/*`      | `@strv/react/*`      | [`@strv/eslint-config-react`][es-react-home]                               |
| `@strv/javascript/environments/mocha/*`      | `@strv/mocha/*`      | [`@strv/eslint-config-mocha`][es-mocha-home]                               |
| `@strv/javascript/environments/typescript/*` | `@strv/typescript/*` | [`@strv/eslint-config-typescript`][es-ts-home]                             |
| `@strv/javascript/environments/flow/*`       | 🔥                   | Removed without replacement 😱                                             |
| `@strv/javascript/coding-styles/*`           | 🔥                   | Coding style rulesets are now part of the environment-specific packages ❤️ |

The following rulesets have been removed as part of the migration:

- `@strv/javascript/environments/nodejs/v6`
- `@strv/javascript/environments/nodejs/v8-3`
- `@strv/javascript/environments/flow/*`
- `@strv/javascript/coding-styles/*`

## Still confused?

Open an issue over at [@strv/code-quality-tools][cqt-home] or ping @robertrossmann on STRV Slack. 💪

## ...but why?

### More granular release cycle

Separating the environments into dedicated packages will reduce noise when a new version for a specific environment is released. Before, when a new rule has been added to the `nodejs` ruleset, everyone received an upgrade even if they only used the `react` ruleset and did not care about changes to the `nodejs` ruleset. With the new setup, each environment will follow its own semver release cycle.

### Not just ESLint anymore

The new repository contains configurations for a bunch of other linting tools, not just ESLint. We wanted to keep all these configs under a single roof, so we decided to move the code over there.

[cqt-home]: https://github.com/strvcom/code-quality-tools
[es-node-home]: https://github.com/strvcom/code-quality-tools/tree/master/packages/eslint-config-node
[es-react-home]: https://github.com/strvcom/code-quality-tools/tree/master/packages/eslint-config-react
[es-mocha-home]: https://github.com/strvcom/code-quality-tools/tree/master/packages/eslint-config-mocha
[es-ts-home]: https://github.com/strvcom/code-quality-tools/tree/master/packages/eslint-config-typescript

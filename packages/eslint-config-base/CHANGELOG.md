# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.3.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.2.0...@strv/eslint-config-base@3.3.0) (2023-07-06)


### Features

* disable `id-length` `max` property ([a5424d8](https://github.com/strvcom/code-quality-tools/commit/a5424d8da793c6698b993b99ebd47f0d569a92cd))
* set `max-len` to 120 👏 ([0d3d355](https://github.com/strvcom/code-quality-tools/commit/0d3d35522654c2aca7fba501b4bfaefaa75e715f))
* upgrade eslint-plugin-import to v2.27 ([c89f5e2](https://github.com/strvcom/code-quality-tools/commit/c89f5e25cb60fd9244251c22848e5037cdee97b6))





# [3.2.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.1.0...@strv/eslint-config-base@3.2.0) (2022-07-18)


### Bug Fixes

* **rule:** require no spaces between multiple export statements ([65a0bae](https://github.com/strvcom/code-quality-tools/commit/65a0bae4d4ec5e85a65d89a9b2f05ec95bfa16cb))


### Features

* upgrade all deps 💣 ([cd77c39](https://github.com/strvcom/code-quality-tools/commit/cd77c39ae6806e7531396040a35908da51a8b12c))





# [3.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.0.0...@strv/eslint-config-base@3.1.0) (2022-03-23)


### Features

* **rule:** support ESLint v8, many new rules 🎉 ([aaf5708](https://github.com/strvcom/code-quality-tools/commit/aaf57085da9498c1425b107d5f1d1e4f353dd000))





# [3.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.0.0-alpha.5...@strv/eslint-config-base@3.0.0) (2021-09-07)

**Note:** Version bump only for package @strv/eslint-config-base





# [3.0.0-alpha.5](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.0.0-alpha.4...@strv/eslint-config-base@3.0.0-alpha.5) (2021-09-07)


### Bug Fixes

* **rule:** use correct semver ranges for engines.node 🤦‍♂️ ([5f1737f](https://github.com/strvcom/code-quality-tools/commit/5f1737fb43dce5a7099cfc448cd98ee3cbf9879b))


### chore

* **deps:** upgrade all deps 💣 ([3a827aa](https://github.com/strvcom/code-quality-tools/commit/3a827aa2fe0f62a055de69323665ba03cd7eaf08))
* **repo:** bump minimum Node.js version ([a8125c2](https://github.com/strvcom/code-quality-tools/commit/a8125c2772a67a4565786667fb95f4b32b9b468c))


### BREAKING CHANGES

* **repo:** All packages must now be used with a minimum of Node.js 14 or 16.
* **deps:** Most dependencies have been upgraded to a newer major version. Most of the time these upgrades dropped support for old Node.js versions.





# [3.0.0-alpha.4](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.0.0-alpha.3...@strv/eslint-config-base@3.0.0-alpha.4) (2021-05-05)

**Note:** Version bump only for package @strv/eslint-config-base





# [3.0.0-alpha.3](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.0.0-alpha.2...@strv/eslint-config-base@3.0.0-alpha.3) (2021-03-27)


### Features

* **eslint-base:** update deps 💣 ([bb6dd28](https://github.com/strvcom/code-quality-tools/commit/bb6dd2844e3266786644c2764d51920e5602a009))
* **eslint-typescript:** be more strict with some rules ([5c6b32f](https://github.com/strvcom/code-quality-tools/commit/5c6b32f31d479121374412ed311354a394f22267))


### BREAKING CHANGES

* **eslint-typescript:** Several rules' level has been raised to `error` after a long discussion with many team members. We feel that some code patterns are really dangerous and should be flagged appropriately, even if we recognise that there might be some small, valid use-cases for some of them. The rules include:

- no-explicit-any: if you don't know the type then use `unknown` instead
- no-dynamic-delete: if you need to dynamically remove properties from an object then perhaps you should use a different data store, like `Map` or `Set`
- no-floating-promises: always, always! handle promises, at least add a `.catch(err => console.error(err)` to them
- no-for-in-array: always prefer `for-of` loop or other iteration mechanism
- no-inferrable-types: save your keyboard from all these unnecessary keystrokes required to add types to variables which are obvious
- no-this-alias: don't assign `this` to a variable; use an arrow function instead
- prefer-function-type: makes code more readable in some specific situations
- prefer-nullish-coalescing: it is far superior to other logical operators
- require-array-sort-compare: `Array.prototype.sort()` has a very basic default comparison logic so it's always preferred to provide explicit sorting rules.





# [3.0.0-alpha.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.0.0-alpha.1...@strv/eslint-config-base@3.0.0-alpha.2) (2020-10-09)


### Bug Fixes

* **eslint-base:** disable redundant `no-duplicate-imports` rule ([018f2e3](https://github.com/strvcom/code-quality-tools/commit/018f2e3d5f7e86f6e06686ba40bdcd1f339945e5))





# [3.0.0-alpha.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@3.0.0-alpha.0...@strv/eslint-config-base@3.0.0-alpha.1) (2020-10-09)


### Bug Fixes

* **eslint-base:** use a more generic config for comma-dangle ([dc44aa4](https://github.com/strvcom/code-quality-tools/commit/dc44aa441ba2dcdd3a34938ac3b0543ffce39d2a))





# [3.0.0-alpha.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@2.3.0...@strv/eslint-config-base@3.0.0-alpha.0) (2020-10-09)


### Features

* add several rules to the base ruleset ([471568f](https://github.com/strvcom/code-quality-tools/commit/471568f2fddce960e200a9d6ed796f3f777d2c21))
* **eslint-base:** disable require-atomic-updates rule ([2ca7bfd](https://github.com/strvcom/code-quality-tools/commit/2ca7bfd7a49d27e20af03ff59cd00374abdb996e))
* **eslint-base:** upgrade eslint-plugin-import to 2.22 ([b95c1b1](https://github.com/strvcom/code-quality-tools/commit/b95c1b1c49a3b39aa92497627fc5a5fbcc6df56f))
* **eslint-base:** upgrade to ESLint v7 ([a6b5b16](https://github.com/strvcom/code-quality-tools/commit/a6b5b16859cbd98a7cff38c48dec21e1f5182d85))
* **eslint-node:** upgrade eslint-plugin-node to v11.1 ([83659cc](https://github.com/strvcom/code-quality-tools/commit/83659cc245220a08fce7d5d27e534c3bacb6dd47))


### BREAKING CHANGES

* A few of the new rules are set to `error` level so they might potentially
cause some code to fail a lint check.
* **eslint-base:** The minimum supported version of ESLint is now 7.1
* **eslint-node:** As of ESLint v7, some Node.js-related rules have been deprecated and moved to eslint-plugin-node. This release uses the new rules from the plugin and increases the minimum ESLint version to v7.





# [2.3.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@2.2.0...@strv/eslint-config-base@2.3.0) (2020-02-11)


### Features

* **eslint-base:** enable default-param-last rule ([16aaf3d](https://github.com/strvcom/code-quality-tools/commit/16aaf3d7a6b7e0177d7da6a2441a0729d92a0676))





# [2.2.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@2.1.1...@strv/eslint-config-base@2.2.0) (2020-02-07)


### Features

* **eslint-base:** upgrade eslint-plugin-import to 2.20 ([1f532c2](https://github.com/strvcom/code-quality-tools/commit/1f532c21dca665cee101a91fb53f17be391ee764))





## [2.1.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@2.1.0...@strv/eslint-config-base@2.1.1) (2019-08-27)


### Bug Fixes

* **eslint-base:** turn off no-return-await ([4d547ae](https://github.com/strvcom/code-quality-tools/commit/4d547ae))





# [2.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@2.0.0...@strv/eslint-config-base@2.1.0) (2019-08-24)


### Bug Fixes

* **eslint-base:** upgrade eslint-plugin-import to 2.18.0 ([e181987](https://github.com/strvcom/code-quality-tools/commit/e181987))


### Features

* enable no-unused-modules for TypeScript files ([93c2437](https://github.com/strvcom/code-quality-tools/commit/93c2437))





# [2.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.2.0...@strv/eslint-config-base@2.0.0) (2019-06-22)


### chore

* remove .es extension from recognised module extensions ([b160a65](https://github.com/strvcom/code-quality-tools/commit/b160a65))


### Features

* drop support for Node.js 6 & 8 ([4add1ff](https://github.com/strvcom/code-quality-tools/commit/4add1ff))
* enable import/no-useless-path-segments' noUselessIndex option ([dc4741f](https://github.com/strvcom/code-quality-tools/commit/dc4741f))
* explicitly mark configs as ESLint v6 compatible 🎉 ([017d975](https://github.com/strvcom/code-quality-tools/commit/017d975))


### BREAKING CHANGES

* Some rules will no longer recognise extension-less module imports pointing to files ending with .es extension.

.es was originally used as an extension with ES Modules support but the official extension for that is now .mjs. Rename your .es files to .mjs to restore any lost functionality.
* From now on, all ESLint plugins will only work on projects running Node.js 10 and above and the linter itself must be run using Node.js 10 and above.





# [1.2.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.1.2...@strv/eslint-config-base@1.2.0) (2019-04-30)


### Features

* improve handling of extensions across all ESLint configs ([08aa00a](https://github.com/strvcom/code-quality-tools/commit/08aa00a)), closes [#19](https://github.com/strvcom/code-quality-tools/issues/19)





## [1.1.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.1.1...@strv/eslint-config-base@1.1.2) (2019-04-09)


### Bug Fixes

* allow name exception in eslint no-shadow ([4422753](https://github.com/strvcom/code-quality-tools/commit/4422753))





## [1.1.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.1.0...@strv/eslint-config-base@1.1.1) (2019-04-05)

**Note:** Version bump only for package @strv/eslint-config-base





# [1.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@1.0.0...@strv/eslint-config-base@1.1.0) (2019-03-07)


### Bug Fixes

* **eslint-config-base:** overrides should be an array ([eb96bc7](https://github.com/strvcom/code-quality-tools/commit/eb96bc7))


### Features

* **eslint-base:** add prefer-named-capture-group ([bda87cc](https://github.com/strvcom/code-quality-tools/commit/bda87cc))





# [1.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-base@0.1.1-alpha.0...@strv/eslint-config-base@1.0.0) (2019-03-04)

**Note:** Version bump only for package @strv/eslint-config-base





## 0.1.1-alpha.0 (2019-02-07)


### Features

* implement [@strvcom](https://github.com/strvcom)/eslint-config-base 🚀 ([1626b1f](https://github.com/strvcom/code-quality-tools/commit/1626b1f))
* implement `style` rulesets for all configs 🚀 ([10c2aa0](https://github.com/strvcom/code-quality-tools/commit/10c2aa0))
* include LICENSE file ([e1eac9a](https://github.com/strvcom/code-quality-tools/commit/e1eac9a))

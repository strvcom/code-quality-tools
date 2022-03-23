# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0...@strv/eslint-config-typescript@3.1.0) (2022-03-23)


### Features

* **rule:** support ESLint v8, many new rules 🎉 ([aaf5708](https://github.com/strvcom/code-quality-tools/commit/aaf57085da9498c1425b107d5f1d1e4f353dd000))





# [3.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.9...@strv/eslint-config-typescript@3.0.0) (2021-09-07)

**Note:** Version bump only for package @strv/eslint-config-typescript





# [3.0.0-alpha.9](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.8...@strv/eslint-config-typescript@3.0.0-alpha.9) (2021-09-07)


### Bug Fixes

* **rule:** use correct semver ranges for engines.node 🤦‍♂️ ([5f1737f](https://github.com/strvcom/code-quality-tools/commit/5f1737fb43dce5a7099cfc448cd98ee3cbf9879b))


### chore

* **deps:** upgrade all deps 💣 ([3a827aa](https://github.com/strvcom/code-quality-tools/commit/3a827aa2fe0f62a055de69323665ba03cd7eaf08))
* **repo:** bump minimum Node.js version ([a8125c2](https://github.com/strvcom/code-quality-tools/commit/a8125c2772a67a4565786667fb95f4b32b9b468c))


### BREAKING CHANGES

* **repo:** All packages must now be used with a minimum of Node.js 14 or 16.
* **deps:** Most dependencies have been upgraded to a newer major version. Most of the time these upgrades dropped support for old Node.js versions.





# [3.0.0-alpha.8](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.7...@strv/eslint-config-typescript@3.0.0-alpha.8) (2021-06-30)


### Bug Fixes

* disable eslint for tsreact ([8ab1a69](https://github.com/strvcom/code-quality-tools/commit/8ab1a6982a51352715593880482a57f861bc2edc))





# [3.0.0-alpha.7](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.6...@strv/eslint-config-typescript@3.0.0-alpha.7) (2021-05-05)

**Note:** Version bump only for package @strv/eslint-config-typescript





# [3.0.0-alpha.6](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.5...@strv/eslint-config-typescript@3.0.0-alpha.6) (2021-03-27)


### Features

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





# [3.0.0-alpha.5](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.4...@strv/eslint-config-typescript@3.0.0-alpha.5) (2021-02-03)


### Features

* **eslint-typescript:** upgrade plugins to latest version ([9f9c9c0](https://github.com/strvcom/code-quality-tools/commit/9f9c9c0c43e205ff219c3b4086071994ccb06cba))





# [3.0.0-alpha.4](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.3...@strv/eslint-config-typescript@3.0.0-alpha.4) (2020-10-11)


### Bug Fixes

* **eslint-typescript:** allow `any` type in template literal expressions ([510053a](https://github.com/strvcom/code-quality-tools/commit/510053a5c316767be2ab32f72b198e114570f5ca))





# [3.0.0-alpha.3](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.2...@strv/eslint-config-typescript@3.0.0-alpha.3) (2020-10-09)


### Bug Fixes

* **eslint-typescript:** prefer no-duplicate-imports rule ([6527739](https://github.com/strvcom/code-quality-tools/commit/6527739195ddc07d46da1c4e22866b301bb7cc25))





# [3.0.0-alpha.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.1...@strv/eslint-config-typescript@3.0.0-alpha.2) (2020-10-09)

**Note:** Version bump only for package @strv/eslint-config-typescript





# [3.0.0-alpha.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@3.0.0-alpha.0...@strv/eslint-config-typescript@3.0.0-alpha.1) (2020-10-09)


### Bug Fixes

* **eslint-typescript:** use correct options for consistent-type-imports ([9b8eb84](https://github.com/strvcom/code-quality-tools/commit/9b8eb8489092d2d144b58ffc611816595d8b4527))





# [3.0.0-alpha.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.3.0...@strv/eslint-config-typescript@3.0.0-alpha.0) (2020-10-09)


### Bug Fixes

* **eslint-typescript:** avoid duplicate warnings for require-await rule ([d53ef6d](https://github.com/strvcom/code-quality-tools/commit/d53ef6dfd53d7572ea83055e7ff547965cf55f5b))


### Features

* **eslint-typescript:** ruleset overhaul 🚀 ([3c53970](https://github.com/strvcom/code-quality-tools/commit/3c5397009d41f22762cc748fdd4bfb86896f05a5))


### BREAKING CHANGES

* **eslint-typescript:** The ruleset underwent a complete overhaul - it now requires ESLint v7, includes compatibility with TypeScript v4 and adds several new rules. Some rules have been causing duplicate issues being reported - these have been disabled.





# [2.3.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.2.1...@strv/eslint-config-typescript@2.3.0) (2020-03-03)


### Bug Fixes

* **eslint-typescript:** use TS-aware version of no-unused-expressions ([75b0b36](https://github.com/strvcom/code-quality-tools/commit/75b0b362be1b7f695a16ee439801a74ec3e00e78)), closes [#83](https://github.com/strvcom/code-quality-tools/issues/83)


### Features

* **eslint-typescript:** upgrade TS-related plugins, enable new rules ([69830e6](https://github.com/strvcom/code-quality-tools/commit/69830e6fa191a87407daef8c57076eee27e30a6f))





## [2.2.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.2.0...@strv/eslint-config-typescript@2.2.1) (2020-03-03)


### Bug Fixes

* **eslint-typescript:** naming-convention options ([b8a1bfd](https://github.com/strvcom/code-quality-tools/commit/b8a1bfd80498a09a03a83ceda88129fd6df23143))





# [2.2.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.1.5...@strv/eslint-config-typescript@2.2.0) (2020-02-11)


### Features

* **eslint-typescript:** upgrade plugin to 2.19 🚀 ([48956cd](https://github.com/strvcom/code-quality-tools/commit/48956cd86b290929da7c54c810f290f26a0c9a88))





## [2.1.5](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.1.4...@strv/eslint-config-typescript@2.1.5) (2020-02-07)

**Note:** Version bump only for package @strv/eslint-config-typescript





## [2.1.4](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.1.3...@strv/eslint-config-typescript@2.1.4) (2020-02-07)


### Bug Fixes

* **eslint-typescript:** fix array-type rule options ([e5efe2d](https://github.com/strvcom/code-quality-tools/commit/e5efe2d))





## [2.1.3](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.1.2...@strv/eslint-config-typescript@2.1.3) (2019-09-25)


### Bug Fixes

* update invalid cli option ([385a0a2](https://github.com/strvcom/code-quality-tools/commit/385a0a2))





## [2.1.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.1.1...@strv/eslint-config-typescript@2.1.2) (2019-08-27)

**Note:** Version bump only for package @strv/eslint-config-typescript





## [2.1.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.1.0...@strv/eslint-config-typescript@2.1.1) (2019-08-27)


### Bug Fixes

* **eslint-typescript:** disable quotes rule (not yet released) ([3b58c95](https://github.com/strvcom/code-quality-tools/commit/3b58c95))





# [2.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@2.0.0...@strv/eslint-config-typescript@2.1.0) (2019-08-24)


### Features

* **eslint-typescript:** correctly recognise paths in tsconfig.json ([49e7ec4](https://github.com/strvcom/code-quality-tools/commit/49e7ec4))
* revisit TypeScript ruleset, upgrade to v2 ([86fadc6](https://github.com/strvcom/code-quality-tools/commit/86fadc6))





# [2.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.1.1...@strv/eslint-config-typescript@2.0.0) (2019-06-22)


### Features

* drop support for Node.js 6 & 8 ([4add1ff](https://github.com/strvcom/code-quality-tools/commit/4add1ff))
* explicitly mark configs as ESLint v6 compatible 🎉 ([017d975](https://github.com/strvcom/code-quality-tools/commit/017d975))
* remove interface name prefix rule from typescript ([49221f7](https://github.com/strvcom/code-quality-tools/commit/49221f7)), closes [#25](https://github.com/strvcom/code-quality-tools/issues/25)


### BREAKING CHANGES

* From now on, all ESLint plugins will only work on projects running Node.js 10 and above and the linter itself must be run using Node.js 10 and above.





## [1.1.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.1.0...@strv/eslint-config-typescript@1.1.1) (2019-05-27)

**Note:** Version bump only for package @strv/eslint-config-typescript





# [1.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.4...@strv/eslint-config-typescript@1.1.0) (2019-04-30)


### Bug Fixes

* disabled no-unused-vars ([a2781c0](https://github.com/strvcom/code-quality-tools/commit/a2781c0))


### Features

* improve handling of extensions across all ESLint configs ([08aa00a](https://github.com/strvcom/code-quality-tools/commit/08aa00a)), closes [#19](https://github.com/strvcom/code-quality-tools/issues/19)





## [1.0.4](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.3...@strv/eslint-config-typescript@1.0.4) (2019-04-09)


### Bug Fixes

* **eslint-typescript:** add missing optional ruleset ([00950d1](https://github.com/strvcom/code-quality-tools/commit/00950d1))
* **eslint-typescript:** declare all required deps in package.json 🤦‍♂️ ([f88ea93](https://github.com/strvcom/code-quality-tools/commit/f88ea93))





## [1.0.3](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.2...@strv/eslint-config-typescript@1.0.3) (2019-04-09)

**Note:** Version bump only for package @strv/eslint-config-typescript





## [1.0.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.1...@strv/eslint-config-typescript@1.0.2) (2019-04-05)


### Bug Fixes

* corrected faulty import for typescript config ([850a135](https://github.com/strvcom/code-quality-tools/commit/850a135))





## [1.0.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@1.0.0...@strv/eslint-config-typescript@1.0.1) (2019-03-07)

**Note:** Version bump only for package @strv/eslint-config-typescript





# [1.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-typescript@0.1.1-alpha.0...@strv/eslint-config-typescript@1.0.0) (2019-03-04)

**Note:** Version bump only for package @strv/eslint-config-typescript





## 0.1.1-alpha.0 (2019-02-07)


### Bug Fixes

* extend typescript ruleset from the base one ([8768ccc](https://github.com/strvcom/code-quality-tools/commit/8768ccc))


### Features

* implement [@strvcom](https://github.com/strvcom)/eslint-config-typescript 🚀 ([337a609](https://github.com/strvcom/code-quality-tools/commit/337a609))
* implement `style` rulesets for all configs 🚀 ([10c2aa0](https://github.com/strvcom/code-quality-tools/commit/10c2aa0))
* include LICENSE file ([e1eac9a](https://github.com/strvcom/code-quality-tools/commit/e1eac9a))
* resolve eslint's `extends` using standard module resolution ([9a1aa2c](https://github.com/strvcom/code-quality-tools/commit/9a1aa2c))

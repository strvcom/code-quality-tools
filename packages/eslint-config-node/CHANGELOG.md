# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.3.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.2.0...@strv/eslint-config-node@3.3.0) (2023-07-06)


### Features

* add eslint-config-node/v20 ruleset 🎉 ([f5a99bc](https://github.com/strvcom/code-quality-tools/commit/f5a99bcd182a67988dcd42b1be79666a319ac123))





# [3.2.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.1.0...@strv/eslint-config-node@3.2.0) (2022-07-18)


### Features

* upgrade all deps 💣 ([cd77c39](https://github.com/strvcom/code-quality-tools/commit/cd77c39ae6806e7531396040a35908da51a8b12c))





# [3.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.0.0...@strv/eslint-config-node@3.1.0) (2022-03-23)


### Features

* **rule:** support ESLint v8, many new rules 🎉 ([aaf5708](https://github.com/strvcom/code-quality-tools/commit/aaf57085da9498c1425b107d5f1d1e4f353dd000))





# [3.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.0.0-alpha.6...@strv/eslint-config-node@3.0.0) (2021-09-07)

**Note:** Version bump only for package @strv/eslint-config-node





# [3.0.0-alpha.6](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.0.0-alpha.5...@strv/eslint-config-node@3.0.0-alpha.6) (2021-09-07)


### Bug Fixes

* **rule:** use correct semver ranges for engines.node 🤦‍♂️ ([5f1737f](https://github.com/strvcom/code-quality-tools/commit/5f1737fb43dce5a7099cfc448cd98ee3cbf9879b))


### chore

* **deps:** upgrade all deps 💣 ([3a827aa](https://github.com/strvcom/code-quality-tools/commit/3a827aa2fe0f62a055de69323665ba03cd7eaf08))
* **repo:** bump minimum Node.js version ([a8125c2](https://github.com/strvcom/code-quality-tools/commit/a8125c2772a67a4565786667fb95f4b32b9b468c))


### Features

* **rule:** add Node.js v16 ruleset ([9efff74](https://github.com/strvcom/code-quality-tools/commit/9efff743f693232a45b6d53c105fcfeec1f4f91c))


### BREAKING CHANGES

* **repo:** All packages must now be used with a minimum of Node.js 14 or 16.
* **deps:** Most dependencies have been upgraded to a newer major version. Most of the time these upgrades dropped support for old Node.js versions.





# [3.0.0-alpha.5](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.0.0-alpha.4...@strv/eslint-config-node@3.0.0-alpha.5) (2021-05-05)

**Note:** Version bump only for package @strv/eslint-config-node





# [3.0.0-alpha.4](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.0.0-alpha.3...@strv/eslint-config-node@3.0.0-alpha.4) (2021-03-27)


### Features

* **eslint-node:** update deps 💣 ([a313c9f](https://github.com/strvcom/code-quality-tools/commit/a313c9f60ebfd3078379f00a9c3e2abf96251a82))





# [3.0.0-alpha.3](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.0.0-alpha.2...@strv/eslint-config-node@3.0.0-alpha.3) (2020-10-12)


### Bug Fixes

* **eslint-node:** set correct ecmaVersion for v12 ruleset ([afd19d4](https://github.com/strvcom/code-quality-tools/commit/afd19d44174555593e7421b0245dbc2064329263))


### chore

* **eslint-node:** delete the Node.js v8 config ([34727da](https://github.com/strvcom/code-quality-tools/commit/34727daf8f3f94105e9d830c5b7fc45e4d5eb5c9))


### Features

* **eslint-node:** add Node.js v14 ruleset ([73eb078](https://github.com/strvcom/code-quality-tools/commit/73eb0788c652f68288be73dbc8334a8f6ffeae2c))


### BREAKING CHANGES

* **eslint-node:** We no longer offer configuration file for Node.js v8.





# [3.0.0-alpha.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.0.0-alpha.1...@strv/eslint-config-node@3.0.0-alpha.2) (2020-10-09)

**Note:** Version bump only for package @strv/eslint-config-node





# [3.0.0-alpha.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@3.0.0-alpha.0...@strv/eslint-config-node@3.0.0-alpha.1) (2020-10-09)

**Note:** Version bump only for package @strv/eslint-config-node





# [3.0.0-alpha.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@2.2.2...@strv/eslint-config-node@3.0.0-alpha.0) (2020-10-09)


### Features

* **eslint-node:** upgrade eslint-plugin-node to v11.1 ([83659cc](https://github.com/strvcom/code-quality-tools/commit/83659cc245220a08fce7d5d27e534c3bacb6dd47))


### BREAKING CHANGES

* **eslint-node:** As of ESLint v7, some Node.js-related rules have been deprecated and moved to eslint-plugin-node. This release uses the new rules from the plugin and increases the minimum ESLint version to v7.





## [2.2.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@2.2.1...@strv/eslint-config-node@2.2.2) (2020-04-22)


### Bug Fixes

* **eslint-node:** do not recommend capture groups on Node.js < 10 ([ebb0f7b](https://github.com/strvcom/code-quality-tools/commit/ebb0f7b63df4bb9f79be65f293202f8f0a4db242))





## [2.2.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@2.2.0...@strv/eslint-config-node@2.2.1) (2020-02-11)

**Note:** Version bump only for package @strv/eslint-config-node





# [2.2.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@2.1.2...@strv/eslint-config-node@2.2.0) (2020-02-07)


### Features

* **eslint-node:** upgrade eslint-plugin-node to 11.0 ([e2df5da](https://github.com/strvcom/code-quality-tools/commit/e2df5da8b10871f9931988e865f28997d05d4e74))





## [2.1.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@2.1.1...@strv/eslint-config-node@2.1.2) (2019-09-25)

**Note:** Version bump only for package @strv/eslint-config-node





## [2.1.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@2.1.0...@strv/eslint-config-node@2.1.1) (2019-08-27)

**Note:** Version bump only for package @strv/eslint-config-node





# [2.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@2.0.0...@strv/eslint-config-node@2.1.0) (2019-08-24)


### Bug Fixes

* **eslint-node:** allow ES modules syntax in .mjs, .ts files ([5188695](https://github.com/strvcom/code-quality-tools/commit/5188695))


### Features

* enable no-unused-modules for TypeScript files ([93c2437](https://github.com/strvcom/code-quality-tools/commit/93c2437))
* **eslint-node:** upgrade eslint-plugin-node to 9.1 ([e1542be](https://github.com/strvcom/code-quality-tools/commit/e1542be))





# [2.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@1.1.0...@strv/eslint-config-node@2.0.0) (2019-06-22)


### Features

* add @strv/node/v12 configuration ([0b26500](https://github.com/strvcom/code-quality-tools/commit/0b26500))
* drop support for Node.js 6 & 8 ([4add1ff](https://github.com/strvcom/code-quality-tools/commit/4add1ff))
* enable import/no-unused-modules rule for .mjs files ([b251cc8](https://github.com/strvcom/code-quality-tools/commit/b251cc8))
* explicitly mark configs as ESLint v6 compatible 🎉 ([017d975](https://github.com/strvcom/code-quality-tools/commit/017d975))
* upgrade eslint-plugin-node ([fe8d558](https://github.com/strvcom/code-quality-tools/commit/fe8d558))


### BREAKING CHANGES

* From now on, all ESLint plugins will only work on projects running Node.js 10 and above and the linter itself must be run using Node.js 10 and above.





# [1.1.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@1.0.4...@strv/eslint-config-node@1.1.0) (2019-04-30)


### Features

* improve handling of extensions across all ESLint configs ([08aa00a](https://github.com/strvcom/code-quality-tools/commit/08aa00a)), closes [#19](https://github.com/strvcom/code-quality-tools/issues/19)





## [1.0.4](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@1.0.3...@strv/eslint-config-node@1.0.4) (2019-04-09)

**Note:** Version bump only for package @strv/eslint-config-node





## [1.0.3](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@1.0.2...@strv/eslint-config-node@1.0.3) (2019-04-05)


### Bug Fixes

* **eslint-node:** do not suggest using named capture groups on Node < 10 ([f10acfc](https://github.com/strvcom/code-quality-tools/commit/f10acfc))





## [1.0.2](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@1.0.1...@strv/eslint-config-node@1.0.2) (2019-04-05)

**Note:** Version bump only for package @strv/eslint-config-node





## [1.0.1](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@1.0.0...@strv/eslint-config-node@1.0.1) (2019-03-07)

**Note:** Version bump only for package @strv/eslint-config-node





# [1.0.0](https://github.com/strvcom/code-quality-tools/compare/@strv/eslint-config-node@0.1.1-alpha.0...@strv/eslint-config-node@1.0.0) (2019-03-04)

**Note:** Version bump only for package @strv/eslint-config-node





## 0.1.1-alpha.0 (2019-02-07)


### Bug Fixes

* ESLint config semver range ([df3904d](https://github.com/strvcom/code-quality-tools/commit/df3904d))


### Features

* implement [@strvcom](https://github.com/strvcom)/eslint-config-node 🚀 ([398c985](https://github.com/strvcom/code-quality-tools/commit/398c985))
* implement `style` rulesets for all configs 🚀 ([10c2aa0](https://github.com/strvcom/code-quality-tools/commit/10c2aa0))
* include LICENSE file ([e1eac9a](https://github.com/strvcom/code-quality-tools/commit/e1eac9a))
* resolve eslint's `extends` using standard module resolution ([9a1aa2c](https://github.com/strvcom/code-quality-tools/commit/9a1aa2c))

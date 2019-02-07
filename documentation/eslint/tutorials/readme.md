# Configuring ESLint

## Editor integrations

See [Editor Integrations](editor-integrations.md).

## ESLint best practices

When configuring ESLint, please keep the following in mind:

- Prefer _.eslintrc.js_ format over YAML/JSON
  > JSON cannot contain comments or other simple code, and YAML requires custom parser. Using standard node.js module format speeds the whole linting process up.

- Always extend only from **one environment configuration** per _.eslintrc.js_
  > Some environment configuration files available in the `@strv` npm organisation have conflicting rule configurations - you **will** experience weird issues if you include ie. both _node_ and _react_ rulesets into a single _.eslintrc.js_ file.
  >
  > If your project consists of both React and Node.js code, you should utilise the `overrides` functionality in ESLint to only enable one environment ruleset for each type of code.

- Do not include extensions when extending
  > You should not include the file extension in your `extends:` properties - the format in which this ruleset is written should be an implementation detail for ESLint to figure out.
  >
  > - Good: `@strv/node/v10`
  > - Bad: `@strv/node/v10.js`

- Extend from the `optional` rulesets after you extend from the main, version-specific environment ruleset
  > In other words, if you decide to include ie. `@strv/node/optional`, include it **after** you have included `@strv/node/v10`.

- Some rules are **meant** to be disabled, but only for some folders/files
  > For example, the rule `no-process-env` is enabled by default because accessing any property on `process.env` object causes an expensive C-level function call. However, using `process.env` is the recommended way to manage application configuration. Therefore, some configuration files disable this rule for all files located in a directory named _config_ or _configuration_. Here, you gather all the required configuration options from `process.env` and export them in a module. The rest of your application no longer needs to access `process.env` directly and instead reads the configuration from that module.

- Always consider re-configuring a rule rather than disabling it completely
  > If a rule does not quite fit your exiting codebase and fixing the issues would take considerable amount of time/energy, please consider first if the rule could be re-configured to suit your project's current style, rather than disabling it right away.

## Example configuration files

Some example configuration files have been prepared for you to look at / add to your project right away. Look for them in this directory!

# ESLint integrations with your IDE/editors

To make the whole developer experience more pleasant and convenient, it is important to configure your code editor of choice integrate with ESLint. The following can be achieved with most editors:

- Show errors/warnings inline with your code, as you type/on save
- Fix some issues immediately after saving the file so you do not have to do it manually

Letting your editor fix some issues will increase your productivity and code quality dramatically.

## Atom

Install the following packages:

- [linter][atom-linter]
- [linter-eslint][atom-linter-eslint]

For the _linter_ package, these settings are recommended:

- [x] Lint as you type
- [x] Do not lint files ignored by VCS

For the _linter-eslint_ package, these settings are recommended:

- [x] Disable when no eslintrc file in PATH
- [x] Fix errors on save
- [x] Ignore fixable rules while typing

## Visual Studio Code

Install the following packages:

- [eslint][vscode-eslint]

Put the following configuration options into your _settings.json_ file:

- `"eslint.autoFixOnSave": true`

## Sublime Text

For best results, make sure you have [Package Control][subl-packagecontrol] installed in your Sublime Text. Issue reports and autofix on save are handled by two different packages, so you will need to configure both for best developer experience.

Install the following packages:

- [SublimeLinter][subl-linter]
- [SublimeLinter-Contrib-ESLint][subl-linter-eslint]
- [ESLint-Formatter][subl-eslint-formatter]

Make sure ESLint does not lint files in _node_modules_ folder: (`Preferences` -> `Package Settings` -> `SublimeLinter` -> `Settings - User`):

```json
"linters": {
  "eslint": {
    "@disable": false,
    "exludes": [
      "node_modules"
    ]
  }
}
```

Enable autofix on save (`Preferences` -> `Package Settings` -> `ESLint Formatter` -> `Settings - User`):

```json
{
  "format_on_save": true
}
```

## WebStorm

WebStorm has built-in support for ESLint issue reporting. Auto fixing is only supported in versions 2016.3 and newer.

To enable ESLint reporter, [follow the guide][webstorm-eslint] on WebStorm's support page.
To use the new autofix feature, [read their blog post][webstorm-eslint-autofix] on the topic.

To use autofix on save feature:

1. Go to `Preferences` -> `Tools` -> `File watchers`
1. Click the `Add` (+) button and choose custom template
1. Name it for example `eslint`
1. Set file type to `javascript`
1. Program will be your path to eslint binary for example `/Users/[yourusername]/git/[yourproject]/node_modules/.bin/eslint`
1. Arguments `--fix $FilePath$`
1. Working directory `$ProjectFileDir$`
1. Show console `never` (if you don't want to see the console when `--fix` command finds errors)
1. Check `Trigger watcher regardless of syntax errors` and uncheck `Immediate file synchronization`

[atom-linter]: https://atom.io/packages/linter
[atom-linter-eslint]: https://atom.io/packages/linter-eslint
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[subl-packagecontrol]: https://packagecontrol.io
[subl-linter]: https://packagecontrol.io/packages/SublimeLinter
[subl-linter-eslint]: https://packagecontrol.io/packages/SublimeLinter-contrib-eslint
[subl-eslint-formatter]: https://packagecontrol.io/packages/ESLint-Formatter
[webstorm-eslint]: https://www.jetbrains.com/help/webstorm/2016.3/using-javascript-code-quality-tools.html#ESLint
[webstorm-eslint-autofix]: https://blog.jetbrains.com/webstorm/2016/09/webstorm-2016-3-eap-163-3983

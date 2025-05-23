import node from './packages/eslint-config-node/index.mjs'
import optional from './packages/eslint-config-node/optional.mjs'
import style from './packages/eslint-config-node/style.mjs'

/** @type {Array<import("eslint").Linter.Config>} */
const config = [{
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  ignores: [
    'node_modules',
    '!.*.js',
  ],
  settings: {
    'import/resolver': { typescript: {} },
  },
},
node,
optional,
style,
{
  rules: {},
}]

export default config

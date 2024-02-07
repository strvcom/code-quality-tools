import node from './packages/eslint-config-node/index.mjs'
import optional from './packages/eslint-config-node/optional.mjs'
import style from './packages/eslint-config-node/style.mjs'

/** @type {Array<import("eslint").Linter.FlatConfig>} */
const configs = [{
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
  ignores: [
    'node_modules',
    '!.*.js',
  ],
},
node,
optional,
style,
{ files: ['**/*.js', '**/*.mjs'], languageOptions: { sourceType: 'module' } },
{ files: ['**/*.cjs'], languageOptions: { sourceType: 'commonjs' } },
{ rules: {
  // TODO: Figure out why ESLint cannot resolve the @typescript-eslint packages
  'import/no-unresolved': 'off',
} }]

export default configs

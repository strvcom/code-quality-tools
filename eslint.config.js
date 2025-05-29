import { defineConfig } from 'eslint/config'
import node from './packages/eslint-config-node/index.mjs'
import optional from './packages/eslint-config-node/optional.mjs'
import style from './packages/eslint-config-node/style.mjs'

export default defineConfig([{
  files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  extends: [
    node,
    optional,
    style,
  ],
  linterOptions: {
    reportUnusedDisableDirectives: 'warn',
  },
  settings: {
    'import/resolver': { typescript: {} },
  },
}])

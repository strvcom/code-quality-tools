import { defineConfig } from 'eslint/config'
import node from '@strv/eslint-config-node'
import optional from '@strv/eslint-config-node/optional'
import style from '@strv/eslint-config-node/style'

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

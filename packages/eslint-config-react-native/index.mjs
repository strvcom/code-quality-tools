import expoConfig from 'eslint-config-expo/flat.js'
import { defineConfig, globalIgnores } from 'eslint/config'

/** Globally ignored */
const ignores = globalIgnores(['.expo/'])

/** @type {import("eslint").Linter.Config} */
const common = {
  rules: {
    // Very expensive check
    'import/namespace': 'off',
    // Very expensive check
    'import/no-duplicates': 'off',
  },
}

/** @type {import("eslint").Linter.Config} */
const react = {
  rules: {
    'react/jsx-sort-props': [
      'warn',
      {
        multiline: 'first',
        reservedFirst: ['key'],
        callbacksLast: true,
        shorthandLast: true,
      },
    ],
    'react/display-name': 'off',
  },
}

/** @type {import("eslint").Linter.Config} */
const typescript = {
  rules: {
    // Handled by TypeScript, see https://www.typescriptlang.org/tsconfig/#noUnusedLocals
    '@typescript-eslint/no-unused-vars': 'off',
    // Its common in React Native to import types using require syntax, see https://reactnative.dev/docs/images#static-image-resources
    '@typescript-eslint/no-require-imports': 'off',

    // '@typescript-eslint/consistent-type-imports': [
    //   'warn',
    //   { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    // ],
  },
}

export default defineConfig([
  expoConfig,
  ignores,
  common,
  typescript,
  react,
])

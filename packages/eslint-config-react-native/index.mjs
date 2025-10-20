import typeScriptConfig from '@strv/eslint-config-typescript'
import expoConfig from 'eslint-config-expo/flat.js'
import { defineConfig, globalIgnores } from 'eslint/config'

/** Globally ignored */
const ignores = globalIgnores(['.expo/', 'expo-env.d.ts'])

/** @type {import("eslint").Linter.Config} */
const common = {
  rules: {
    // Very expensive check, see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
    'import/namespace': 'off',
    // Very expensive check, see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
    'import/no-duplicates': 'off',
    // Handled by TypeScript, see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    'import/no-unresolved': 'off',
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'off',
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'off',
    // Handled by TypeScript. Enable noUnusedLocals in your tsconfig.json, see https://www.typescriptlang.org/tsconfig/#noUnusedLocals
    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': 'off',
  },
}

/** @type {import("eslint").Linter.Config} */
const react = {
  files: ['**/*.jsx', '**/*.tsx'],
  rules: {
    // Enforce alphabetical sorting of props for better readability, see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      'error',
      {
        multiline: 'first',
        reservedFirst: ['key'],
        callbacksLast: true,
        shorthandLast: true,
      },
    ],
    // DisplayName is not required for React Native components, see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': 'off',
  },
}

/** @type {import("eslint").Linter.Config} */
const typescript = defineConfig([typeScriptConfig, {
  files: ['**/*.ts', '**/*.tsx'],
  rules: {
    // Handled by TypeScript. Enable noUnusedLocals in your tsconfig.json, see https://www.typescriptlang.org/tsconfig/#noUnusedLocals
    // https://typescript-eslint.io/rules/no-unused-vars/
    '@typescript-eslint/no-unused-vars': 'off',
    // Its common in React Native to import types using require syntax, see https://reactnative.dev/docs/images#static-image-resources
    // https://typescript-eslint.io/rules/no-require-imports/
    '@typescript-eslint/no-require-imports': 'off',
    // Very expensive check, see https://typescript-eslint.io/rules/promise-function-async/
    '@typescript-eslint/promise-function-async': 'off',

    // Allows variable shadowing in TypeScript contexts, see https://typescript-eslint.io/rules/no-shadow/
    '@typescript-eslint/no-shadow': 'off',
    // Allows both interface and type definitions, see https://typescript-eslint.io/rules/consistent-type-definitions/
    '@typescript-eslint/consistent-type-definitions': 'off',
    // Allows Promises in places where they might not be handled properly, see https://typescript-eslint.io/rules/no-misused-promises/
    '@typescript-eslint/no-misused-promises': 'off',
    // Allows assignments of any typed values, see https://typescript-eslint.io/rules/no-unsafe-assignment/
    '@typescript-eslint/no-unsafe-assignment': 'off',
    // Allows returning any typed values from functions, see https://typescript-eslint.io/rules/no-unsafe-return/
    '@typescript-eslint/no-unsafe-return': 'off',
    // Allows unbound method references that may lose 'this' context, see https://typescript-eslint.io/rules/unbound-method/
    '@typescript-eslint/unbound-method': 'off',
    // Allows member access on any typed values, see https://typescript-eslint.io/rules/no-unsafe-member-access/
    '@typescript-eslint/no-unsafe-member-access': 'off',

    // Enforce consistent type imports with inline style, see https://typescript-eslint.io/rules/consistent-type-imports/
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
    ],
  },
}])

export default defineConfig([
  expoConfig,
  ignores,
  common,
  typescript,
  react,
])

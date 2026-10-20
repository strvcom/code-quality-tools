import { defineConfig } from 'eslint/config'
import { fixupPluginRules } from '@eslint/compat'
import graphql from 'eslint-plugin-graphql'

/** @returns {ReturnType<typeof defineConfig>} */
export default defineConfig({
  name: '@strv/eslint-config-graphql',
  plugins: {
    // The latest GraphQL plugin still uses removed ESLint APIs, so keep it wrapped until they migrate.
    graphql: fixupPluginRules(graphql),
  },
  rules: {
    'graphql/template-strings': ['error', {
      env: 'apollo',
    }],
  },
})

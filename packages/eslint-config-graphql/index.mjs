import { defineConfig } from 'eslint/config'
// TODO: Deprecated. Move to https://github.com/dimaMachina/graphql-eslint
import graphql from 'eslint-plugin-graphql'

/** @returns {ReturnType<typeof defineConfig>} */
export default defineConfig({
  name: '@strv/eslint-config-graphql',
  plugins: {
    graphql,
  },
  rules: {
    'graphql/template-strings': ['error', {
      env: 'apollo',
    }],
  },
})

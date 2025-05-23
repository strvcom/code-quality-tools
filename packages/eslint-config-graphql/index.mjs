// TODO: Deprecated. Move to https://github.com/dimaMachina/graphql-eslint
import graphql from 'eslint-plugin-graphql'

/** @type {import("eslint").Linter.Config} */
const config = {
  plugins: {
    graphql,
  },
  rules: {
    'graphql/template-strings': ['error', {
      env: 'apollo',
    }],
  },
}

export default config

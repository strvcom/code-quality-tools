// eslint-disable-next-line import/no-named-as-default
import antfu from '@antfu/eslint-config'
import checkFile from 'eslint-plugin-check-file'

/**
 * Create a customizable ESLint configuration
 *
 * @typedef {import('@antfu/eslint-config').OptionsFormatters} FormatterOptions
 * @typedef {import('@antfu/eslint-config').TypedFlatConfigItem} FlatConfigItem
 *
 * @param {Object} options - Configuration options
 * @param {string[]} [options.ignores] - Additional files to ignore
 * @param {boolean|FormatterOptions} [options.formatters=true] - Custom formatters or boolean to enable default ones
 * @param {FlatConfigItem['rules']} [options.unicornOverrides={}] - Custom unicorn rule overrides
 * @param {FlatConfigItem['rules']} [options.stylisticOverrides={}] - Custom stylistic rule overrides
 * @param {FlatConfigItem[]} [userConfig] - User-provided ESLint configuration
 */
function createConfig(options = {}, ...userConfig) {
  const {
    ignores = [],
    formatters = true,
    unicornOverrides = {},
    stylisticOverrides = {},
  } = options

  const defaultIgnores = [
    '**/*.{jpg,jpeg,webp,png,gif,svg,ico,avif}',
  ]

  const defaultUnicornOverrides = {
    'unicorn/filename-case': ['error', {
      case: 'kebabCase',
      ignore: [
        'pull_request_template.md',
      ],
    }],
  }

  const defaultStylisticOverrides = {
    'style/arrow-parens': ['error', 'always'],
    'style/brace-style': ['error', '1tbs'],
  }

  return antfu({
    formatters,
    react: true,
    ignores: [...defaultIgnores, ...ignores],
    unicorn: {
      overrides: { ...defaultUnicornOverrides, ...unicornOverrides },
    },
    stylistic: {
      overrides: { ...defaultStylisticOverrides, ...stylisticOverrides },
    },
    rules: {
      'node/prefer-global/process': 'off',
      'perfectionist/sort-imports': ['error', {
        groups: [
          'side-effect',
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          ['object', 'unknown'],
        ],
        newlinesBetween: 'always',
        order: 'asc',
        type: 'natural',
      }],
    },
  }, {
    files: ['src/**/*.*'],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-blocklist': ['error', {
        '**/*.story.ts(x)': '*.stories.ts(x)',
        '**/*.spec.ts(x)': '*.test.ts(x)',
      }],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/!(app)/**': 'KEBAB_CASE',
          'src/app/**': 'NEXT_JS_APP_ROUTER_CASE',
        },
      ],
    },
  }, ...userConfig)
}

const config = createConfig()

export default config
export { createConfig }

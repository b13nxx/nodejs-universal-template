module.exports = {
  extends: [
    'standard-with-typescript',
    'standard-jsx',
    'plugin:import/typescript',
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  ignorePatterns: ['build/*'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'index',
          ['parent', 'sibling'],
          'object'
        ],
        alphabetize: {
          order: 'asc',
          orderImportKind: 'asc',
          caseInsensitive: true
        },
        'newlines-between': 'always'
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    'import/newline-after-import': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
    ],
    '@typescript-eslint/sort-type-constituents': 'error'
  }
}

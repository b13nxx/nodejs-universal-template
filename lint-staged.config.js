const fs = require('fs')

module.exports = {
  '**/*.ts?(x)': [
    (files) => {
      if (files.length === 0) {
        return ''
      }

      const config = {
        extends: './tsconfig',
        files,
        compilerOptions: {
          noEmit: true,
          pretty: true
        }
      }

      fs.writeFileSync('./tsconfig.lint.json', JSON.stringify(config, null, 2))

      return 'tsc --project tsconfig.lint.json --noEmit'
    },
    'eslint --cache --color --fix',
    'prettier --write --ignore-unknown'
  ],
  '**/*.js?(x)': [
    'eslint --cache --color --fix',
    'prettier --write --ignore-unknown'
  ],
  '**/*.{json,css,scss,less,html,htm,vue,hbs,handlebars,graphql,gql,md,yml,yaml}':
    'prettier --write --ignore-unknown'
}

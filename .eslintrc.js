/* eslint-env node */
require('@rushstack/eslint-config/patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'eslint:recommended',
    '@rushstack/eslint-config/profile/node',
    'prettier'
  ], // <---- put your profile string here
  parserOptions: { tsconfigRootDir: __dirname }
}

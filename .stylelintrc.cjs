/* https://stylelint.io/user-guide/rules/selector-class-pattern/ */
module.exports = {
  root: true,
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  syntax: 'scss',
  rules: {},
  ignoreFiles: ['**./*.js,', '**./*.ts,', '**./*.tsx,', '**./*.jsx,', '**./*.vue,']
};

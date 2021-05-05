module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'declaration-colon-newline-after': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extends',
          'apply',
          'tailwind',
          'components',
          'utilities',
          'screen',
          'layer',
        ],
      },
    ],
  },
  processors: ['stylelint-processor-html'],
}

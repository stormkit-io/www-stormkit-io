module.exports = {
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
          'screen'
        ]
      }
    ]
  },
  processors: ['stylelint-processor-html'],
  extends: 'stylelint-config-standard'
}

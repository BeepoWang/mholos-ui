module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    // standard 规则集合
    'stylelint-config-standard',
    'stylelint-config-recommended-less',
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    // 接入 Prettier 规则
    'stylelint-config-prettier',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': null
  }
};

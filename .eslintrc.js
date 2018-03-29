module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true
  },
  extends: "semistandard",
  plugins: ["html"],
  rules: {
    semi: ["error", "never"], //禁止使用分号
    "linebreak-style": ["error", "unix"], //使用一致的换行符
    "no-extra-parens": 1, //禁止不必要的括号
    indent: ["error", 2, { SwitchCase: 1 }],
    camelcase: 2
  },
  globals: {
    $: true
  }
};

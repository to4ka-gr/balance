module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["react-app", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error"],
  },
};

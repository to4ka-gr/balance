module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'], // Добавляем плагин Prettier
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }], // Добавляем настройки для Prettier
    'react/react-in-jsx-scope': 'off', // Убираем ошибку с React 17+
  },
};

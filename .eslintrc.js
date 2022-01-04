module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
    "plugin:prettier/recommended",
  ],
  parser: "@babel/eslint-parser", // Uses babel-eslint transforms.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
    // requireConfigFile: false,
  },
  plugins: ["react", "jsx-a11y", "prettier", "import"],
  root: true, // For configuration cascading.
  rules: {
    "react/react-in-jsx-scope": 0,
  },
  settings: {
    react: {
      version: "detect", // Detect react version
    },
  },
};

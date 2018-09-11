module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  overrides: [
    {
      files: [".eslintrc.js", "prettier.config.js"],

      parserOptions: {
        sourceType: "script",
      },
      env: {
        node: true,
      },
    },
  ],
};

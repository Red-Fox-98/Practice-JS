module.exports = {
  root: true,
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  plugins: ["react", "prettier", "react-refresh"],
  env: { browser: true, es2020: true },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    createDefaultProgram: true
  },
  rules: {
    "no-param-reassign": "warn",
    "no-shadow": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/default-param-last": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "warn",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "warn",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn"
  }
};

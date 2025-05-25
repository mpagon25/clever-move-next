import { defineConfig } from "eslint/config";
import eslintJs from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import eslintReact from "@eslint-react/eslint-plugin";

export default defineConfig([
  {
    files: ["app/**/*.js", "app/**/*.jsx"],
    rules: {
      semi: "error",
      "no-unused-vars": "error",
    },
  },
  {
    files: ["app/**/*.ts", "app/**/*.tsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    extends: [
      eslintJs.configs.recommended,
      tseslint.configs.recommended,
      eslintReact.configs["recommended-typescript"],
    ],

    rules: {
      semi: "error",
      "no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@eslint-react/no-array-index-key": "off",
    },
  },
]);

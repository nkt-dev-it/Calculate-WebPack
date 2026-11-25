import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js, prettier: eslintPluginPrettier }, 
    extends: [js.configs.recommended, eslintConfigPrettier], 
    languageOptions: { globals: globals.browser } ,
    rules: {
      "no-var": "error", // запрещаем использовать var, только let и const
      "no-unused-vars": "warn", // запрещаем объявлять переменные, которые не используются
      "no-console": "error", // запрещаем использовать console.log
      "eqeqeq": "error", // нельзя использовать == и !=, только === и !==
      "no-undef": "error", // запрещаем использовать переменные, которые не были объявлены
      "semi": "error", // запрещаем не ставить ;
    }
  },
    {
      ignores: ["dist/", "node_modules/"],
    }

]);

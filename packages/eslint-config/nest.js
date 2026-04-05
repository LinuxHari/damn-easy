import { config as baseConfig } from './base.js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';

/**
 * A custom ESLint configuration for libraries that use NestJS.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nestJsConfig = [
  ...baseConfig,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
  eslintConfigPrettierFlat,
];

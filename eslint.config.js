// @ts-check
import esLintJS from '@eslint/js';
import esLintTS from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';

export default esLintTS.config(
  // Apply to all TypeScript and JavaScript files
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.mjs', '**/*.cjs'],
  },
  // Global ignores
  {
    ignores: ['node_modules/', 'dist/', '*.config.js'],
  },
  esLintJS.configs.recommended, // Base ESLint recommended rules
  ...esLintTS.configs.recommended,
  ...esLintTS.configs.recommendedTypeChecked, // TypeScript ESLint recommended rules with type checking
  // Language options for Node.js and TypeScript
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.config.{js,ts,mjs,mts}'],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      globals: {
        ...globals.node,
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        test: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
      },
    },
  },
  // Prettier config to disable conflicting rules (must be last)
  eslintConfigPrettier,
  {
    rules: {
      // Add any custom rule overrides here
      // Extension rules require disabling base rule first
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  }
);

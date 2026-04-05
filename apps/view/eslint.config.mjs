import { nextJsConfig } from '@repo/eslint-config/next-js';
import localRulesPlugin from './eslint-rules/index.mjs';

const eslintConfig = [
  ...nextJsConfig,
  {
    plugins: {
      'local-rules': localRulesPlugin,
    },
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'local-rules/no-private-folder-imports': 'error',
    },
  },
  {
    // Apply restricted imports rule to everything EXCEPT the wrapper components
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: ['components/Link.tsx', 'components/Button.tsx', 'components/Tooltip.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/link',
              message: 'Use @/components/Link instead',
            },
            {
              name: '@/components/ui/button',
              message: 'Use @/components/Button instead',
            },
            {
              name: '@/components/ui/tooltip',
              message: 'Use @/components/Tooltip instead',
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;

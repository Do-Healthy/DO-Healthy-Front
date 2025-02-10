import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test',
    'msw-storybook-addon',
  ],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: (config) => {
    config.resolve = {
      alias: {
        '@/': path.resolve(__dirname, '../src'),
      },
    };
    return config;
  },
};
export default config;

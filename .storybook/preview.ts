import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';

import '../pages/styles/globals.css';
import { handlers } from './../src/__mocks__/handlers';

initialize();

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['shared', 'entities', 'features', 'widgets', 'pages'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
  },
  loaders: [mswLoader],
};

export default preview;

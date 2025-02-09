import type { Meta, StoryObj } from '@storybook/react';

import { DietCategoryPage } from './diet-category-page.ui';

const meta: Meta<typeof DietCategoryPage> = {
  title: 'Pages/DietCategoryPage',
  component: DietCategoryPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-50 p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof DietCategoryPage>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

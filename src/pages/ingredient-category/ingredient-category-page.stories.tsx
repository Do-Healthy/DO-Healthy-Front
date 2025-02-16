import type { Meta, StoryObj } from '@storybook/react';

import { IngredientCategoryPage } from './ingredient-category-page.ui';

const meta: Meta<typeof IngredientCategoryPage> = {
  title: 'Pages/IngredientCategoryPage',
  component: IngredientCategoryPage,
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

type Story = StoryObj<typeof IngredientCategoryPage>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

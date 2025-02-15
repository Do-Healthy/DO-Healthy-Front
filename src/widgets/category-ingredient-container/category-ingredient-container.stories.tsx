// category-ingredient-container.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { INGREDIENT_CATEGORIES } from './category-ingredient-container.config';
import { IngredientCategoryContainer } from './category-ingredient-container.ui';

const meta: Meta<typeof IngredientCategoryContainer> = {
  title: 'Widgets/IngredientCategoryContainer',
  component: IngredientCategoryContainer,
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
type Story = StoryObj<typeof IngredientCategoryContainer>;

export const Default: Story = {
  args: {
    ingredientCategories: INGREDIENT_CATEGORIES,
  },
};

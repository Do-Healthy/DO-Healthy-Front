import type { Meta, StoryObj } from '@storybook/react';

import { IngredientCategoryCard } from './ingredient-category-card.ui';

const meta: Meta<typeof IngredientCategoryCard> = {
  title: 'Features/IngredientCategoryCard',
  component: IngredientCategoryCard,
  tags: ['autodocs'],
  argTypes: {
    ingredientTitle: { control: 'text' },
    ingredientDescription: { control: 'text' },
    ingredientIcon: {
      control: 'text',
    },
    ingredientImageSrc: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof IngredientCategoryCard>;

export const Primary: Story = {
  args: {
    ingredientTitle: '두부/콩류',
    ingredientDescription: '두부, 렌틸콩, 병아리콩 등',
    ingredientIcon: '🌱',
    ingredientImageSrc: 'https://picsum.photos/id/237/350/200',
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Primary.args,
    ingredientDescription: '',
  },
};

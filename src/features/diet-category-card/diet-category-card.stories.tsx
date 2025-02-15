import type { Meta, StoryObj } from '@storybook/react';

import { DietCategoryCard } from './diet-category-card.ui';

const meta: Meta<typeof DietCategoryCard> = {
  title: 'Features/DietCategoryCard',
  component: DietCategoryCard,
  tags: ['autodocs'],
  argTypes: {
    categoryTitle: { control: 'text' },
    categoryDescription: { control: 'text' },
    categoryIcon: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DietCategoryCard>;

export const Default: Story = {
  args: {
    categoryTitle: '저탄고지',
    categoryDescription: '탄수화물을 줄이고 지방을 늘린 식단',
    categoryIcon: '🥑',
  },
};

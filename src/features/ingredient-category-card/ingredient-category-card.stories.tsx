import type { Meta, StoryObj } from '@storybook/react';

import { IngredientCategoryCard } from './ingredient-category-card.ui';

const meta: Meta<typeof IngredientCategoryCard> = {
  title: 'Features/IngredientCategoryCard',
  component: IngredientCategoryCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    icon: {
      control: 'text',
    },
    imageSrc: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof IngredientCategoryCard>;

export const Default: Story = {
  args: {
    title: '두부/콩류',
    description: '두부, 렌틸콩, 병아리콩 등',
    icon: '🌱',
    imageSrc: 'https://picsum.photos/id/237/350/200',
  },
};

// 화면 너비가 767px 이하일 때 설명(description)이 숨겨지는 반응형 카드를 보여주는 스토리
export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: '',
  },
};

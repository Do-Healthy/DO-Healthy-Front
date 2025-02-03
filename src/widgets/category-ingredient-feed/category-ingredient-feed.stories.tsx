import type { Meta, StoryObj } from '@storybook/react';

import { Category } from '@/features/ingredient-category-card/ingredient-category.contract';

import { CategoryFeed } from './category-ingredient-feed.ui';

const meta: Meta<typeof CategoryFeed> = {
  title: 'Widgets/CategoryIngredientFeed',
  component: CategoryFeed,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="container mx-auto p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CategoryFeed>;

const sampleCategories: Category[] = [
  {
    icon: '🌱',
    title: '두부/콩류',
    size: '두부, 렌틸콩, 병아리콩 등',
    imageSrc: 'https://picsum.photos/id/237/350/200',
    description: '두부, 렌틸콩, 병아리콩 등',
  },
  {
    icon: '🐟',
    title: '생선류',
    size: '고등어, 연어, 참치 등',
    imageSrc: 'https://picsum.photos/id/238/350/200',
    description: '고등어, 연어, 참치 등',
  },
  {
    icon: '🍌',
    title: '과일류',
    size: '바나나, 사과, 오렌지 등',
    imageSrc: 'https://picsum.photos/id/239/350/200',
    description: '바나나, 사과, 오렌지 등',
  },
  {
    icon: '🥦',
    title: '채소류',
    size: '당근, 브로콜리, 시금치 등',
    imageSrc: 'https://picsum.photos/id/240/350/200',
    description: '당근, 브로콜리, 시금치 등',
  },
];

export const Default: Story = {
  args: {
    categories: sampleCategories,
  },
};

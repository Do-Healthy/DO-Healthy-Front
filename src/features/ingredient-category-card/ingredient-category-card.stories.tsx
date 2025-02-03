import type { Meta, StoryObj } from '@storybook/react';

import { CategoryCard } from './ingredient-category-card.ui';
import { categories } from './ingredient-category.contract';

const meta: Meta<typeof CategoryCard> = {
  title: 'Features/IngredientCategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    icon: {
      control: 'select',
      options: ['🌱', '🐟', '🍌', '🥦', '🍖', '🥛', '🍞', '🧂'],
    },
    imageSrc: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof CategoryCard>;

// 기본 카드 스토리
export const Primary: Story = {
  args: {
    title: '두부/콩류',
    description: '두부, 렌틸콩, 병아리콩 등',
    icon: '🌱',
    imageSrc: 'https://picsum.photos/id/237/350/200',
  },
};

// 아이콘 없는 카드 스토리
export const WithoutIcon: Story = {
  args: {
    ...Primary.args,
    icon: undefined,
  },
};

// 설명 없는 카드 스토리 (모바일 뷰)
export const WithoutDescription: Story = {
  args: {
    ...Primary.args,
    description: '',
  },
};

// 그리드 배치 예시 스토리
export const GridExample: StoryObj = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          description={category.description}
          icon={category.icon}
          imageSrc={category.imageSrc}
        />
      ))}
    </div>
  ),
};

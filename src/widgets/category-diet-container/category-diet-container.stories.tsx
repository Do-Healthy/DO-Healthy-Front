// category-diet-container.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

import { DIET_CATEGORIES } from './category-diet-container.config';
import { DietCategoryContainer } from './category-diet-container.ui';

const meta: Meta<typeof DietCategoryContainer> = {
  title: 'Widgets/DietCategoryContainer',
  component: DietCategoryContainer,
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
type Story = StoryObj<typeof DietCategoryContainer>;

// 기본 그리드 레이아웃 스토리
export const Default: Story = {
  args: {
    dietCategories: DIET_CATEGORIES,
  },
};

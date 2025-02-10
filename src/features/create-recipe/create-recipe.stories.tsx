import type { Meta, StoryObj } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/shared/libs/react-query';

import { CreateRecipeForm } from './create-recipe.ui';

const meta = {
  title: 'features/CreateRecipeForm',
  component: CreateRecipeForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof CreateRecipeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 새로운 레시피를 생성하기 위한 폼을 표시합니다.
 */
export const Default: Story = {};

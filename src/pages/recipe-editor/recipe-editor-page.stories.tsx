import type { Meta, StoryObj } from '@storybook/react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/shared/libs/react-query';

import { CreateRecipeEditorPage, UpdateRecipeEditorPage } from './recipe-editor-page.ui';

const meta = {
  title: 'pages/RecipeEditorPage',
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      router: {
        pathname: '/recipes',
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<never>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateRecipeEditor: Story = {
  render: () => <CreateRecipeEditorPage />,
};

export const UpdateRecipeEditor: Story = {
  render: () => <UpdateRecipeEditorPage />,
};

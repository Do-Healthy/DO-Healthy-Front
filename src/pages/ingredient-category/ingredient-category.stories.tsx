import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import CategoryPage from './ingredient-category-page.ui';

const meta: Meta<typeof CategoryPage> = {
  title: 'Pages/CategoryPage',
  component: CategoryPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="container mx-auto">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CategoryPage>;

export const Default: Story = {};

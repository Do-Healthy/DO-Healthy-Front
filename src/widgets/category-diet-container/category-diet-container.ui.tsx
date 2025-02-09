import * as React from 'react';

import { DietCategoryCard } from '@/features/diet-category-card/diet-category-card.ui';

import { DIET_CATEGORIES } from './category-diet-container.config';

type DietCategory = (typeof DIET_CATEGORIES)[number];

interface DietCategoryContainerProps {
  dietCategories?: readonly DietCategory[];
}

export function DietCategoryContainer({
  dietCategories = DIET_CATEGORIES,
}: DietCategoryContainerProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {dietCategories.map((category) => (
        <div key={category.title} className="flex justify-center">
          <DietCategoryCard
            categoryIcon={category.icon}
            categoryTitle={category.title}
            categoryDescription={category.description}
            className="w-full max-w-[326px]"
          />
        </div>
      ))}
    </div>
  );
}

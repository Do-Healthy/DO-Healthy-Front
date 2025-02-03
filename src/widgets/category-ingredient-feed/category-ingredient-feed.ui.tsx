import * as React from 'react';

import { CategoryCard } from '@/features/ingredient-category-card/ingredient-category-card.ui';
import { Category } from '@/features/ingredient-category-card/ingredient-category.contract';

interface CategoryFeedProps {
  categories: Category[];
}

export function CategoryFeed({ categories }: CategoryFeedProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => (
        <div key={category.title} className="flex justify-center">
          <CategoryCard
            imageSrc={category.imageSrc}
            icon={category.icon}
            title={category.title}
            description={category.description}
            className="w-full max-w-[326px]"
          />
        </div>
      ))}
    </div>
  );
}

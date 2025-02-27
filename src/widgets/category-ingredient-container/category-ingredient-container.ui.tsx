import { ComponentProps } from 'react';

import { IngredientCategory } from '@/entities/ingredient';
import { IngredientCategoryCard } from '@/features/ingredient-category-card';

type CategoryContainerProps = ComponentProps<'div'> & {
  categories: IngredientCategory[];
};

export function IngredientCategoryContainer({ categories, ...props }: CategoryContainerProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" {...props}>
      {categories.map((category) => (
        <div key={category.title} className="flex justify-center">
          <IngredientCategoryCard {...category} className="w-full max-w-[326px]" />
        </div>
      ))}
    </div>
  );
}

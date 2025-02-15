import { ComponentProps } from 'react';

import { IngredientCategory } from '@/entities/ingredient.type';
import { IngredientCategoryCard } from '@/features/ingredient-category-card/ingredient-category-card.ui';

import { INGREDIENT_CATEGORIES } from './category-ingredient-container.config';

interface IngredientCategoryContainerProps extends ComponentProps<'div'> {
  ingredientCategories?: readonly IngredientCategory[];
}

export function IngredientCategoryContainer({
  ingredientCategories = INGREDIENT_CATEGORIES,
  ...props
}: IngredientCategoryContainerProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" {...props}>
      {ingredientCategories.map((ingredientCategory) => (
        <div key={ingredientCategory.title} className="flex justify-center">
          <IngredientCategoryCard
            ingredientImageSrc={ingredientCategory.imageSrc}
            ingredientIcon={ingredientCategory.icon}
            ingredientTitle={ingredientCategory.title}
            ingredientDescription={ingredientCategory.description}
            className="w-full max-w-[326px]"
          />
        </div>
      ))}
    </div>
  );
}

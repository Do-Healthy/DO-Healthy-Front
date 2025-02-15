import { ComponentProps } from 'react';
import { z } from 'zod';

import { IngredientCategoryCardSchema } from './ingredient-category-card.contract';

export type IngredientCategoryCard = z.infer<typeof IngredientCategoryCardSchema>;
export interface IngredientCategoryCardProps
  extends IngredientCategoryCard,
    ComponentProps<'div'> {}

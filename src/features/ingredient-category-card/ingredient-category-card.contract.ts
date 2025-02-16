import { z } from 'zod';

export const IngredientCategoryCardSchema = z.object({
  ingredientImageSrc: z.string().url(),
  ingredientIcon: z.custom<React.ReactNode>().optional(),
  ingredientTitle: z.string().min(1),
  ingredientDescription: z.string(),
});

import { z } from 'zod';

export const ingredientCategoryCardSchema = z.object({
  ingredientImageSrc: z.string().url(),
  ingredientIcon: z.string().optional(),
  ingredientTitle: z.string().min(1),
  ingredientDescription: z.string(),
});

export type IngredientCategoryCardProps = z.infer<typeof ingredientCategoryCardSchema>;

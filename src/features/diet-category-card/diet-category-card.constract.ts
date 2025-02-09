import { z } from 'zod';

export const dietCategoryCardSchema = z.object({
  categoryIcon: z.string().optional(),
  categoryTitle: z.string().min(1),
  categoryDescription: z.string(),
});

export type DietCategoryCardProps = z.infer<typeof dietCategoryCardSchema>;

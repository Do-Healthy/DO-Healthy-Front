import { useMutation } from '@tanstack/react-query';

import { API_PATHS } from '@/shared/config';
import { browserClient } from '@/shared/libs/axios';

import { CreateRecipe } from './create-recipe.contract';

/**
 * 레시피 생성을 위한 뮤테이션 훅입니다.
 */
export function useCreateRecipeMutation() {
  return useMutation({
    mutationFn: (recipe: CreateRecipe) => {
      return browserClient.post(API_PATHS.recipes.getUrl(), recipe);
    },
  });
}

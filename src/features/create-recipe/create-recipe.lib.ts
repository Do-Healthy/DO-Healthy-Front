import { CreateRecipe } from './create-recipe.contract';

/**
 * 레시피 폼 데이터를 서버에 제출하는 함수입니다.
 * 현재는 실제 API 호출 대신 Promise를 사용하여 모킹된 응답을 반환합니다.
 */
export async function submitRecipeForm(formData: CreateRecipe) {
  try {
    const newFormData = structuredClone(formData);

    // 1. 썸네일 이미지 처리
    if (formData.thumbnail instanceof File) {
      // 실제 API 호출 대신 Promise 사용
      newFormData.thumbnail = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve('https://picsum.photos/id/237/350/200');
        }, 100);
      });
    }

    // 2. 조리 단계 이미지들 처리
    const cookingSteps = formData.cookingSteps.map((step) => {
      if (step.image instanceof File) {
        return new Promise<string>((resolve) => {
          setTimeout(() => {
            resolve('https://picsum.photos/id/237/350/200');
          }, 100);
        });
      }
      return null;
    });

    let index = 0;
    for await (const step of cookingSteps) {
      if (step) {
        newFormData.cookingSteps[index].image = step;
      }
      index++;
    }

    console.log('최종 제출될 데이터:', newFormData);
    return newFormData;
  } catch (error) {
    console.error('레시피 저장 중 오류 발생:', error);
    throw error;
  }
}

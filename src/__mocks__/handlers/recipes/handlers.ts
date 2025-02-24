import { HttpResponse, http } from 'msw';

import { API_PATHS } from '@/shared/config';

export const handlers = [
  http.post(API_PATHS.recipes.getUrl(), () => {
    return HttpResponse.json({
      success: true,
    });
  }),
];

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const API_PATHS = {
  recipes: {
    path: '/recipes',
    getUrl: () => `${baseUrl}${API_PATHS.recipes.path}`,
  },
} as const;

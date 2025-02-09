export const PATHS = {
  auth: {
    login: {
      path: '/login',
      getHref: (redirectTo?: string | null) =>
        `/login${redirectTo ? `?redirectTo=${redirectTo}` : ''}`,
    },
  },
} as const;

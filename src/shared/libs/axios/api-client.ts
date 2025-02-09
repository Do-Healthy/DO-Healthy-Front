import Axios from 'axios';

import { PATHS } from '@/shared/config';

// 클라이언트 사이드 API 클라이언트
export const browserClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
});

// 브라우저 클라이언트에만 인터셉터 적용
browserClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (Axios.isAxiosError(error) && error.response?.status === 401) {
      const searchParams = new URLSearchParams();
      const redirectTo = searchParams.get('redirectTo') || window.location.pathname;
      window.location.href = PATHS.auth.login.getHref(redirectTo);
    }
    return Promise.reject(error);
  },
);

// 서버 사이드 API 클라이언트
export const serverClient = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // 서버 환경변수 사용
  headers: {
    Accept: 'application/json',
  },
});

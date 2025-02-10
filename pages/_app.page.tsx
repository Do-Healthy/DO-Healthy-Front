import type { AppProps } from 'next/app';

import { Provider } from '@/app';
import { Layout } from '@/pages/layouts';

import './styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

import { PropsWithChildren } from 'react';

import { QueryClientProvider } from './providers';

export function Provider({ children }: PropsWithChildren) {
  return <QueryClientProvider>{children}</QueryClientProvider>;
}

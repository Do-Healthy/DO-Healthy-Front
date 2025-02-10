export async function enableBrowserMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./browser');
  return worker.start();
}

export async function enableNodeMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { server } = await import('./node');
  server.listen();
}

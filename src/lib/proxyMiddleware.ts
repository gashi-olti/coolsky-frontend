import { createProxyMiddleware } from 'http-proxy-middleware';

import middleware from './middleware';

const proxyMiddleware = () =>
  middleware(
    createProxyMiddleware({
      pathRewrite: { [`^/api`]: '' },
      logLevel: process.env.NODE_ENV === 'production' ? 'debug' : 'warn',
      changeOrigin: true,
      secure: false,
    })
  );

export default proxyMiddleware;

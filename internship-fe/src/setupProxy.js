const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'http://localhost:3000/api',
      changeOrigin: true,
      secure: true,
      logLevel: 'debug',
    }),
  );
};

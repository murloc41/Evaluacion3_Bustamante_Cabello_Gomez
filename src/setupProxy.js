const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1', // solo la raíz
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/products-services', // agrega el endpoint aquí
      },
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Authorization', 'Bearer ipss.get');
      },
    })
  );
};

// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Replace with your API route prefix
    createProxyMiddleware({
      target: 'http://localhost:4000', // URL of your Rails backend
      changeOrigin: true,
    })
  );
};

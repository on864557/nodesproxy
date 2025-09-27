const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = "https://schneegans.de/web/http-echo/";

// Proxy endpoints
app.use('/my-service', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/my-service`]: '',
    },
}));

// Start Proxy
app.listen(PORT, () => {
    console.log(`Starting Proxy at ${API_SERVICE_URL} and ${PORT}`);
});

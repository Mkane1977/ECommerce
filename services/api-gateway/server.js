const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// API Gateway routes
app.use("/authentication", createProxyMiddleware({ target: "http://authentication-service:5005", changeOrigin: true }));
app.use("/products", createProxyMiddleware({ target: "http://product-service:5001", changeOrigin: true }));
app.use("/orders", createProxyMiddleware({ target: "http://order-service:5002", changeOrigin: true }));
app.use("/inventory", createProxyMiddleware({ target: "http://inventory-service:5003", changeOrigin: true }));
app.use("/notifications", createProxyMiddleware({ target: "http://notification-service:5004", changeOrigin: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});

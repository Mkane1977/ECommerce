// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5001;
//
// app.use(cors());  // Enable CORS for all origins (or specify the frontend URL)
//
// // Health check or status endpoint
// app.get('/', (req, res) => {
//     res.send('Product Service is running');
// });
//
// // Your other API endpoint
// app.get('/products', (req, res) => {
//     res.json({ message: 'Product service' });
// });
//
// app.listen(port, () => {
//     console.log(`Product service running on http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const port = 5001;

const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Product service running on port ${port}`);
});

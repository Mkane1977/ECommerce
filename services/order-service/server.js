const express = require('express');
const cors = require('cors');
const app = express();
const port = 5002;

app.use(cors());  // Enable CORS for all origins (or specify the frontend URL)

// Health check or status endpoint
app.get('/', (req, res) => {
    res.send('Order Service is running');
});

// Your other API endpoint
app.get('/products', (req, res) => {
    res.json({ message: 'Order service' });
});

app.listen(port, () => {
    console.log(`Order service running on http://localhost:${port}`);
});
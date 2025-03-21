const express = require('express');
const cors = require('cors');
const app = express();
const port = 5003;

app.use(cors());  // Enable CORS for all origins (or specify the frontend URL)

// Health check or status endpoint
app.get('/', (req, res) => {
    res.send('Inventory Service is running');
});

// Your other API endpoint
app.get('/products', (req, res) => {
    res.json({ message: 'Inventory service' });
});

app.listen(port, () => {
    console.log(`Inventory service running on http://localhost:${port}`);
});

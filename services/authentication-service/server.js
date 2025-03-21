const express = require('express');
const cors = require('cors');
const app = express();
const port = 5005;

app.use(cors());  // Enable CORS for all origins (or specify the frontend URL)

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Authentication Service is running');
});

// Actual API endpoint
app.get('/products', (req, res) => {
    res.json({ message: 'Authentication service' });
});

app.listen(port, () => {
    console.log(`Authentication service running on http://localhost:${port}`);
});

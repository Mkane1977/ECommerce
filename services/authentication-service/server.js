const express = require('express');
const cors = require('cors');
const app = express();
const port = 5005;

app.use(cors());  // Enable CORS for all origins
app.use(express.json()); // Middleware to parse JSON requests

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Authentication Service is running');
});

// Add the missing /login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy authentication logic
    if (username === 'testuser' && password === 'testpassword') {
        return res.json({ token: "mock-jwt-token" });
    } else {
        return res.status(401).json({ error: "Invalid credentials" });
    }
});

app.listen(port, () => {
    console.log(`Authentication service running on http://localhost:${port}`);
});

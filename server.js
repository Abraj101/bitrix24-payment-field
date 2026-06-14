const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming configuration payloads from Bitrix24
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets out of the root directory
app.use(express.static(path.join(__dirname)));

// Route to handle BOTH initial browser loading (GET) and Bitrix24 secure placement validation (POST)
app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'handler.html'));
});

app.listen(PORT, () => {
    console.log(`Payment Section Server running on port ${PORT}`);
});
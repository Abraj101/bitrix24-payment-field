const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to automatically parse incoming form payloads from Bitrix24
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets out of the root directory
app.use(express.static(path.join(__dirname)));

// Allow BOTH GET (browser) and POST (Bitrix24) for the installer dashboard
app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Allow BOTH GET and POST for your custom payment layout handler block
app.all('/handler.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'handler.html'));
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`);
});
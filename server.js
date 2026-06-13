const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets out of the root directory
app.use(express.static(path.join(__dirname)));

// Routes to deliver our interfaces
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/handler.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'handler.html'));
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`);
});
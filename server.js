const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Route 1: The App Configuration/Installer screen
app.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route 2: The Actual User Interface rendered inside your Deal column block
app.all('/handler.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'handler.html'));
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`);
});
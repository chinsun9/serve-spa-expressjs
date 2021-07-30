const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

const staticDir = path.join(__dirname, '../build');
const spaIndex = path.join(staticDir, 'index.html');

app.use(express.static(staticDir));

app.get('*', (req, res) => {
    res.sendFile(spaIndex);
});

app.listen(port, () => {
    console.info(`Express server started: http://localhost:${port}`);
});
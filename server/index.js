const express = require('express');
const path = require('path');
const app = express();
const PORT = 8085;
module.exports = app;

const createApp = () => {
    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
}

const startListening = () => {
    app.listen(PORT, () => console.log(`App served on port ${PORT}`));
}

async function bootApp() {
    await createApp();
    await startListening();
}

if (require.main === module) {
    bootApp();
} else {
    createApp();
}
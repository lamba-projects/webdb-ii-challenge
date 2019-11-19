const express = require('express');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send(`
        <h1>Sanity Check 👋🏻 🌎 <h1>
    `)
});

module.exports = server;
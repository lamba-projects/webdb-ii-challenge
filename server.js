const express = require('express');

const carRouter = require('./cars/carsRouter.js');

const server = express();

server.use(express.json());
server.use('/api/cars', carRouter)

server.get("/", (req, res) => {
    res.send(`
        <h1>Sanity Check 👋🏻 🌎 <h1>
    `)
});

module.exports = server;
const express = require('express')

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>Ther Server is Up!</h1>')
})

module.exports = server

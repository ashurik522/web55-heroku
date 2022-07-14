const express = require('express')

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>The Server is Up!</h1>')
})

server.get('/message-of-the-day', (req, res) => {
    let motd = process.env.MOTD || '(no message)'
    res.send(`<h1>Today's Message </h1><p>${motd} </p>`)
})



module.exports = server

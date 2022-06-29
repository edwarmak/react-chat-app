const express = require('express')
const http = require('http')
const cors = require('cors')
// which port we are running on
const PORT = process.env.PORT || 5001
const router = require('./router')
const app = express()
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server,
    {
        cors:{
            origin:"*"
        }
    })

// listen for incoming sockets and log to the console
io.on('connection', (socket) => {
    console.log('We have a new connection!')
// listen for users disconnecting and log to the console
    socket.on('disconnect', () => {
        console.log('User has disconnected.')
    })
})

app.use(router)

server.listen(PORT, () => console.log(`server has started on port ${PORT}`))
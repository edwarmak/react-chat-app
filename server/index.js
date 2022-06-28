const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')
// which port we are running on
const PORT = process.env.PORT || 5001

const app = express()
const server = http.createServer(app)
const io = socketio(server)

server.listen(PORT, () => console.log(`server has started on port ${PORT}`))
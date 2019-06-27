const path = require('path')

const cors = require('cors')
const express = require('express')

const lies = require('./routes/lies')

const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/lies', lies)

module.exports = server

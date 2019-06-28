const path = require('path')

const cors = require('cors')
const express = require('express')

const lies = require('./routes/lies')
const quote = require('./routes/quote')

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/lies', lies)
server.use('/api/v1/trump', quote)

module.exports = server

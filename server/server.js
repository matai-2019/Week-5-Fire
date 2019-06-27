const path = require('path')

const cors = require('cors')
const express = require('express')

const lies = require('./routes/lies')

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/lies', lies)

module.exports = server

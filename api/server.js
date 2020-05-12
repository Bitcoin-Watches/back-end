const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const authenticate = require('../auth/authenticate-middleware.js')
const authRouter = require('../auth/auth-router.js')
const Router = require('..//-router.js')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/', authenticate, Router)

server.get('/', (req, res) => {
res.send(`IT'S WORKING, IT'S WORKING!`)
})

module.exports = server
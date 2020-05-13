const express = require('express')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const xss = require('xss-clean')
const cors = require('cors')

const authenticate = require('../auth/authenticate-middleware.js')
const authRouter = require('../auth/auth-router.js')
const Router = require('..//-router.js')

const server = express()

const limit = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests'
})

server.use(helmet())
server.use(express.json({ limit: '20kb' }))
server.use(cors())
server.use(xss())
server.use(express.json())

server.use('/api/auth', authRouter)
server.use('/api/', limit, authenticate, Router)

server.get('/', (req, res) => {
res.send(`IT'S WORKING, IT'S WORKING!`)
})

module.exports = server
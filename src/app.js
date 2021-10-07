const express = require('express')
const config = require('config')
const app = express()

// Settings
app.set('port', config.get('SERVER.PORT') || 5000)

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(require('./routes/user.routes'))

module.exports = app
const express = require('express')
const config = require('config')
const { createRoles } = require('./utils/initialSetup')

// Initializations
const app = express()
require('./db/connection/pool') // Connection to database (mysql)
createRoles()

// Settings
app.set('port', config.get('SERVER.PORT') || 5000)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(require('./routes/user.routes'))
app.use(require('./routes/auth.routes'))

module.exports = app
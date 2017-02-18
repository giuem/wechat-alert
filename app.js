"use strict";
const express = require('express')
const app = express()
const basicAuth = require('basic-auth-connect')
const config = require('./config')

if (config.app.auth.user && config.app.auth.pass) {
    app.use(basicAuth(config.app.auth.user, config.app.auth.pass))
}

app.get('/push', require('./routes/push'))

app.listen(config.app.port, () => {
    console.log(`app start at ${config.app.port}!`)
})
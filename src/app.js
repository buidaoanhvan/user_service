const express = require('express')
const helmet = require('helmet')
const app = express()
require('./database/mongodb')()

// const User = require('./model/user.model')

app.use(helmet())
app.use(express.json())

app.get('/user/ping', (req, res) => {
    const reqId = req.headers['x-request-id']
    console.log(`[x] User service ok!`)
    console.log(`[.] reqId: ${reqId}`)
    res.send({
        code: '00',
        message: 'User service ok!',
    })
})

module.exports = app

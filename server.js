const express = require('express')
const app = express()
require('dotenv').config()
require('./dbHandler.js').connectDB()


app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000, ()=> console.log('Server is running on port 3000'))


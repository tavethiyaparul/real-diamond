const express = require('express')
const app = express()

app.use('/user', require("./userRouter"));
app.use('/diamond', require("./diamondRouter"));

module.exports= app 
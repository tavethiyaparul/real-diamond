const express = require('express')
const app = express()
const { isAuthentication } = require('../middleware/auth');
const controller = require('../controllers/diamondController.js')

app.get("/", isAuthentication,controller.searchDiamond)

module.exports= app 
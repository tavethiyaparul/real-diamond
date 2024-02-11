const express = require('express')
const app = express()
const { isAuthentication } = require('../middleware/auth');
const controller = require('../controllers/diamondController.js')

app.post("/",controller.searchDiamond)
app.get("/:id",controller.getDiamondDetails)
app.post("/contact",controller.addContact)
module.exports= app 
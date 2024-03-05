const express = require("express")
const app = express()
const { isAuthentication } = require("../middleware/auth")
const controller = require("../controllers/diamondController.js")

app.post("/", isAuthentication, controller.searchDiamond)
app.get("/:id", isAuthentication, controller.getDiamondDetails)
app.post("/contact", controller.addContact)
module.exports = app

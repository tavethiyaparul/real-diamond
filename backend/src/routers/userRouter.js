const express = require("express")
const app = express()
const { isAuthentication } = require("../middleware/auth")
const controller = require("../controllers/userController.js")

app.post("/register", controller.registerUser)
app.post("/login", controller.loginUser)
app.get("/logout", controller.logout)

// router.route("/register").post(controller.registerUser)
// router.route("/login").post(controller.loginUser)
// router.route("/password/forgot").post(controller.forgotPassword)
// router.route("/password/reset/:token").put(controller.resetPassword)
// router.route("/me").get(isAuthentication, controller.getUserDetails);
// router.route("/password/update").put(isAuthentication, controller.updatePassword);
// router.route("/me/update").put(isAuthentication, controller.updateProfile);

// router.route("/logout").get(controller.logout)
module.exports = app

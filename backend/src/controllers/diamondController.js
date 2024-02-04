const ErrorHander = require('../utils/errorheandler')
const catchAsyncError = require("../utils/catchAsyncError")
const sendToken = require("../utils/jwtToken")
const sendEmail = require("../utils/sendEmail")
const crypto = require('crypto')
const User = require("../models/userModel")


module.exports = {
searchdiamond: catchAsyncError(async (req, res, next) => {
    console.log(" req.body", req.body)
    res.status(200).json({ status: 1, message:"Please Enter email & password" });
}),
}
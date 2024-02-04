const ErrorHander = require('../utils/errorheandler')
const catchAsyncError = require("../utils/catchAsyncError")
const sendToken = require("../utils/jwtToken")
const sendEmail = require("../utils/sendEmail")
const crypto = require('crypto')
const User = require("../models/userModel")


module.exports = {
registerUser: catchAsyncError(async (req, res, next) => {
    console.log(" req.body", req.body)
    const { firstName,lastName, email, password,countryCode, country,phoneNo } = req.body
    const user = await User.create({
        phoneNo,
        firstName,
        lastName,
        phoneNo,
        email,
        password,
        countryCode,
        country
    })

    sendToken(user, 201, res)
}),

loginUser : catchAsyncError(async (req, res, next) => {
    console.log(" req.body", req.body)
    const { fieldsName, password } = req.body

    if (!fieldsName ||  !password) {
        res.status(400).json({ status: 1, message:"Please Enter email & password" });
    }

    const user = await User.findOne(fieldsName).select("+password")

    if (!user) {
        res.status(400).json({ status: 1, message:"Invalid email or phone no & password" });
    }

    const ismatched = await user.comparePassword(password)

    if (!ismatched) {
        res.status(400).json({ status: 1, message:"Invalid email or phone no  & password" });
    }
    sendToken(user, 200, res)
}),


logout : catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: 1,
        message: "loged out"
    })
}),

forgotPassword : catchAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        res.status(400).json({ status: 1, message:"user not found" });
    }

    const resetToken = user.getResetPasswordToken()

    await user.save({ validateBeforeSave: false })
    // const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
     const resetPasswordUrl = `${process.env.FRONTEND_URL}://${req.get("host")}/password/reset/${resetToken}`

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'world class diamond Passsword Recovery',
            message,
        })
        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false })

        return next(new ErrorHander(error.message, 500));
    }
}),

// Reset Password
resetPassword : catchAsyncError(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpair: { $gt: Date.now() },
    });

    if (!user) {
        return next(
            new ErrorHander(
                "Reset Password Token is invalid or has been expired",
                400
            )
        );
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHander("Password does not password", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpair = undefined;

    await user.save();

    sendToken(user, 200, res);
}),

getUserDetails : catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: 1,
        user,
    });
}),

updatePassword : catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHander("Old password is incorrect", 400));
    }

    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHander("password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
}),

getAllUser : catchAsyncError(async (req, res, next) => {
    const users = await User.find();
  
    res.status(200).json({
      success: true,
      users,
    });
  }),

deleteUser : catchAsyncError(async (req, res, next) => {
   
   const user = await User.findById(req.params.id)

   if(!user){
    return next(
        new ErrorHander(`User does not exist with Id: ${req.params.id}`)
      );
    }
  
    await user.remove()

    res.status(200).json({
      success: true,
      message:"delete user"
    });
  })
}
const ErrorHander = require('../utils/errorheandler');
const catchAsyncError =require('../utils/catchAsyncError')
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")


exports.isAuthentication = async(req,res,next)=>{
    const {token}= req.cookies
    try{
    if(!token)
    {
        return res.status(403).json({ status: 10, message: `Please Login to access this resource` })
    }

    const decodedata = jwt.verify(token,process.env.JWT_SECERT)
    const user= await User.findById(decodedata.id)
    if (!user) {
        return res.status(403).json({ status: 10, message: 'User not found' });
    }
    req.user = user;
    next();
    } catch (error) {
        res.status(403).json({ status: 10, message: 'Token is not valid or Expired!' });
    }
}

// exports.authorizeRoles = (...roles) =>{
//     return(req,res,next)=>{
//         if(!roles.includes(req.user.role)){
//            return next( new ErrorHander(
//                 `Roles: ${req.user.role} is not allowed access this resource`,403
//             ))
//         }
//         next();
//     }
// }
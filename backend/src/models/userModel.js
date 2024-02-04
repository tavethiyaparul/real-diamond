const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')
const crypto = require('crypto') 

const userSchema = new mongoose.Schema({
  phoneNo: { type: String,trim:true },
  email: { type:String,trim:true,unique: true },
  password: { type: String, trim: true },
  countryCode: { type: String,trim:true},
  country: {type: String,trim:true},
  firstName:{type:String,trim: true},
  lastName:{type:String,trim:true},
  token: {type:String},
  resetPasswordToken:String,
 resetPasswordExpair:Date,
 },{
  timestamps: true,
})

userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password =await bcrypt.hash(this.password,10)
})

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECERT,{
        expiresIn:process.env.JWT_EXPAIR
    })
}

userSchema.methods.comparePassword = async function(enterpassword){
    return await bcrypt.compare(enterpassword,this.password)
}

userSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex")

    this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex")

    this.resetPasswordExpair= Date.now() + 15 *60 *1000

    return resetToken
}

module.exports = mongoose.model("users", userSchema);   
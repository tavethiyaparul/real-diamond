const mongoose = require("mongoose");

const contactSchama = new mongoose.Schema({
 
  email: { type:String,trim:true,unique: true },
  name: {type:String},
  message: {type:String},
 },{
  timestamps: true,
})


module.exports = mongoose.model("contact", contactSchama);   
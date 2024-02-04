/** 
* Paste one or more documents here
*/
const mongoose = require("mongoose");

const diamondSchema = new mongoose.Schema({
    "SRNo": { type: Number, trim: true },
    "Client Ref":  { type: String, trim: true },
    "Shape": { type: String, trim: true },
    "Weight":  { type: Number, trim: true },
    "Color":  { type: String, trim: true },
    "Clarity": { type: String, trim: true },
    "Cut":  { type: String, trim: true },
    "Polish":  { type: String, trim: true },
    "Sym":  { type: String, trim: true },
    "Fl":  { type: String, trim: true },
    "Rap-price": { type: Number, trim: true },
    "OrgAmt":  { type: Number, trim: true },
    "Rap%":  { type: Number, trim: true },
    "Price Per Crt": { type: Number, trim: true },
    "Total":  { type: Number, trim: true },
    "Milky":  { type: String, trim: true },
    "Ratio":  { type: Number, trim: true },
    "TD":  { type: Number, trim: true },
    "TA":  { type: Number, trim: true },
    "Length":  { type: Number, trim: true },
    "Width":  { type: Number, trim: true },
    "Depth":  { type: Number, trim: true },
    "Lab":  { type: String, trim: true },
    "V360": { type: String, trim: true },
    "VideoLink":  { type: String, trim: true },
    "Photo":  { type: String, trim: true },
    "LOCATION":  { type: String, trim: true },
    "Girdle":  { type: String, trim: true },
    "Crn Ag":  { type: Number, trim: true },
    "Crn Ht":  { type: Number, trim: true },
    "Pav Ag":  { type: Number, trim: true },
    "Pav Dp":  { type: Number, trim: true },
    "Str Ln":  { type: Number, trim: true },
    "Lr Half":  { type: Number, trim: true },
    "Girdle %":  { type: Number, trim: true },
},{
    timestamps: true,
  });

module.exports = mongoose.model("diamondDetails", diamondSchema);  

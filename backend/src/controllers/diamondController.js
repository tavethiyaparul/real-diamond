const catchAsyncError = require("../utils/catchAsyncError")
const Diamond = require("../models/diamondModel")
const ApiFeatures =require("../utils/apiFeatures")
const Contact =require("../models/contactModel")

module.exports = {
searchDiamond: catchAsyncError(async (req, res, next) => {
    console.log(" req.body", req.body)
    const { shape, color ,polish,cut,clarity,sym,fluo,lab,eyeClean,location,fromSize,toSize} = req.body;

        let addquery =[]
        if (color) {
            addquery.push({ Color: { $in:color} })
        }
        if (fromSize && toSize) {
            addquery.push({ Weight: { $gt:fromSize,$lt:toSize} })
        }
        if (shape) {
            addquery.push({ Shape: { $in:shape } })
        }
        if (polish) {
            addquery.push({ Polish: { $in:polish } })
        }
        if (cut) {
            addquery.push({ Cut: { $in:cut } })
        }
        if (clarity) {
            addquery.push({ Clarity: { $in:clarity } })
        }
        if (sym) {
            addquery.push({ Sym: { $in:sym } })
        }
        if (fluo) {
            addquery.push({ Fl: { $in:fluo} })
        }
        if (lab) {
            addquery.push({ Lab: { $in:lab } })
        }
        // if (eyeClean) {
        //     addquery.push({ eyeClean: eyeClean })
        // }
        if (location) {
            addquery.push({ LOCATION: location })
        }

            console.log("addquery",JSON.stringify(addquery,2,null))
        let arrData
        if (addquery.length > 0) {
            arrData = {
                $and: addquery,
            }
        } else {
            arrData = {}
        }

        console.log("addquery",JSON.stringify(arrData))
        const totalCount = await Diamond.find(arrData).countDocuments()
        
        const apiFeature = new ApiFeatures(
            Diamond.find(arrData).sort({SRNo: 1 }),
            req.query
        )
            .search()
            .filter()

        let result = await apiFeature.query

        let filterCount = result?.length

        apiFeature.pagination()

        result = await apiFeature.query.clone()

        const resultData = {
            result: result ? result : [],
            totalCount: totalCount ? totalCount : 0,
            resultperpage: Number(req.query.resultperpage),
            filterCount: filterCount ? filterCount : 0,
        }
        return res.status(200).json({ status: 1, message: "all version list", data: resultData })
}),
getDiamondDetails : catchAsyncError(async (req, res, next) => {
    console.log("------",req.params.id)
    const result = await Diamond.findById(req.params.id);

    res.status(200).json({
        success: 1,
        result,
    });
}),
addContact : catchAsyncError(async (req, res, next) => {
    const {message,name,email} = req.body
    const result = await Contact.create({
        message,
        name,
        email
    });

    res.status(200).json({
        success: 1,
        result,
    });
}),
}
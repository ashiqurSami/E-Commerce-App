const WishModel=require('../models/WishModel')
const mongoose=require('mongoose')
const ObjectID=mongoose.Types.ObjectId

exports.SaveWishList=async(req)=>{
    try{
        let user_id=req.headers.user_id
        let reqBody=req.body 
        reqBody.userID=user_id
        await WishModel.updateOne(reqBody,{$set:reqBody},{upsert:true})
        return {status:"success",message:"Wish List Save Success"}
    }
    catch (e) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}
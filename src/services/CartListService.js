const CartModel=require('../models/CartModel')
const mongoose=require('mongoose')
const ObjectID=mongoose.Types.ObjectId

exports.SaveCartListService=async(req)=>{
    try{
        let user_id=req.headers.user_id
        let reqBody=req.body 
        reqBody.userID=user_id
        await CartModel.create(reqBody)
        return {status:"success",message:"Cart List Save Success"}
    }
    catch (e) {
        console.log(e.toString())
        return {status:"fail",message:"Something Went Wrong !"}
    }
}
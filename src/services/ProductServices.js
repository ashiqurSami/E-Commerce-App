const BrandModel=require('../models/BrandModel')
const mongoose =require('mongoose');



exports.BrandListService=async()=>{
    try{
        let data=await BrandModel.find()
        console.log(data)
        return {status:"success",data:data}
    }catch(e){
        return {status:"fail",data:e.toString()}
    }
}
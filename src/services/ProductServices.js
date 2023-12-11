const BrandModel=require('../models/BrandModel')
const CategoryModel=require('../models/CategoryModel')
const ProductSliderModel=require('../models/ProductSliderModel')
const ProductModel=require('../models/ProductModel')

const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId;



exports.BrandListService=async()=>{
    try{
        let data=await BrandModel.find()
        return {status:"success",data:data}
    }catch(e){
        console.log(e)
        return {status:"fail",data:e.toString()}
    }
}

exports.CategoryListService=async()=>{
    try{
        let data=await CategoryModel.find()
        return {status:"success",data:data}
    }catch(e){
        return {status:'fail',data:e.toString()}
    }
}

exports.SliderListService=async()=>{
    try{
        let data=await ProductSliderModel.find()
        return {status:"success",data:data}
    }catch(e){
        return {status:"success",data:data}
    }
}

exports.ListByBrandService=async(req)=>{
    try {
        let BrandID=new ObjectId(req.params.BrandID);
        let MatchStage={$match:{brandID:BrandID}}
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }catch (e) {
        return {status:"fail",data:e}.toString()
    }
}
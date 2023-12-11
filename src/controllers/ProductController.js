const ProductServices=require('../services/ProductServices')

exports.ProductBrandList=async(req,res)=>{
    let result=await ProductServices.BrandListService()
    return res.status(200).json(result)
}

exports.ProductCategoryList=async(req,res)=>{
    let result=await ProductServices.CategoryListService()
    return res.status(200).json(result)
}

exports.ProductSliderList=async(req,res)=>{
    let result=await ProductServices.SliderListService()
    return res.status(200).json(result)
}

exports.ProductListByBrand=async(req,res)=>{
    let result=await ProductServices.ListByBrandService(req)
    return res.status(200).json(result)
}
const ProductServices=require('../services/ProductServices')

exports.ProductBrandList=async(req,res)=>{
    let result=await ProductServices.BrandListService()
    return res.status(200).json(result)
}
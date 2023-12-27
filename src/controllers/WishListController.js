const WishListService=require('../services/WishListService')

exports.SaveWishList=async(req,res)=>{
    let result=await WishListService.SaveWishList(req)
    return res.status(200).json(result)

}
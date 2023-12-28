const CartListService=require('../services/CartListService')


exports.SaveCartList=async(req,res)=>{
    let result=await CartListService.SaveCartListService(req)
    return res.status(200).json(result)
}
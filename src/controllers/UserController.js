const UserService=require('../services/UserService')

exports.UserGetOTP=async(req,res)=>{
    let result=await UserService.UserOTPgetService(req)
    return res.status(200).json(result)
}

exports.VerifyLogin=async(req,res)=>{
    let result=await UserService.VerifyOTPService(req)
    return res.status(200).json(result)
}
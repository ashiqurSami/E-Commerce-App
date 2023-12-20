const EmailHelper=require('../utility/EmailHelper')
const TokenHelper=require('../utility/TokenHelper')
const UserModel=require('../models/UserModel')

exports.UserOTPgetService=async(req)=>{
    try{
        let email=req.params.email
        let code=Math.floor(100000+Math.random()*900000)

        let EmailText=`Your Verification Code is ${code}`
        let EmailSubject='Email Verification'

        await EmailHelper.EmailSender(email,EmailText,EmailSubject)
        await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})

        return {status:"success", message:"6 Digit OTP has been send"}
    }catch(e){
        return {status:"fail", message:"Something Went Wrong"}
    }
}

exports.VerifyOTPService=async(req)=>{
    try{
        let email=req.params.email
        let OTP=req.params.OTP
        let total=await UserModel.find({email:email,otp:OTP}).count('total')
        if (total===1){
            let user_id=await UserModel.find({email:email,otp:OTP}).select('_id')
            let token=TokenHelper.EncodeToken(email,user_id[0]['_id'].toString())
            await UserModel.updateOne({email:email},{$set:{otp:"0"}})

            return {status:"success",message:"Valid OTP",token:token}
        }
        else{
            return {status:"fail",message:"Invalid OTP",from:"try block"}
        }

    }catch(e){
        console.log(e.toString())
        return {status:"fail",message:"Invalid OTP",from:"catch block"}
    }
}
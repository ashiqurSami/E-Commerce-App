const express=require('express')
const ProductController=require('../controllers/ProductController')
const UserController=require('../controllers/UserController')
const router=express.Router()


//Product
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)
router.get('/ProductListBySimilar/:CategoryID',ProductController.ProductListBySimilar)
router.get('/ProductListByKeyword/:keyword',ProductController.ProductListByKeywordService)
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
router.get('/ProductReview/:ProductID',ProductController.ProductReviewList)


//user
router.post('/UserGetOTP/:email',UserController.UserGetOTP)
router.put('/UserLoginVerify/:email/:OTP',UserController.VerifyLogin)




module.exports=router
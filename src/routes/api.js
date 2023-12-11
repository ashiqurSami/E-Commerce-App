const express=require('express')
const ProductController=require('../controllers/ProductController')
const CategoryModel=require('../models/CategoryModel')
const mongoose=require('mongoose')



const router=express.Router()


//Product
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)

module.exports=router
const express=require('express')
const ProductController=require('../controllers/ProductController')
const CategoryModel=require('../models/CategoryModel')
const mongoose=require('mongoose')



const router=express.Router()


//Product
router.get('/ProductBrandList',ProductController.ProductBrandList)
// router.post('/post', async (req, res) => {
//     try {
//       const reqBody = req.body;
//       const createdCategory = await CategoryModel.create(reqBody);
//       return res.status(200).json({ status: "Success", data: createdCategory });
//     } catch (error) {
//       return res.status(500).json({ status: "Error", message: error.message });
//     }
//   });



module.exports=router
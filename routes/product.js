const express = require('express')
const { 
    getAllProduct,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    deleteAllProduct,
    //ratingUpDate,
    //ratingInc
    
}=require("../controllers/product")
    
const router =express.Router()
router.route("/").get(getAllProduct).post(createProduct).delete(deleteAllProduct)     //.put(ratingInc)
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct)//.patch(ratingUpDate)
//router.route("/:id")

module.exports=router

const asyncWrapper = require('../middleware/async');
const {myCustomError} =require("../errors/myError")
const product =require('../models/product')

const getAllProduct =asyncWrapper(async(req,res)=>{
    const products = await product.find({})
    res.json(products)
    
    }
    


)



const createProduct = asyncWrapper(async(req,res)=>{
    let createNew =await product.create(req.body)
    res.status(201).json({createNew})
    
}

)




//get single task by id

const getProduct=asyncWrapper( async(req,res)=>{

    const {id:taskID}=req.params
    const getOne =await product.findOne({_id:taskID})
    if (!getOne) {
    return next(myCustomError(`No task with id : ${taskID}`, 404))}
    res.status(200).json({getOne})
}
)



const updateProduct=asyncWrapper( async(req,res)=>{
            const { id: productID } = req.params;
            const newContent =req.body
            const productUpDate = await product.findOneAndUpdate({ _id:productID },{$push:newContent}, {
                new:true,
                override:true
            })

if (!productUpDate) {
    return next(myCustomError(`No task with id : ${productID}`, 404))
  }
    res.status(200).json({ productID})})



const deleteProduct = asyncWrapper(async (req, res, next) => {
        const { id: productID } = req.params
        const task = await product.findOneAndDelete({ _id:productID })
       
        res.status(200).json({task})
      })

        const deleteAllProduct = asyncWrapper(async (req, res, next) => {
        const task = await product.deleteMany({ _id:productID })
        res.status(200).json({task})
        })
    
const ratingUpDate =asyncWrapper(async (req,res) =>{
    //const newContent =req.body
    const { id: productID } = req.params
     const newContent=req.body;
const rate =  await product.updateOne({_id:productID},{$push:{rating:newContent}}, {
    new:true,
    override:true
})
res.status(200).json({rate})
//console.log("hello updateFav" )
})

const ratingInc =asyncWrapper(async (req,res) =>{
    //const newContent =req.body
    const { id: productID } = req.params
//     const rating=[]
//     const newContent ="aji"
const rate =  await product.updateOne({_id:productID},{$inc:{rating:1}}, {
    new:true,
    override:true
})
res.status(200).json({rate})
//console.log("hello updateFav" )
})



    

    
module.exports={
    getAllProduct,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    deleteAllProduct,
    ratingUpDate,
    ratingInc
}

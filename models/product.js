const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
name: {
    type:String || Number,
    required: [true, 'must provide name'],
    trim: true,
    max: [20, 'name can not be more than 20 characters'],
},
price:{
    type:String || Number,
    required:true
},

rating:{
    type: [Number],
    required:[true,'Rating must be provided']
},

img:{type:String,
    required:false},

id:{
        type:Number,
        required:true
    },


    


})


module.exports = mongoose.model('product', ProductSchema)

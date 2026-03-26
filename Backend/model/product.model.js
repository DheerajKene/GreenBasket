const mongoose = require("mongoose");
const { version } = require("os");


const productSchema = new mongoose.Schema({
    img:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
        
    },
    name_of_product:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required: true
    },
    product_description:{
        type:String,
        required:true
    },
    createdAt: {
    type: Date,
    default: Date.now
  }
    
},
{
    versionKey:false
}  
);

const productModel = mongoose.model("product", productSchema);
module.exports = productModel
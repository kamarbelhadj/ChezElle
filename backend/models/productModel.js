import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name : {type : String , required : true} ,
    description : {type : String },
    price : {type: Number , required : true},
    images : {type: Array , required : true},
    category : {type: String , required : true},
    subCategory : {type: String , required : true},
    sizes : {type: Array , default :{} },
    bestseller : {type : Boolean },
    date : {type : Number ,required : true}
    
},{minimize:false})
const productModel = mongoose.models.product || mongoose.model("product",productSchema) ; 
export default productModel ; 
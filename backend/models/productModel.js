import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name : {type : String , required : true} ,
    description : {type : String , required : true},
    price : {type: Number , required : true},
    images : {type: Array , required : true},
    category : {type: String , required : true},
    subCategory : {type: String , required : true},
    uppersizes : {type: Array , default :{} },
    lowersizes : {type: Array , default :{} },
    color : {type: Array ,  default :{}},
    bestseller : {type : Boolean },
    date : {type : Number ,required : true}
    
},{
    validate: {
        validator: function () {
            return this.uppersizes || this.lowersizes;
        },
        message: 'Either uppersizes or lowersizes must be provided, but not both.'
    },

},{minimize:false})
const productModel = mongoose.models.product || mongoose.model("product",productSchema) ; 
export default productModel ; 
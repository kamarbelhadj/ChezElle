import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    userId : { type : String , require : true},
    items : {type : Array , required : true},
    amount : {type : Number , required : true},
    addresse : {type : Object , required : true},
    status : {type : String , required : true , default:'Order Placed'},
    date : {type : Number , required : true},
})

const orderModel = mongoose.models.order || mongoose.model('order' , orderSchema)

export default orderModel ;
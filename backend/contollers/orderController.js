import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// palce order cash on delivery
const placeOder = async ( req,res) =>{
    try {
        const {userId , items , amount , addresse} = req.body;
        const orderData = {
            userId,
            items,
            addresse,
            amount,
            payment:false,
            date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success : true , message : "Commande passée"})

        
    } catch (error) {
        console.log(error.message)
        res.json({success: false , message : error.message})
        
    }

}

// all orders data from admin pannel 
const allOrders = async ( req,res) =>{

}

//User order data for the frontend
const userOrders = async ( req,res) =>{

}

//update order status from admin panel
const updateStatus = async ( req,res) =>{

}

export {placeOder,allOrders,userOrders,updateStatus}
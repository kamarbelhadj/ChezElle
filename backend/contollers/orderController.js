import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// palce order cash on delivery
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, addresse } = req.body;
    const orderData = {
      userId,
      items,
      addresse,
      amount,
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.json({success :  true ,message :'Commande envoyée'});
 
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
; }

// all orders data from admin pannel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//User order data for the frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//update order status from admin panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
    res.json({
      success: true,
      message: "Statut mis à jour",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { placeOrder, allOrders, userOrders, updateStatus };

import express from 'express'
import {placeOder,allOrders,userOrders,updateStatus} from '../contollers/orderController.js'
import adminauth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();
//admin features
orderRouter.post('/list',adminauth, allOrders);
orderRouter.post('/status',adminauth,updateStatus)
//user 
orderRouter.post('/place',authUser,placeOder)
orderRouter.post('/user',authUser,userOrders)

export default orderRouter ;
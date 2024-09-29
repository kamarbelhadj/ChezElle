import express from 'express'
import { addToCart , getUserCart,updateCart } from '../contollers/cartControllers.js'
import authUser from '../middleware/auth.js'
const cartRouter = express.Router()
cartRouter.post('/get',authUser ,getUserCart)
cartRouter.post('/add',authUser ,addToCart)
cartRouter.post('/updat',authUser ,updateCart)
export default cartRouter ;


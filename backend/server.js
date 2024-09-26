import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/couldinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

// app config 
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary();

//middleware 
app.use(express.json())
app.use(cors())

// api endpoints 
app.get('/',(req,res)=>{
    res.send("Api  working")
})
app.use('/api/user', userRouter)
app.use('/api/product',productRouter)
app.listen(port,()=>console.log('server started on PORT : '+ port))
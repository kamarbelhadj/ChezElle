import userModel from '../models/userModel.js'

// add product to user cart 
const addToCart = async (req,res) =>{
    try {
        const {userId , itemId , size} = req.body
        const userData = await userModel.findById(userId) 
        let  cartData = await userData.cartData
        if(cartData[itemId]){
            if (cartData[itemId][size]){
                cartData[itemId][size]+=1
            }
            else{
                cartData[itemId][size]=1

            }
        }else{
            cartData[itemId]={}
            cartData[itemId][size]=1

        }
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json ({success : true , message : 'Ajouté au panier'})

        
    } catch (error) {
        console.log(error.message)
        res.json ({success : false , message : error.message})
        
    }

}

// update cart 
const updateCart = async (req,res) =>{
    try {
        const {userId , itemId , size , quantity} = req.body
        const userData = await userModel.findById(userId) 
        let cartData = updateCart.cartData
        cartData[itemId][size] = quantity;
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json ({success : true , message : 'panier modifié'})



        
    } catch (error) {
        console.log(error.message)
        res.json ({success : false , message : error.message})
        
    }

}

// get user cart data
const getUserCart = async (req,res) =>{
   try {
    const {userId} = req.body ;
    const userData = await userModel.findById(userId)
    const cartData = await  userData.cartData 
    res.json({success : true , cartData : userData.cartData })

    
   } catch (error) {
    console.log(error.message)
    res.json ({success : false , message : error.message})
    
   }

}

export {addToCart , updateCart , getUserCart}
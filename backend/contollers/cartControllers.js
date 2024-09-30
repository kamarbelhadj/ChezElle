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
// update cart
const updateCart = async (req, res) => {
    try {
      const { userId, itemId, size, quantity } = req.body;
  
      if (quantity === 0) {
        // Remove the specific size of the item from the cart
        await userModel.findByIdAndUpdate(
          userId,
          { $unset: { [`cartData.${itemId}.${size}`]: "" } }
        );
  
        // Fetch updated user data
        const userData = await userModel.findById(userId);
  
        // Check if the item still has sizes
        if (!userData.cartData[itemId] || Object.keys(userData.cartData[itemId]).length === 0) {
          // If no sizes remain, remove the entire item
          await userModel.findByIdAndUpdate(
            userId,
            { $unset: { [`cartData.${itemId}`]: "" } }
          );
        }
  
      } else {
        // If quantity is not zero, update the item quantity for the specific size
        await userModel.findByIdAndUpdate(
          userId,
          { $set: { [`cartData.${itemId}.${size}`]: quantity } }
        );
      }
  
      res.json({ success: true, message: 'Panier modifié' });
  
    } catch (error) {
      console.log(error.message);
      res.json({ success: false, message: error.message });
    }
  };
  

// get user cart data
const getUserCart = async (req,res) =>{
   try {
    const {userId} = req.body ;
    const userData = await userModel.findById(userId)
    res.json({success : true , cartData : userData.cartData })
   } catch (error) {
    console.log(error.message)
    res.json ({success : false , message : error.message})
    
   }

}

export {addToCart , updateCart , getUserCart}
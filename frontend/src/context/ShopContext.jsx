import { createContext, useState ,useEffect} from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate  } from 'react-router-dom';

export const ShopContext = createContext();
const ShopContextProvider = (props) =>{
    const currency = 'TND';
    const delivery_fee=10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState({});
    const navigate = useNavigate();
   
    


const addToCart = async(itemId,size)=>{
    
    if (!size){
        toast.error('Select Product Size')
        return

    }
    let cartData = structuredClone(cartItems);
    if ( cartData[itemId]){
        if ( cartData[itemId][size]){
            cartData[itemId][size]+=1;

        }else{
            cartData[itemId][size]=1;
        }
    }else{
        cartData[itemId]={}
        cartData[itemId][size]=1

    }
   
   

    setCartItems(cartData);
}
const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
    
        for (const size in cartItems[itemId]) {
            try {
                if (cartItems[itemId][size] > 0) {
                    totalCount += cartItems[itemId][size];
                }
            } catch (error) {
                console.error(error); 
        }
    }
}
    
    return totalCount;
};
const updateQuantity = async (itemId,size,quantity)=>{
    let cartData= structuredClone(cartItems);
    cartData[itemId][size]=quantity;
    setCartItems(cartData);

}
const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
        const itemInfo = products.find((product) => product._id === itemId);
        if (itemInfo) {
            for (const size in cartItems[itemId]) {
                const quantity = cartItems[itemId][size];
                if (quantity > 0) {
                    totalAmount += itemInfo.price * quantity; 
                }
            }
        }
    }

    return totalAmount;
};



    
    const value = {
        products , currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,setCartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate
    }

    return (
        <ShopContext.Provider value = {value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider ;
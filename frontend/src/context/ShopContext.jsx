import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
const ShopContextProvider = (props) =>{
    const currency = 'TND';
    const delivery_fee=10;
    const [search,setasaerach]=useState('');
    const [showSearch,setShowSearch]=useState(true);



    
    const value = {
        products , currency,delivery_fee,search,setasaerach,showSearch,setShowSearch
    }

    return (
        <ShopContext.Provider value = {value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider ;

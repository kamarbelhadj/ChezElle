import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotale = () => {
    const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'TOTAL '} text2={'DU PANIER'}/>
            <div className='flex flex-col gap-2 m--2 text-sm'>
                <div className='flex justify-between'>
                    <p>Sous-total</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Frais d'expédition</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {getCartAmount()===0? 0 : getCartAmount()+delivery_fee}.00 </b>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default CartTotale

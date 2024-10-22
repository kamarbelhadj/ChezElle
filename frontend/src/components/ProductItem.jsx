import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, images, name, price }) => {
  const { currency } = useContext(ShopContext);
  
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
        
        <img src={images[0]} className='hover:scale-110 transition ease-in-out object-cover h-72 min-w-[240px]  sm:min-w-[60px]'  alt="" /> 
        <p className='pt-3 pb-1 text-sm'>{name}</p>
       
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;

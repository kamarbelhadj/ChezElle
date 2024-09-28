import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, images, name, price }) => {
  const { currency } = useContext(ShopContext);
  
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
        {/* Corrected the hover scale effect */}
        <img src={images[0]} className='hover:scale-110 transition ease-in-out max-h-80 '  alt="" />
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        {/* Fixed the font-medium typo */}
        <p className='text-sm font-medium'>{currency}{price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;

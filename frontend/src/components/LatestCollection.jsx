import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProducts] = useState([]);

  useEffect(() => {
    // Corrected slice method
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'DERNIÈRE'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text_xs sm:text-sm md:text-base text-gray-600'>
        Découvrez notre dernière collection et rafraîchissez votre garde-robe avec les tendances de la saison !
        </p>
      </div>
      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              images={item.images}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [images, setImages] = useState("");
  const [size, setSize] = useState("");
  

  const fetchProductData = async () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      if (product.images && product.images.length > 0) {
        setImages(product.images[0]); 
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/*------------------Product Images-------------- */}
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.images.map((item, index) => (
              <img
                onClick={() => setImages(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product Image ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={images} className="w-full h-auto" alt="Product Preview" />
          </div>
        </div>

        {/*----------- Product Info ----------------- */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          {/* Product Rating */}
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p>(122)</p>
          </div>

          {/* Product Price */}
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          {/* Product Description */}
          <p className="mt-5 text-gray-500 w-4/5">{productData.description}</p>

          {/* Size Selection */}
          <div className="flex flex-col gap-4 my-8">
            <p>Sélectionner la taille</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  onClick={() => setSize(item)}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>


          <button
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
            onClick={() => addToCart(productData._id, size, )} 
          >
             AJOUTER AU PANIER
          </button>

          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Produit 100% original</p>
            <p>Le paiement à la livraison est disponible pour ce produit</p>
            <p>Politique de retour et d’échange facile</p>
          </div>
        </div>
      </div>

      {/*------------Related product-----------------*/}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products ,search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  const [Category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);
  const [sortType,setSorType]= useState('relavant')
  const toggleCategory=(e)=>{
    if(Category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item!==e.target.value))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }
  const toggleSubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item => item!==e.target.value))
    }else{
      setSubCategory(prev => [...prev,e.target.value])

    }

  }
  const applyFilter = () =>{
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy=productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(Category.length>0){
      productsCopy=productsCopy.filter(item => Category.includes(item.category));
    }
    if (subCategory.length>0){
      productsCopy=productsCopy.filter(item => subCategory.includes(item.subCategory))

    }
    setFilterProducts(productsCopy)
  }
  const sortProduct= () =>{
    let fpCopy=filterProducts.slice();
    switch(sortType){
      case 'low-high' : setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));break;
      case 'high-low' : setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));break;
      default : applyFilter(); break;
    }
   

  }
  useEffect(()=>{
    sortProduct();

  },[sortType])
 
  useEffect(()=>{
    applyFilter();

  },[Category,subCategory,search,showSearch,products])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-1 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
           FILTRES
        </p>
        <img 
          src={assets.dropdown_icon} 
          className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} 
          alt="Toggle Filter"
        />
        
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATÉGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Men' onChange={toggleCategory} /> Hommes
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Women' onChange={toggleCategory} /> Femme
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Kids' onChange={toggleCategory} /> Enfants
            </label>
          </div>
        </div>
        
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SOUS-CATÉGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Robes' onChange={toggleSubCategory} /> Robes
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Blazers' onChange={toggleSubCategory} /> Blazers
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Tshirts' onChange={toggleSubCategory} /> T-shirts
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Chemise' onChange={toggleSubCategory} /> Chemise
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Pantalons' onChange={toggleSubCategory} /> Pantalons
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Jeans' onChange={toggleSubCategory} /> Jeans
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Jupes' onChange={toggleSubCategory} /> Jupes
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Gilets' onChange={toggleSubCategory} /> Gilets
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Pull' onChange={toggleSubCategory} /> Pull
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Chaussures' onChange={toggleSubCategory} /> Chaussures
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Sac' /> Sac
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Accessoires' onChange={toggleSubCategory} /> Accessoires
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Ensembles' onChange={toggleSubCategory} /> Ensembles
            </label>
          </div>
        </div>

      </div>
      {/*Right Side*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1 ={"TOUTES"} text2={" LES COLLECTIONS"}></Title>
          {/*Product Sort*/}
          <select onChange={(e)=>setSorType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Trier par pertinent</option>
            <option value="low-high">Trier par : Faible à élevé</option>
            <option value="high-low">Trier par : élevé à Faible</option>
          </select>

        </div>
        {/*Map Product*/}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
        filterProducts.map((item,index)=>(
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
     

    </div>
  );
};

export default Collection;

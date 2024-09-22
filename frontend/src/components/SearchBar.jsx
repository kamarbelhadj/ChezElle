import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const SearchBar = () => {
    const {search , setSearch , showSearch , setShowSearch}= useContext(ShopContext);
  return  showSearch ?(
    <div className='border-t border-b bg-gray-50 text-center  px-5 py-2 my-2 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <div className='inline-flex items-center justify-center border-gray-400'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm '/>
        <img src={assets.search_icon} alt="" className='w-4' /></div>
        <img src={assets.cross_icon} alt=""  className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)}/>
      
    </div>
  ) : null
}

export default SearchBar

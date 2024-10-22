import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import {toast} from 'react-toastify'

const List = ({token}) => {
  const [list , setList] = useState([]);

  const fetchList = async () =>{
    try {
      const response = await axios.get(backendUrl + '/api/product/list',{headers:{token}})
      
      if(response.data.success){
       const sortedList = response.data.products.sort((a,b) => new Date(b.date) - new Date(a.date));
       setList(sortedList) ;
      }else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
      
    }

  }

  const removeProduct = async (id) =>{
    try {
      const response = await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}})
      if ( response.data.success){
        toast.success(response.data.message)
        await fetchList();

      }else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      console.log(error.message)
      toast.error(error.message)
      
    }

  }

  useEffect (()=>{
    fetchList();
  },[])
  return (
    <>
    <p className="mb-2  " >Liste de tous les produits : </p>
    <div className=' flex flex-col gap-2'>
      {/*----------lsit table title----------*/}
      <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 birder bg-gray-100 text-sm' >
        <b>Image</b>
        <b className='text-center'>Nom</b>
        <b className='text-center'>Catégorie</b>
        <b className='text-center'>Prix</b>
        <b className='text-center'>Action</b>
      </div>
      {/*---------- -----Product List---------*/}
      {
        list.map((item,index)=>(
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
            <img src={item.images[0]} alt="" />
            <p className='text-center' >{item.name}</p>
            <p className='text-center' >{item.category}</p>
            <p className='text-center' >{currency} {item.price}</p>
            <p className='text-right md:text-center cursor-pointer text-lg' onClick={()=>removeProduct(item._id)}>X</p>

          </div>
        ))
      }
    </div>
    </>
  )
}

export default List

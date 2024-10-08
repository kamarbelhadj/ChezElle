import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const SideBar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 text-[15px] pl-[20%]'>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 '  to ="/add">
            <img className='w-5 h-5 ' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Ajouter des articles</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 '  to ="/list">
            <img className='w-5 h-5 ' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Liste des items</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 '  to ="/orders">
            <img className='w-5 h-5 ' src={assets.order_icon} alt="" />
            <p className='hidden md:block'>Ordres</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default SideBar

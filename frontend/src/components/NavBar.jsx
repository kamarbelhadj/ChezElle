import React from 'react'
import {assets} from "../assets/assets"
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between py-5 font-medium'>
        <img src={assets.logo}  className='w-' alt=''/>
        <ul className='hidden sm:flex gap-5 tex-sm text-gray-700'>
          <NavLink className='flex flex-col items-center gap-1'>
            <p>Home</p>
            <hr className='<-2/4 border-none h-[1.5px] bg-gray-700' />
          </NavLink>
        </ul>
    </div>
  )
}

export default NavBar
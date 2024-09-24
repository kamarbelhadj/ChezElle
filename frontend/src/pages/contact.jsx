import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center  md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[450px]' alt="Contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54700 Willms Station <br /> Suite 350, Washington, USA</p> 
          <p className='text-gray-500'> tel : (216) 55024741 <br />chezelle @gmail.com</p>
          
        </div>
      </div>
    </div>
  )
}

export default Contact

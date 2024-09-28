import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACTEZ'} text2={'-NOUS'}/>
      </div>
      <div className='my-10 flex flex-col justify-center  md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[450px]' alt="Contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Notre boutique</p>
          <p className='text-gray-500'>Tunisie, Mahdia  <br /> Avenue Hedi Chekr, Ksour Essef</p> 
          <p className='text-gray-500'> tel : (216) 55024741 <br />chezelle @gmail.com</p>
          
        </div>
      </div>
    </div>
  )
}

export default Contact

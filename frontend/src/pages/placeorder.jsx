import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal'; // Fixed typo in import
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target; // Corrected 'targer' typo
    setFormData(data => ({ ...data, [name]: value }));
  };

  return (
    <form className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[88vh] border-t'>
      {/*------------Left Side---------------*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input
            onChange={onChangeHandler}
            name='firstName'
            value={formData.firstName}
            type="text"
            placeholder='First Name'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            required
          />
          <input
            onChange={onChangeHandler}
            name='lastName'
            value={formData.lastName}
            type="text"
            placeholder='Last Name'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            required
          />
        </div>

        <input
          onChange={onChangeHandler}
          name='email'
          value={formData.email}
          type="email"
          placeholder='Email Address'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          required
        />

        <input
          onChange={onChangeHandler}
          name='street'
          value={formData.street}
          type="text"
          placeholder='Street'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
        />

        <div className='flex gap-3'>
          <input
            onChange={onChangeHandler}
            name='city'
            value={formData.city}
            type="text"
            placeholder='City'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            required
          />
          <input
            onChange={onChangeHandler}
            name='state'
            value={formData.state}
            type="text"
            placeholder='State'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            required
          />
        </div>

        <div className='flex gap-3'>
          <input
            onChange={onChangeHandler}
            name='zipCode'
            value={formData.zipCode}
            type="number"
            placeholder='Postal Code'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            required
          />
          <input
            onChange={onChangeHandler}
            name='country'
            value={formData.country}
            type="text"
            placeholder='Country'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            required
          />
        </div>

        <input
          onChange={onChangeHandler}
          name='phone'
          value={formData.phone}
          type="number"
          placeholder='Phone'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          required
        />
      </div>

      {/*--------------Right Side-------------*/}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'MODE'} text2={'DE PAIEMENT'} />
          <div className='flex gap-3 flex-col sm:flex-row'>
            {/*-----Payment Method Selection----------*/}
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

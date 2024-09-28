
import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";


const Login = () => {
  const [currentState , setCurrentState]=useState('Sing Up');
  const [name,setName]=useState('');
  const [email , setEmail]=useState('');
  const [password,setPassword]=useState('')
  const {token,setToken ,backendUrl} = useContext(ShopContext)
  const onSubmitHandler = async (event)=>{
    event.preventDefault();
    try {
      console.log(backendUrl);
      
      if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
        console.log(response.data);
        

      }else{

      }
      
    } catch (error) {
      
    }

  }
  
  return (
    <form onSubmit={onSubmitHandler}   className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name}  type="text" className='w-full px-2 py-2 border border-gray-800' placeholder='name'  required/>}
      <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-2 py-2 border border-gray-800 ' placeholder='Email'  required/>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password}
      className='w-full px-2 py-2 border border-gray-800 ' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px'> 
        <p className='cursor-pointer'> Forget your password</p>
        {
          currentState === 'Login' 
          ? <p className='cursor-pointer' onClick={()=>setCurrentState('Sing Up')} >Create Account</p>
          : <p className='cursor-pointer' onClick={()=>setCurrentState('Login')} >Login In </p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'sing In' : 'sign Up '}</button>

    </form>


  )
}

export default Login

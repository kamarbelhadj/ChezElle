import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque numquam ad libero cum maxime quod iure voluptatibus molestiae! Suscipit minus, deleniti vel ex nisi consectetur cum rerum praesentium cumque.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente doloribus optio quis quia earum. Doloremque .</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus nobis dicta similique eos repellat molestias ab iure dignissimos vel laudantium animi autem quia nihil quos voluptatibus tempore, sit repellendus dolorum?</p>
        </div>
        
      </div>
      <div className='text-xl py-4'>
          <Title text1 ={'WHY'} text2={'CHOOSE US'}></Title>
        </div>
        <div className='flex flex-col md:flex-row text-sm min-h-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurence : </b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem placeat qui pariatur .</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b> Convienece : </b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, maiores cupiditate debitis commodi quasi maxime ut blanditiis ullam quis quas inventore magnam velit magni ea nam temporibus molestias perferendis labore.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b> Excpetional customer service : </b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem placeat qui pariatur .</p>
          </div>
        </div>
       
      
    </div>
  )
}

export default About

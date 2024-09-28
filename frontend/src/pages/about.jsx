import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'QUI'} text2={'SOMMES-NOUSS'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p> Votre destination mode dédiée à la femme moderne. ChezElle propose une sélection raffinée de vêtements qui allient style, élégance et confort pour sublimer votre personnalité au quotidien</p>
        <p> Que vous cherchiez des tenues chics pour une occasion spéciale ou des pièces tendance pour compléter votre garde-robe, ChezElle vous offre des collections inspirées des dernières tendances, soigneusement choisies pour répondre à vos envies</p>
        <b className='text-gray-800'>Notre mission</b>
        <p> Inspirer et valoriser la femme moderne en proposant des vêtements élégants, confortables et accessibles, qui reflètent sa personnalité et son style unique. Nous nous engageons à offrir une mode tendance tout en promouvant la qualité et l'authenticité.</p>
        </div>
        
      </div>
      
      
    </div>
  )
}

export default About

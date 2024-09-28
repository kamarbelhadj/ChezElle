import React from 'react'
import { assets } from '../assets/assets'

const Fouter = () => {
  return (
    <div >
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600 '>ChezElle – Votre boutique mode dédiée à la femme moderne. Découvrez des collections élégantes et tendances, soigneusement sélectionnées pour sublimer chaque moment de votre vie. ChezElle, où chaque femme trouve son style.</p>
            </div>
            <div>
                <p className='text-xl font-medium  mb-5'>COMPAGNIE</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Accuiel</li>
                    <li>Qui sommes-nous</li>
                    <li>Livraison</li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'> CONTACTEZ-NOUS</p>
                    <ul  className='flex flex-col gap-1 text-gray-600'>
                        <li>+216 550024741</li>
                        <li>chezelle@gmail.com</li>
                    </ul>
               
            </div>
            
        </div>
        <div>
                <hr />
                <p className='py-5 text-sm text-center'> Copyrights 2024@ chezelle.com -  Tous droits réservés </p>
            </div>
      
    </div>
  )
}

export default Fouter

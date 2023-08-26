import React from 'react'
import { star } from '../assets/icons'

const ProductCard = ({shoes}) => {
  return (
    <div className='flex flex-col justify-center items-start'>
        <img src={shoes.imgURL} width={200} height={200} className='object-contain'/>

        <div className='flex gap-x-2 mt-2 mb-1'>
            <img src={star} width={20} height={20} alt='Star Rating'/>
            <span>(4.5)</span>
        </div>

        <p className='font-semibold text-lg mt-2'>{shoes.name}</p>

        <p className='text-coral-red text-lg mt-3 mb-2'>{shoes.price}</p>
    </div>
  )
}

export default ProductCard
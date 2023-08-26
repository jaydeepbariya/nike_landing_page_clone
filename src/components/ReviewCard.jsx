import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({review}) => {
  return (
    <div className='max-w-[400px] flex flex-col justify-center items-center gap-5'>
      <img src={review.imgURL} width={100} height={100} alt='customer image' className='rounded-full'/>
      <p className='text-center'>{review.feedback}</p>
      <div className='flex gap-x-3'>
        <img src={star} width={20} height={20} alt="star" />
        <p>( {review.rating} )</p>
      </div>
      <p className='text-center font-semibold my-3'>{review.customerName}</p>
    </div>
  )
}

export default ReviewCard
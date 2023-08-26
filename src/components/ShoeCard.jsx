import React from 'react'

const ShoeCard = ({imageUrl, changeBigShoeImage, bigShoeImage}) => {


  return (
    <div className={`border-2 border-coral-red rounded-xl`}>
        <div>
            <img src={imageUrl.thumbnail} alt='shoe collection' width={130} height={100} className='object-contain'/>
        </div>
    </div>
  )
}

export default ShoeCard
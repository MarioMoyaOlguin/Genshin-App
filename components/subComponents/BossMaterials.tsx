import React from 'react'
import { urlString } from '../../pages/details'

interface BossData {
    image:string,
    material:string,
    name:string,
    quantity:string
}

const BossMaterials = ( {image, material, name, quantity}:BossData ) => {

  return (

    <div className='flex flex-col items-center justify-center p-2 serif-pro w-fit rounded bg-gray-100 '>
        <div className='flex'>
            <div className='w-24 h-24'>
                <img src={image} alt='boss' className='w-auto h-24 ' />
            </div>
            <div className='relative flex items-center ml-4'>
                <img src={material} alt='material' className='w-16 h-16 ' />
                <span className='label text-xl leading-[1.1] absolute bottom-1 right-0'>x{quantity}</span>
            </div>
        </div>
        <div className='mt-1'>
            <p className='text-center text-2xl'>{name}</p>
        </div>
    </div>
  )
}

export default BossMaterials
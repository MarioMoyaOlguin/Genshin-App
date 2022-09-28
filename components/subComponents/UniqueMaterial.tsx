import React from 'react'

interface UniqueMaterial {
  image:string;
  name:string
}


const UniqueMaterial = ( {image, name}:UniqueMaterial ) => {


  return (

    <div className='serif-pro flex flex-col justify-center items-center rounded bg-gray-100 p-2'>
        <div className='w-20 h-20 relative'>
          <img src={image} alt={name} className='w-auto h-20 ' />
          <span className='label text-xl leading-[1.1] absolute bottom-1 right-1'>x168</span>
        </div>
        <p className='mt-2 text-2xl '>{name}</p>
    </div>
  )
}

export default UniqueMaterial
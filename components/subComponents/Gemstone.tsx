import React from 'react'
import { urlString } from '../../pages/details'

interface GemData {
    sliver:string,
    fragment:string,
    chunk:string,
    gem:string
}


const Gemstone = ( {sliver, fragment, chunk, gem}:GemData ) => {

  return (

    <div className='flex flex-col w-fit p-2 text-xl serif-pro bg-orange-50 rounded'>
        <div className='flex justify-center items-center'>
            <img src={sliver} alt='sliver' className='h-8 object-contain' />
            <span className='ml-2 label'>x1</span>
        </div>

        <div className='flex justify-center items-center my-2'>
            <img src={fragment} alt='fragment' className='h-8 object-contain' />
            <span className='ml-2 label'>x9</span>
        </div>

        <div className='flex justify-center items-center'>
            <img src={chunk} alt='chunk' className='h-8 object-contain' />
            <span className='ml-2 label'>x9</span>
        </div>

        <div className='flex justify-center items-center mt-2'>
            <img src={gem} alt='gem' className='h-8 object-contain' />
            <span className='ml-2 label'>x6</span>
        </div>
    </div>
  )
}

export default Gemstone
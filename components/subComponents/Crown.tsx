import React from 'react'


const Crown = () => {

  return (

    <div className='p-2 rounded bg-gray-100 serif-pro flex flex-col justify-center items-center'>
        <div className='w-24 h-24 relative'>
            <img src='https://drive.google.com/uc?id=16OzIOwN9ytn6OqwnOy-juoZGH716TgHS' alt='Crown of Insight' className="h-24 object-contain" />
            <span className='label absolute bottom-0 right-1 text-xl'>x3</span>
        </div>
        <div className='text-center text-2xl leading-6'>
          <p>Crown</p>
          <p>of</p>
          <p>Insight</p>
        </div>
    </div>
  )
}

export default Crown
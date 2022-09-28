import React from 'react'
import {Chars} from '../../data/characters'


export interface CharacterData {
  data:Chars
}

const EnemieMaterials = (character:CharacterData) => {

  const char = {...character.data}

  return (

    <div className='p-2 serif-pro rounded bg-gray-100 flex flex-col justify-center items-center'>
        {/* images */}
        <div className='flex flex-col items-center'>
          <div className='relative w-16 h-10'>
            <img src={char.ascensionMat1Url} alt={char.ascensionMat1} className='h-10 object-contain' />
            <span className='ml-2 label absolute bottom-0 right-0'>x18</span>
          </div>
          <div className='flex gap-2'>
            <div className='relative w-16 h-10'>
              <img src={char.ascensionMat2Url} alt={char.ascensionMat1} className='h-10 object-contain' />
              <span className='ml-2 label absolute bottom-0 right-0'>x30</span>
            </div>
            <div className='relative w-16 h-10'>
              <img src={char.ascensionMat3Url} alt={char.ascensionMat1} className='h-10 object-contain' />
              <span className='ml-2 label absolute bottom-0 right-0'>x36</span>
            </div>
          </div>
        </div>

        {/* Titles */}
        <div className='flex flex-col justify-center items-center leading-5 mt-2'>
          <span className=''>{char.ascensionMat1}</span>
          <span className=''>{char.ascensionMat2}</span>
          <span className=''>{char.ascensionMat3}</span>
        </div>
    </div>
  )
}

export default EnemieMaterials
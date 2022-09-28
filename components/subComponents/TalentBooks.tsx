import React from 'react'
import {Chars} from '../../data/characters'


export interface CharacterData {
  data:Chars
}

const TalentBooks = ( character:CharacterData ) => {

    const char = {...character.data}

  return (

    <div className='p-2 serif-pro rounded bg-gray-100 flex flex-col justify-center items-center'>

        <div className='flex gap-1'>
            <div className='relative w-14 h-11'>
                <img src={char.talentBook1Url} alt={char.talentBook1} className="h-11 object-contain" />
                <span className='ml-2 label absolute bottom-0 right-0'>x9</span>
            </div>
            <div className='relative w-14 h-11'>
                <img src={char.talentBook2Url} alt={char.talentBook2} className="h-11 object-contain" />
                <span className='ml-2 label absolute bottom-0 right-0'>x63</span>
            </div>
            <div className='relative w-14 h-11'>
                <img src={char.talentBook3Url} alt={char.talentBook3} className="h-11 object-contain" />
                <span className='ml-2 label absolute bottom-0 right-0'>x114</span>
            </div>
            
        </div>

        <div className='text-center mt-4 leading-5'>
          <p>{char.talentBook1}</p>
          <p>{char.talentBook2}</p>
          <p>{char.talentBook3}</p>
        </div>
    </div>
  )
}

export default TalentBooks
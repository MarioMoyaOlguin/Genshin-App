import Image from 'next/image';
import React from 'react'
import { Chars } from "../data/characters";


interface Character {
    character:Chars
}

const Card = ( character:Character) => {
    
    const {character: char} = character

  return (
    
    
    <div className={`relative flex w-fit h-fit justify-center items-center transition-all `
    + (char.status === 'pending' && 'pointer-events-none ') }>

        <div className='flex justify-center items-center transition-all'>
            {/* Blured bg */}
            {
                (char.status === 'complete') && <div className={`absolute w-[240px] h-[322px] rounded animate-bg animate-moving-bg bg-blur `
                + (char.rarity === '4-stars' ? 'border-4s' : 'border-5s') }>
                </div>
            }
            
            {/* Card outline */}
            <div className={`absolute w-[242px] h-[324px] rounded-md animate-bg animate-moving-bg `
            + (char.rarity === '4-stars' ? 'border-4s' : 'border-5s') }>
            </div>

            {/* Card */}
            <div className={`flex bg-white rounded w-[238px] h-[320px] overflow-hidden `
            + (char.status === 'complete' ? ' hover:cursor-pointer' : 'grayscale-[.8]') }>
                <div className={`relative w-32 bg-4stars z-10 animate-bg animate-moving-bg ` + (char.rarity === '4-stars' ? 'bg-animated-4s' : 'bg-animated-5s')}>
                    <Image
                        src={char.characterImage}
                        layout="fill"
                        objectFit='cover'
                    />

                    
                    <div className='absolute w-10 h-10 bg-black/50 rounded-full top-0 bottom-0 left-0 right-0'>
                        <Image
                            src={char.elementUrl}
                            layout="fill"
                            objectFit='cover'
                            className='scale-[.85]'
                        />
                    </div>

                    <div className='absolute w-full h-6 bg-black/50 bottom-0'>
                        <Image
                            src={char.rarityUrl}
                            layout="fill"
                            objectFit='contain'
                            className=''
                        />
                    </div>
                </div>
                <div className='p-2 z-10 w-[110px] flex flex-col justify-center bg-white serif-pro'>
                    <p className='text-center italic '>Name:</p>
                    <p className='text-center font-semibold text-xl pb-4'>{char.id}</p>
                    <p className='text-center italic '>Element:</p>
                    <p className='text-center font-semibold text-xl pb-4'>{char.element}</p>
                    <p className='text-center italic '>Weapon:</p>
                    <p className='text-center font-semibold text-xl pb-4'>{char.weapon}</p>
                    <p className='text-center italic '>Region:</p>
                    <p className='text-center font-semibold text-xl'>{char.region}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import BossMaterials from '../components/subComponents/BossMaterials';
import Gemstone from '../components/subComponents/Gemstone';
import characters from '../data/characters'

export const urlString = (text:string) => text.replaceAll(' ', '_').toLowerCase();

const details = () => {

    const data = {...characters[0]}
    
    console.log(urlString(data.ascensionBoss));

    return (

        <div className='bg-slate-900'>
            <Navbar />

            <div className="mt-11 px-5 py-10 ">

                <div className={`relative flex flex-col  after:w-[calc(100%+2px)] before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:absolute before:animate-bg
                before:animate-moving-bg z-10 before:z-0 after:-z-10 w-full before:-translate-y-px before:-translate-x-px before:rounded
                after:h-[calc(100%+2px)] after:absolute after:animate-bg after:animate-moving-bg after:bg-blur `
                + (data.rarity === '4-stars' ? 'before:border-4s after:border-4s' : 'before:border-5s after:border-5s') }>
                    <div className={`w-full h-64 animate-bg animate-moving-bg overflow-hidden rounded-tl rounded-tr `
                    + (data.rarity === '4-stars' ? 'bg-animated-4s ' : 'bg-animated-5s ')}>
                        <div className='relative w-full h-[500px] bg-white'>
                            <Image
                                src={`/assets/characters/background/bg-${data?.id}.png`}
                                layout='fill'
                                objectFit='cover'
                                className=''
                            />
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 z-10 border-t-4 border-orange-600 rounded-br rounded-bl">
                        <div className=''>
                            <div className='text-center font-medium serif-pro text-orange-700 bg-orange-200 min'>
                                <p className=''>ASCENSIONS LvL. 1 - 90</p>
                            </div>
                            <div className='flex gap-2 justify-center p-3'>
                                <Gemstone
                                    sliver={data.ascensionGem1}
                                    fragment={data.ascensionGem2}
                                    chunk={data.ascensionGem3}
                                    gem={data.ascensionGem4}
                                />

                                <BossMaterials
                                    image={data.ascensionBossUrl}
                                    material={data.ascensionMatBoss}
                                    name={data.ascensionBoss}
                                    quantity='x18'
                                />

                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default details
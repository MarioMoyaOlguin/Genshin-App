import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BossMaterials from "../components/subComponents/BossMaterials";
import Crown from "../components/subComponents/Crown";
import EnemieMaterials from "../components/subComponents/EnemieMaterials";
import Gemstone from "../components/subComponents/Gemstone";
import TalentBooks from "../components/subComponents/TalentBooks";
import UniqueMaterial from "../components/subComponents/UniqueMaterial";
import characters, { loader } from "../data/characters";


export const urlString = (text:string) => text.replaceAll(' ', '_').toLowerCase();

const characterDetails = () => {

    const [loading, setLoading] = useState(true)
    const [character, setCharacter]=useState(loader)

    const router = useRouter()

    useEffect(() => {
      
        if(router.isReady) {
            const name = router.query.slug
            const data = characters.filter( elem => elem.id === name);
            const character = {...data[0]}
            setCharacter(character)
        }

        setLoading(false)

      return () => {
        setLoading(true)
      }
    }, [router.isReady])
    

  return (
    <div className="bg-slate-900 relative">

        <Navbar />

        {(loading)
            ? <>
                <div className="w-screen h-screen flex justify-center items-center spartan text-center">
                    <div className="w-10 h-10 relative">
                        <Image
                            src='https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO'
                            layout='fill'
                            objectFit='cover'
                            className=''
                        />
                    </div>
                </div>
            </>

            : <>
            <div className="mt-11 px-5 py-10 sm:px-14">

                <div className={`relative w-fit h-fit flex flex-col after:w-[calc(100%+2px)] before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:absolute before:animate-bg
                before:animate-moving-bg z-10 before:z-0 after:-z-10 before:-translate-y-px before:-translate-x-px before:rounded
                after:h-[calc(100%+2px)] after:absolute after:animate-bg after:animate-moving-bg after:bg-blur det:flex-row mx-auto `
                + (character.rarity === '4-stars' ? 'before:border-4s after:border-4s' : 'before:border-5s after:border-5s') }>

                    {/* Image */}
                    <div className={`w-full h-64 animate-bg animate-moving-bg overflow-hidden rounded-tl rounded-tr det:w-64 det:h-[494px]
                    flex justify-center relative det:rounded-tr-none `
                    + (character.rarity === '4-stars' ? 'bg-animated-4s ' : 'bg-animated-5s ')}>

                        <div className={`w-full h-full animate-bg animate-moving-bg `
                        + (character.rarity === '4-stars' ? 'bg-animated-4s ' : 'bg-animated-5s ')}>
                            <div className='absolute w-12 h-12 bg-black/50 rounded-full top-1 left-1 z-10'>
                                <Image
                                    src={character.elementUrl}
                                    layout="fill"
                                    objectFit='cover'
                                    className='scale-[.85]'
                                />
                            </div>
                            <div className='absolute w-full h-10 bg-black/50 bottom-0 right-0 z-10 flex justify-center items-center det:rounded-bl'>
                                <span className="text-white text-2xl mr-2 serif-pro">{character.id}</span>
                                <div className="relative h-full w-24">
                                    <Image
                                        src={character.rarityUrl}
                                        layout="fill"
                                        objectFit='contain'
                                        className=''
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={`absolute w-full h-[450px] animate-bg animate-moving-bg det:w-64 det:h-[474px] max-w-[450px] overflow-visible `
                        + (character.rarity === '4-stars' ? ' ' : ' ') }>
                            <Image
                                src={character.backgroundImage}
                                layout='fill'
                                objectFit='cover'
                                className=''
                            />
                        </div>
                    </div>

                    {/* Acensions & talents */}
                    <div className="bg-white text-slate-900 z-10 border-t-4 border-orange-600 rounded-br rounded-bl w-fit h-fit
                    det:border-t-0 det:border-l-4 pb-3 det:rounded-tr det:rounded-bl-none">

                        {/* Ascensions */}
                        <div className=''>
                            <div className='text-center font-medium serif-pro text-orange-700 py-1 mx-3 border-b border-orange-600 '>
                                <p className='text-2xl'>ASCENSIONS LvL. 1 - 90</p>
                            </div>
                            <div className='flex gap-2 justify-center p-3 mx-3 flex-wrap '>
                                <Gemstone
                                    sliver={character.ascensionGem1}
                                    fragment={character.ascensionGem2}
                                    chunk={character.ascensionGem3}
                                    gem={character.ascensionGem4}
                                />

                                <BossMaterials
                                    image={character.ascensionBossUrl}
                                    material={character.ascensionMatBoss}
                                    name={character.ascensionBoss}
                                    quantity='46'
                                />

                                <UniqueMaterial
                                    image={character.ascensionMatUniqueUrl}
                                    name={character.ascensionMatUnique}
                                />

                                <EnemieMaterials
                                    data={character}
                                />
                            </div>
                        </div>

                        {/* Talents */}
                        <div className='text-center font-medium serif-pro text-orange-700 py-1 mx-3 border-b border-orange-600 '>
                            <p className='text-2xl'>TALENTS LvL. 1 - 10</p>
                        </div>
                        <div className="flex gap-2 justify-center p-3 mx-3 flex-wrap ">
                            <BossMaterials
                                image={character.talentBossUrl}
                                material={character.talentMatUnique}
                                name={character.talentBoss}
                                quantity='18'
                            />

                            <EnemieMaterials
                                data={character}
                            />

                            <TalentBooks
                                data={character}
                            />

                            <Crown />

                        </div>

                    </div>
                </div>
            </div>

            <div className="fixed bottom-1 right-1 w-12 h-12 bg-orange-600 rounded-full shadow-sm z-20 flex justify-center items-center hover:cursor-pointer"
            onClick={() => router.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6"
                onClick={() => router.back()}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </div>
            </>
        }
                
        
    </div>
  )
}

export default characterDetails
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import BossMaterials from "../../components/subComponents/BossMaterials";
import Gemstone from "../../components/subComponents/Gemstone";
import characters from "../../data/characters";


export const urlString = (text:string) => text.replaceAll(' ', '_').toLowerCase();

const characterDetails = () => {

    const router = useRouter()
    const name = router.query.slug
    
    const data = characters.filter( elem => elem.id === name);
    const character = {...data[0]}
    
    console.log(character.characterImage)

  return (
    <div className="bg-slate-900">

      <Navbar />
      
      <div className="mt-11 px-5 py-10 ">

          <div className={`relative flex flex-col  after:w-[calc(100%+2px)] before:w-[calc(100%+2px)] before:h-[calc(100%+2px)] before:absolute before:animate-bg
          before:animate-moving-bg z-10 before:z-0 after:-z-10 w-full before:-translate-y-px before:-translate-x-px before:rounded
          after:h-[calc(100%+2px)] after:absolute after:animate-bg after:animate-moving-bg after:bg-blur `
          + (character.rarity === '4-stars' ? 'before:border-4s after:border-4s' : 'before:border-5s after:border-5s') }>
              <div className={`w-full h-64 animate-bg animate-moving-bg overflow-hidden rounded-tl rounded-tr `
              + (character.rarity === '4-stars' ? 'bg-animated-4s ' : 'bg-animated-5s ')}>
                  <div className={`relative w-full h-[450px] animate-bg animate-moving-bg `
                  + (character.rarity === '4-stars' ? 'bg-animated-4s ' : 'bg-animated-5s ') }>
                      <Image
                          src={character.backgroundImage}
                          layout='fill'
                          objectFit='cover'
                          className=''
                      />
                  </div>
              </div>

              <div className="bg-white text-slate-900 z-10 border-t-4 border-orange-600 rounded-br rounded-bl">
                  <div className=''>
                      <div className='text-center font-medium serif-pro text-orange-700 py-1 '>
                          <p className='text-2xl'>ASCENSIONS LvL. 1 - 90</p>
                      </div>
                      <div className='flex gap-2 justify-center p-3'>
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
                          />

                          
                      </div>
                  </div>
              </div>
          </div>

      </div>
        
    </div>
  )
}

export default characterDetails
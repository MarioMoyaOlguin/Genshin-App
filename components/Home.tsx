import Image from 'next/image';
import a from 'next/link';
import React, { useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { GeneralContext } from '../context/appContext';
import ElementsGrid from './ElementsGrid';
import SearchBar from './SearchBar';
import Card from './Card';
import ItemsSlider from "./Slider";


const Home = () => {

    const { charactersArr } = useContext(GeneralContext);

  return (

    <>
    <SearchBar />

    <ElementsGrid />
    
    {/* Cards grid */}
    <motion.div layout className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] justify-items-center gap-y-20 pt-10 pb-96'>
        <AnimatePresence>
            {
            charactersArr.map( character => {
                return (
                    <a href={`/${character.id}`} key={character.id}
                    className={'transition-all ' + (character.status === 'complete' ? 'hover:scale-105 ' : '')}>
                        <motion.div
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                        >
                            <Card character={ character } />
                        </motion.div>
                    </a>
                )
            })
            }
        </AnimatePresence>
    </motion.div>
    </>

  )
}

export default Home
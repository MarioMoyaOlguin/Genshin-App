import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { GeneralContext } from '../context/appContext';
import ElementsGrid from './ElementsGrid';
import SearchBar from './SearchBar';
import Card from './Card';
import ItemsSlider from "./Slider";
import characters from '../data/characters';



const Home = () => {

    const { charactersArr } = useContext(GeneralContext);

  return (

    <>
    <SearchBar />

    <ElementsGrid />
    
    {/* Cards grid */}
    <motion.div layout className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] justify-items-center gap-y-20 py-10'>
        <AnimatePresence>
            {
            charactersArr.map( character => {
                return <Link href={`/${character.id}`} key={character.id} >
                    <motion.div
                        layout
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <Card character={ character } />
                    </motion.div>
                </Link>
            })
            }
        </AnimatePresence>
    </motion.div>
    </>

  )
}

export default Home
import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import ElementsFilter from '../components/ElementsFilter'
import CharacterCard from '../components/CharacterCard'


const Home: NextPage = () => {



  return (

    <div className="bg-slate-900 antialiased">
      <Head>
        <title>Genshin App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />

        <CharacterCard />
        
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}

export default Home

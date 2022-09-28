import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Home from '../components/Home'


const App: NextPage = () => {

  

  return (

    <div className="bg-slate-900 antialiased">
      <Head>
        <title>Genshin App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Navbar />

        <Home />
        
      </main>

      <footer className="">
        
      </footer>
    </div>
  )
}

export default App

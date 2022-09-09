import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 bg-black/90 w-full text-white serif-pro flex px-4 py-2 z-40 backdrop-blur'>
        <Link href="details" >
            <span className='text-xl mr-8 hover:cursor-pointer'>Genshin App</span>
        </Link>

        
        
    </nav>
  )
}

export default Navbar
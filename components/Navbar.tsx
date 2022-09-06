import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black w-full text-white serif-pro flex px-4 py-2'>
        <Link href="/" >
            <span className='text-xl mr-8'>Genshin App</span>
        </Link>

        
        
    </nav>
  )
}

export default Navbar
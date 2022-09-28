import React, { useContext } from 'react'
import { GeneralContext } from '../context/appContext'


const SearchBar = () => {

    const { text, search, inputChange, enter } = useContext(GeneralContext)
    console.log()

  return (

    <div className='px-2 mb-4 max-w-[396px] mx-auto text-slate-200 serif-pro font-light pt-[60px]'>
        <div className='flex '>
            <div className='w-14 h-10 group bg-[#394562] hover:bg-[#4F6089] flex justify-center items-center text-slate-300
            hover:text-orange-500 transition-all'
            onClick={search}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-6 h-6 group-hover:scale-105 group-active:scale-95 "
                onClick={search}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <input type="text" placeholder='Search...'
                className='h-10 w-full bg-[#394562] appearance-none outline-none pl-2 placeholder:text-slate-300 placeholder:spartan'
                name='searchText' autoComplete='off' onChange={inputChange} value={text} onKeyUp={enter}
            />
        </div>
        <div className='w-full h-px animate-bg bg-animated animate-moving-bg'></div>
    </div>
  )
}

export default SearchBar
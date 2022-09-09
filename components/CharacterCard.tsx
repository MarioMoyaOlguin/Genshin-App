import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import characters, { Chars, elements } from '../data/characters';
import { getCharactersByStuff } from '../hooks/useFilter';



const CharacterCard = () => {

    const sortCharacters = characters.sort( (a, b) => {
        if (a.id > b.id) { return 1 }
        return -1
    })
    const sortElements = elements.sort( (a, b) => {
        if (a.id > b.id) { return 1 }
        return -1
    })
    
    const [active, setActive] = useState([...sortElements]);
    const [filter, setFilter] = useState([...sortCharacters]);
    const [searchText, setSearchText] = useState('')

    const handleFilter = (e:React.MouseEvent<HTMLElement>) => {
        // Elements array, swap active state on-click
        const newActive = active.map( (item) => {
            if(item.id === e.currentTarget.id) {
                return {
                    ...item,
                    active: !item.active
                }
            } else {
                return { ...item }
            }
        })
        // Filters and sorts characters array based on new array of active elements
        const filteredCharacters = newActive.map( elem => {
            if(elem.active) {
                let array = characters.filter( char => {
                    if(char.element === elem.id) return char
                })
                return array;
            }
            return
        }).flat().sort( (a, b) => {
            if (a!.id > b!.id) { return 1 }
            return -1
        });
        // Remove undefined entries on filteredCharacters
        const cleanFilteredCharacters = filteredCharacters.filter( elem => {
            if(elem?.id !== undefined) return elem
        })
        // Set filtered characters
        if(cleanFilteredCharacters.length > 0) {
            // @ts-ignore: Unreachable code error
            setFilter([...cleanFilteredCharacters])
        }
        else { setFilter([...characters]) }

        setActive(newActive);
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value);
    }

    const handleEnter = (e:React.KeyboardEvent) => {
        if(e.code === 'Enter') {
            handleSearch();
        }
    }

    const handleSearch = () => {
        const searchResult = getCharactersByStuff(searchText);
        setActive([...sortElements]);
        // @ts-ignore: Unreachable code error
        setFilter(searchResult.baseArr);
        // @ts-ignore: Unreachable code error
        setSearchText(searchResult.searchBoxValue)
    }


  return (

    <>
    {/* Search bar */}
    <div className='px-2 mb-4 max-w-[396px] mx-auto text-slate-200 serif-pro font-light pt-[60px]'>
        <div className='flex '>
            <div className='w-14 h-10 group bg-[#394562] hover:bg-[#4F6089] flex justify-center items-center text-slate-300
            hover:text-orange-500 transition-all'
            onClick={handleSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-6 h-6 group-hover:scale-105 group-active:scale-95 "
                onClick={handleSearch}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <input type="text" placeholder='Search...'
                className='h-10 w-full bg-[#394562] appearance-none outline-none pl-2 placeholder:text-slate-300 placeholder:spartan'
                name='searchText' autoComplete='off' onChange={handleInputChange} value={searchText} onKeyUp={handleEnter}
            />
        </div>
        <div className='w-full h-px animate-bg bg-animated animate-moving-bg'></div>
    </div>


    {/* Elements grid */}
    <div className='grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-items-center mx-auto gap-1 max-w-[396px] px-2'>
        {
            active.map( item => {
                return <div className={`w-[60px] h-[60px] group bg-no-repeat text-white transition-all hover:bg-white/30 ease-in-out p-1 `
                + (item.active ? 'bg-outline-b' : 'bg-transparent') }
                onClick={handleFilter}
                id={item.id}
                key={item.id}
                >
                    <div className='relative h-8 w-8 mx-auto'>
                        <Image
                            src={item.url}
                            layout='fill'
                            objectFit='cover'
                            className={'transition-all ease-in-out group-hover:grayscale-0 ' + (item.active ? '' : 'grayscale')}
                        />
                    </div>
                    <p className='text-center text-sm first-letter:uppercase sourceSerif leading-5 font-light'>{item.id}</p>
                </div>
            })
        }
    </div>
    
    {/* Cards grid */}
    <div className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] justify-items-center gap-y-20 py-10'>
    {
    filter.map( character => {
        return <Link href={`/characters/${character.id}`} key={character.id} >
            <a className={`relative flex w-fit h-fit justify-center items-center transition-all `
            + (character.status === 'pending' && 'grayscale-[.7] pointer-events-none')}>
                <div className='flex justify-center items-center transition-all hover:scale-[1.02]'>
                    {/* Blured bg */}
                    <div className={`absolute w-[240px] h-[322px] rounded animate-bg animate-moving-bg bg-blur `
                    + (character.rarity === '4-stars' ? 'border-4s' : 'border-5s') }>
                    </div>

                    {/* Card outline */}
                    <div className={`absolute w-[242px] h-[324px] rounded-md animate-bg animate-moving-bg `
                    + (character.rarity === '4-stars' ? 'border-4s' : 'border-5s') }>
                    </div>

                    {/* Card */}
                    <div className={`flex bg-white rounded w-[238px] h-[320px] overflow-hidden `
                    + (character.status === 'complete' && 'hover:cursor-pointer') }>
                        <div className={`relative w-32 bg-4stars z-10 animate-bg animate-moving-bg ` + (character.rarity === '4-stars' ? 'bg-animated-4s' : 'bg-animated-5s')}>
                            <Image
                                src={character.characterImage}
                                layout="fill"
                                objectFit='cover'
                            />

                            
                            <div className='absolute w-10 h-10 bg-black/50 rounded-full top-0 bottom-0 left-0 right-0'>
                                <Image
                                    src={character.elementUrl}
                                    layout="fill"
                                    objectFit='cover'
                                    className='scale-[.85]'
                                />
                            </div>

                            <div className='absolute w-full h-6 bg-black/50 bottom-0'>
                                <Image
                                    src={character.rarityUrl}
                                    layout="fill"
                                    objectFit='contain'
                                    className=''
                                />
                            </div>
                        </div>
                        <div className='p-2 z-10 w-[110px] flex flex-col justify-center bg-white serif-pro'>
                            <p className='text-center italic '>Name:</p>
                            <p className='text-center font-semibold text-xl pb-4'>{character.id}</p>
                            <p className='text-center italic '>Element:</p>
                            <p className='text-center font-semibold text-xl pb-4'>{character.element}</p>
                            <p className='text-center italic '>Weapon:</p>
                            <p className='text-center font-semibold text-xl pb-4'>{character.weapon}</p>
                            <p className='text-center italic '>Region:</p>
                            <p className='text-center font-semibold text-xl'>{character.region}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    })
    }
    </div>
    </>

  )
}

export default CharacterCard
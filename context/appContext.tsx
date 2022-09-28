import React, { createContext, useState } from 'react'
import characters, { elements } from '../data/characters'
import { getCharactersByStuff } from '../hooks/useFilter'


type GeneralContextProviderProps = { children:React.ReactNode, }


const sortCharacters = characters.sort( (a, b) => {
    if (a.id > b.id) { return 1 }
    return -1
})
const sortElements = elements.sort( (a, b) => {
    if (a.id > b.id) { return 1 }
    return -1
})

export const GeneralContext = createContext(
    {
        elementsArr: sortElements,
        charactersArr: sortCharacters,
        text: '',
        search: () => {},
        filter: (e:React.MouseEvent<HTMLElement>) => {},
        inputChange: (e:React.ChangeEvent<HTMLInputElement>) => {},
        enter: (e:React.KeyboardEvent) => {}
    }
);



export const GeneralContextProvider = ( {children}:GeneralContextProviderProps ) => {
    
    const [active, setActive] = useState(sortElements);
    const [filter, setFilter] = useState(sortCharacters);
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
    

    return  <GeneralContext.Provider
            value={{
                elementsArr: active,
                charactersArr: filter,
                text: searchText,
                search: handleSearch,
                filter: handleFilter,
                inputChange: handleInputChange,
                enter: handleEnter
            }}>
                {children}
            </GeneralContext.Provider>
}




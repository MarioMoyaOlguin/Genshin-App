import { useState } from "react"
import characters, { elements } from "../data/characters";
import { getCharactersByStuff } from "../hooks/useFilter";

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

// Handles the elements array to filter characters by element
export const handleFilter = (e:any) => {
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


//Updates search text value
export const handleInputChange = (e:any) => {
    setSearchText(e.target.value);
}


// Handles seach text input
export const handleSearch = () => {
    const searchResult = getCharactersByStuff(searchText);
    setActive([...sortElements]);
    setFilter(searchResult);
}

export const chars = () => {
    return [...filter]
}
import characters from "../data/characters";


export const getCharactersByStuff = (searchText:string = '') => {


    // Check if search text is empty
    if(searchText.length === 0) { return { baseArr: characters, searchBoxValue: '' } }

    //Checks for blank spaces
    const blanks = searchText.replaceAll(/[\s-_/]/g, '');
    if(blanks.length === 0) { return { baseArr: characters, searchBoxValue: '' } }

    //isolate character rarity text
    const stars = searchText.toLowerCase().replaceAll(/[\s-_/]/g, ' ')
        .match(/[a-z]{4}\sstar|[a-z]{4}star|[4-5]star|[4-5]\sstar/g);

    //push first rarity text match
    const rarityArr = [];
    if(stars !== null) {
        if(stars[0] ==='4 star' || stars[0] ==='4star' || stars[0] ==='four star' || stars[0] ==='fourstar') {
            rarityArr.push('4-stars');
        } else {
            rarityArr.push('5-stars');
        }
    }

    //match any text excluding rarity text
    // @ts-ignore: Unreachable code error
    const chars = searchText.toLowerCase().replaceAll(/[\s-_/]/g, ' ')
        .match(/[A-Za-z]+/g).filter(elem => 
            elem !== 'five' && elem !== 'four' && elem !== 'star' && elem !== 'stars'
        );

    const filtered = [...rarityArr, ...chars];

    let searchBoxValue = '';

    let baseArr = [...characters];

    const finalArr = filtered.map( search => {

        const capitalized = search.charAt(0).toUpperCase() + search.slice(1);

        let charsFilter = baseArr.filter( elem =>
            elem.id === capitalized ||
            elem.rarity === capitalized ||
            elem.weapon === capitalized ||
            elem.element === capitalized ||
            elem.region === capitalized
        )

        if(charsFilter.length > 0) {
            baseArr = [];
            baseArr = [...charsFilter];
            searchBoxValue = searchBoxValue + ' ' + capitalized;
        }
        
        return baseArr.sort( (a, b) => {
            if (a.id > b.id) {
                return 1
            } else return -1;
          });
    });
    
  return {baseArr, searchBoxValue};
}

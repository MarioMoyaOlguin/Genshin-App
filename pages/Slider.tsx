import React, { ReactEventHandler, useLayoutEffect, useRef, useState } from 'react'
import Card from '../components/Card'
import characters from '../data/characters'
import cardsObserver from '../hooks/useObserver';



const Slider = ( windowWidth:string ) => {

    cardsObserver();

    const cardsContainer = useRef<HTMLDivElement>(null);
    const sliderNavContainer = useRef<HTMLDivElement>(null);

    const [cardArr, setCardArr] = useState([...characters])
    const [width, setWidth] = useState<number | undefined>(0)

    useLayoutEffect(() => {
      setWidth(cardsContainer.current?.children[0].clientWidth)
    }, [cardArr]);

    const handleClick = (direction:string) => {
      if(cardsContainer.current) {
        const {scrollLeft, clientWidth} = cardsContainer.current;

        const scrollInto = direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
  
        cardsContainer.current.scrollTo({left: scrollInto, behavior: "smooth"})
      }
    }

    const handleSliderCard = (e:any) => {
    }

    const handleSliderNav = (e:any) => {
      const navs = document.querySelectorAll<HTMLDivElement>(".nav");
      
      navs.forEach( (item, index) => {
        if(e.currentTarget.id === item.id) {

          if(cardsContainer.current) {
            const {clientWidth} = cardsContainer.current;

            const scrollTo = (index) * clientWidth

            cardsContainer.current.scrollTo({left: scrollTo})
          }
        }
      })
    }

  return (

    <div className='w-full h-screen pt-10 bg-slate-800'>
      <div className='relative w-[500px] h-96 mx-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
        className="w-12 h-12 absolute top-1/2 right-0 -translate-y-1/2 z-20 hover:scale-105 transition-all"
        onClick={ () => handleClick("right") }>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
        className="w-12 h-12 absolute top-1/2 left-0 -translate-y-1/2 z-20 hover:scale-105 transition-all"
        onClick={ () => handleClick("left") }>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
        </svg>

        <div className=' w-[500px] h-96 overflow-hidden bg-white' ref={cardsContainer}>
          <div className='w-fit h-96 flex ' >
            {
              cardArr.map( character => {
                return <div key={character.id} onClick={handleSliderCard}
                className='w-[500px] h-96 flex justify-center items-center shrink-0 ' >
                  <div className='w-fit h-fit card' id={character.id}>
                    <Card character={ character } />
                  </div>
                </div>
              })
            }
          </div>
        </div>
      </div>

      <div className='flex w-[500px] h-10 mx-auto justify-center items-center bg-blue-300 gap-2'
      ref={sliderNavContainer}>
        {
          cardArr.map( item => {
            return <div key={item.characterImage} onClick={handleSliderNav} id={item.id}
              className=' h-2 rounded-full bg-slate-200 hover:bg-orange-600 transition-all nav duration-300 origin-center ' >
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Slider
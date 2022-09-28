import React, { useRef, useState } from 'react';
import cardsObserver from '../hooks/useObserver';
import { sliderDefaultStyles } from '../styles/jsx-styles';
import { SliderOptions } from '../types';
import { useEffect } from 'react';


const ItemsSlider = (
  {
    containerClassName, sliderContainerClassName, arrayContainer, windowWidth, windowHeight, rightIcon, leftIcon, navPanel,
    navIconContainer, navItemClassName, navItemInactive, navItemActive, navItemActiveWidth, navItemInactiveWidth, children
  }:SliderOptions
) => {
    
    cardsObserver(
      navItemInactive ? navItemInactive : 'bg-nav-item-inactive',
      navItemActive ? navItemActive : 'bg-nav-item-active',
      navItemActiveWidth ? navItemActiveWidth : '20px',
      navItemInactiveWidth ? navItemInactiveWidth : '8px'
    );

    const cardsContainer = useRef<HTMLDivElement>(null);
    const sliderNavContainer = useRef<HTMLDivElement>(null);

    const [arrayReady, setArrayReady] = useState(false)
    const [cardsArray, setCardsArray] = useState<string[]>([])

    useEffect(() => {
      const arr = new Array(cardsContainer.current?.children[0].childElementCount).fill(' ')
      setArrayReady(true)
      setCardsArray(arr)
    }, [cardsContainer.current])
    
    
    const handleClick = (direction:string) => {
      if(cardsContainer.current) {
        const {scrollLeft, clientWidth} = cardsContainer.current;

        const scrollInto = direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
  
        cardsContainer.current.scrollTo({left: scrollInto, behavior: "smooth"})
      }
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

    <div className={ (containerClassName) ? containerClassName : 'container-className' }>

        {/* Slider container */}
        <div className={`pos-relative width height ${sliderContainerClassName} `}>

            { /* Next item */
              (rightIcon)
                ? rightIcon
                : <div className={`right ` + ((navIconContainer) ? navIconContainer : 'nav-icon-container ') }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className='nav-icon right transitions '
                    onClick={ () => handleClick("right") }>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
            }

            {/* Previous item */
              (leftIcon)
                ? leftIcon
                : <div className={`left ` + ((navIconContainer) ? navIconContainer : 'nav-icon-container ') }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="nav-icon left transitions"
                    onClick={ () => handleClick("left") }>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                  </div>
            }

            {/* Scrollable window */}
            <div className={`width height overflow `} ref={cardsContainer}>

                {/* Array container */}
                <div className={`w-fit height array-container ` + arrayContainer} >
                  {children}
                </div>
            </div>
        </div>

      {/* Navigation panel */}
      <div className={(navPanel) ? navPanel : 'navigation-panel '}
      ref={sliderNavContainer}>
        {
          (arrayReady)
            ? cardsArray.map( item => {
                return <div onClick={handleSliderNav}
                  className={` nav ` + (navItemClassName ? navItemClassName : ' nav-items transitions ')} >
                </div>
              })
            : <img src="https://drive.google.com/uc?id=151M6mQO7YUdUmA_zWyYVRBuikXmbZuWO" alt="loading" 
                className='w-5 h-5'
              />
          
        }
    
          
      </div>

      <style jsx>{`
      ${sliderDefaultStyles}
        .width {
          width: ${windowWidth};
        }
        .height {
          height: ${windowHeight};
        }
      `}</style>

    </div>
  )
}

export default ItemsSlider
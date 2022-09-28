import Image from 'next/image'
import React, { useContext } from 'react'
import { GeneralContext } from '../context/appContext'


const ElementsGrid = () => {

    const { elementsArr, filter } = useContext(GeneralContext)

  return (

    <div className='grid grid-cols-[repeat(auto-fill,minmax(60px,1fr))] justify-items-center mx-auto gap-1 max-w-[396px] px-2'>
        {
        elementsArr.map( item => {
            return <div className={`w-[60px] h-[60px] group bg-no-repeat text-white transition-all hover:bg-orange-400/30 ease-in-out p-1 `
            + (item.active ? 'bg-outline-b' : 'bg-transparent') }
            onClick={filter}
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
  )
}

export default ElementsGrid
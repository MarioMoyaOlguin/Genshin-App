import Image from 'next/image'
import React, { useState } from 'react'
import { elements } from '../data/characters'


const ElementsFilter = () => {

    const [active, setActive] = useState([...elements]);

    const handleFilter = (e:any) => {

        const newArr = active.map( (item) => {
            if(item.id === e.currentTarget.id) {
                return {
                    ...item,
                    active: !item.active
                }
            } else {
                return {
                    ...item
                }
            }
        })
        setActive(newArr);

    }

  return (
    <div className='flex justify-between my-7 w-fit mx-auto gap-2'>
        {
            active.map( item => {
                return <div className={`w-16 h-16 text-white border border-transparent transition-all hover:border-slate-500 ease-in-out p-1 `
                + (item.active ? '' : 'bg-transparent') }
                onClick={handleFilter}
                id={item.id}
                key={item.id}
                >
                    <div className='relative h-9 w-9 mx-auto'>
                        <Image
                            src={`/assets/elements-icons/${item.id}.png`}
                            layout='fill'
                            objectFit='cover'
                            className={'transition-all ease-in-out ' + (item.active ? '' : 'grayscale')}
                        />
                    </div>
                    <p className='text-center first-letter:uppercase sourceSerif leading-5'>{item.id}</p>
                </div>
            })
        }
    </div>
  )
}

export default ElementsFilter
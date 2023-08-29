import React from 'react'

export default function Keypad() {
    return (
        <div className='bg-keypad-back-light dark:bg-keypad-back-dark grid grid-cols-4 rounded-md p-1'>
            
            <ImpKeys value={'AC'} />
            <Keys value={'√'} />
            <Keys value={'÷'} />
            <ImpKeys value={'⌫'} />
            <Keys value={7} />
            <Keys value={8} />
            <Keys value={9} />
            <Keys value={'×'} />
            <Keys value={4} />
            <Keys value={5} />
            <Keys value={6} />
            <Keys value={'-'} />
            <Keys value={1} />
            <Keys value={2} />
            <Keys value={3} />
            <Keys value={'+'} />
            <Keys value={'.'} />
            <Keys value={0} />
            <Keys value={'%'} />
            <ImpKeys value={'='} />
            
        </div>
    )
}

const Keys = (props) => {

    return (
        <a className={`bg-key-back-light dark:bg-key-back-dark shadow-grey-light dark:shadow-grey-dark dark:text-text-dark hover:bg-key-hover-light dark:hover:bg-key-hover-dark h-[60px] flex items-center text-center justify-center rounded-md m-[6px] duration-200 hover:cursor-pointer`}>
            {props.value}
        </a>
    )
}

const ImpKeys = (props) => {

    return (
        <a className={`text-white bg-imp-back-light dark:bg-imp-back-dark shadow-blue-light dark:shadow-blue-dark hover:bg-imp-hover-light dark:hover:bg-imp-hover-dark h-[60px] flex items-center text-center justify-center rounded-md m-[6px] duration-200 hover:cursor-pointer`}>
            {props.value}
        </a>
    )
}
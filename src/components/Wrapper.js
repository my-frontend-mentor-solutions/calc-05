import React from 'react'
import Header from './Header'
import Keypad from './Keypad'

export default function Wrapper() {
  return (
    <div className='w-[90%] sm:w-[50%] lg:w-[30%] flex flex-col mt-3 text-text-light dark:text-white'>
        <Header />
        <Keypad />
    </div>
  )
}

'use client'
import React from 'react'
import Button from './Button';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {
  const onToggle=(e)=>{
  }

  return (
    <header className='bg-[#f8fafc]'>
      <nav className='flex justify-between items-center mx-auto w-[95%]'>
        <div >
          <h1 className='text-4xl text-red-500'>Dil Foods</h1>
        </div>
        <div className='nav-links md:static absolute bg-[#f8fafc] md:min-h-fit min-h-[60vh] w-full left-0 top-[-100%] md:w-auto flex items-center' >
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 pl-5'>
            <li>
              <Link className='hover:text-red-500' href='/products'>Products</Link>
            </li>
            <li>
              <Link className='hover:text-red-500' href='/#'>About</Link>
            </li>
            <li>
              <Link className='hover:text-red-500' href='#'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center justify-end'>
        <button className='bg-red-500 text-white m-2 px-5 py-2 rounded-full hover:bg-red-400'>Login</button>
        <GiHamburgerMenu className='m-2 md:hidden'/>
        </div>

      </nav>
    </header>

  )
}

export default Header
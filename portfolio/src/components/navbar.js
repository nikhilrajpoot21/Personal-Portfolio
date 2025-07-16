
import React from 'react'


export default function navbar() {
  return (
<section className='w-full h-[90px] bg-transparent flex items-center justify-center '>
  <nav className='w-full lg:w-1/2 h-[60px] flex justify-between items-center px-4 bg-transparent rounded-full  shadow-lg shadow-indigo-600/100 text-white text-lg lg:text-xl'>
    <a className='bg-transparent bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient hover:text-indigo-200' href='#aboutME'>About Me</a>
    <a className='bg-transparent bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient hover:text-indigo-300' href='#projects'>Projects</a>
    <a className='bg-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient hover:text-indigo-400' href='#certificates' >Certificates</a>
    <a className='bg-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient hover:text-indigo-400' href='#contact'>Contact</a>
  </nav>
</section>

  )

}
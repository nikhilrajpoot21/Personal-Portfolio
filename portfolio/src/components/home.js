import React from 'react'
import SkillPhoto from '../images/skills graphic -Photoroom.png';



export default function home() {
  return (
<section className="relative z-10 pt-32 pb-20 md:m-0 md:p-0  flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[6rem] bg-transparent">

       <div className="bg-transparent md:bg-transparent text-white h-[20rem] w-3/4 md:w-[32rem] md:h-[40rem]  md:ml-[3rem]  flex items-center justify-center ">
       <img className="h-fill w-fill rounded md:ml-[4rem]" src={SkillPhoto} alt="Nikhil's Avatar"/>
       </div>
        <div className="bg-transparent h-60 w-3/4 md:w-[36rem] md:ml-[6rem]">
        <div className='bg-transparent h-24 w-full'>
        <p className='text-[2rem] font-bold font-mono bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient' >Driven,</p>
        <p className='text-[2rem] font-bold font-mono bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient'>By Logic.</p>
        </div>
        <div className='bg-transparent h-1/2 w-full'>
        <p className=' w-full h-[1.7rem] text-[1.5rem] text-white font-mono'>Hi,I'm Nikhil</p>
       <p className="text-white font-mono text-lg border-r-4 border-white overflow-hidden inline-block animate-typing"> Building Scalable Solutions, One Line at a Time.</p>


        </div>
        </div>
  
</section>

  )
}

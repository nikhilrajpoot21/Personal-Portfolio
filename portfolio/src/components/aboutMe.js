import React from 'react'
import MysecondPhoto from '../images/MyPersonalPhoto.png'; // Importing the second photo

export default function aboutMe() {
  return (
      <section className='h-screen w-full bg-transparent min-h-screen'id='aboutME'>
        <div className='w-full h-[1.5rem] '> {/*container for header */}
            <div className='  font-bold text-center mt-10 text-[2.5rem] bg-transparent bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient'>About Me</div>
        </div>
    <div className='flex flex-col md:flex-row items-center justify-center gap-[2rem]  md:gap-[5rem] bg-transparent mt-12 md:mt-20'>  {/*container for photo and description */}
        <div className="bg-transparent md:bg-transparent text-white  h-[18rem] w-[18rem] md:w-[32rem] md:h-[32rem]  flex items-center justify-center">  {/*container for photo*/}
       <img className="h-full w-[25rem] rounded" src={MysecondPhoto} alt="Nikhil's Avatar"/>
       </div>
        <div className=" h-[25rem] w-[25rem] md:w-[30rem] md:h-[22rem]  bg-transpatent rounded-[5rem]  shadow-lg shadow-indigo-600/100 flex flex-col items-center justify-center"> {/*container for description*/}
        <p className='ml-[1.2rem] text-[1rem] text-white font-mono p-4'>
            I’m Nikhil Singh Rajpoot, a Computer Science Engineering student (B.Tech, 2023–2027) from India. I'm a dedicated full-stack developer with strong problem-solving skills and 100+ LeetCode problems solved. I aim to become a Industry-leading software engineer, with future plans to specialize in Cloud Computing and Artificial Intelligence—constantly striving to innovate and unlock human potential through technology.</p>
            <button className='bg-purple-500 text-white font-mono p-2 rounded-lg hover:bg-purple-600 transition duration-300'>Download Resume</button>
        </div>
    </div>
      </section>
  )
}



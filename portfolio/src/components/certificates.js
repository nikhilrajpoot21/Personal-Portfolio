import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Certificates() {
  const [IsLaptop , setIsLaptop] = useState(window.innerWidth >= 768);
    useEffect(() => {
  const handleResize = () => {
    setIsLaptop(window.innerWidth >= 768); 
  };
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  return (
   <section className="h-screen w-full bg-transparent" id='certificates'>
    <div className='w-full h-full'>
        {/* Header */}
    <div className="bg-red">
      <h1 className="h-[5rem] font-bold text-center mt-10 text-[2.5rem] bg-transparent bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient">
        Certificates
      </h1>
    </div>

    {IsLaptop ? (
  // for laptop size JSX
<div className="h-full w-full bg-transparent mt-[-2.5rem] flex justify-center items-center relative">
  {/* Left Scroll Button */}
  <button
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow z-10"
  >
    ◀
  </button>

  {/* Certificates Grid */}
  <div className="w-[90%] h-[90%] bg-transparent overflow-x-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="bg-white h-[18rem] w-full rounded shadow-md"
      />
    ))}
  </div>

  {/* Right Scroll Button */}
  <button
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow z-10"
  >
    ▶
  </button>
</div>

) : (
    // for phone size jsx
    <div className="bg-transparent h-full w-full">
    {/* Certificates Container */}
    <div className="md:h-[40rem] md:w-full md:ml-[0rem] w-[25rem] ml-[1rem] flex justify-center items-center">
     <div className="relative flex justify-center items-center h-[600px] w-full bg-transparent">
      {/* Previous Button */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow"
      >
        ◀
      </button>

      {/* Card */}
      <div className="max-w-md w-[35rem] bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src='/'
          alt="certificate"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 bg-gray-200 ">
          <h5 className="text-2xl font-bold mb-2">Certificate Title</h5>
          <p className="text-gray-700 mb-4"></p>
          <a
            href='/'
            target="_blank"
            rel="noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Read more
          </a>
        </div>
      </div>

      {/* Next Button */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow"
      >
        ▶
      </button>
    </div>
    </div>
  </div>
)}
    </div>
</section>

  );
}



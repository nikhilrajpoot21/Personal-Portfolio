import React from 'react';

export default function Certificates() {
  return (
   <section className="h-screen w-full bg-transparent">

    {/* Header */}
    <div className="bg-red">
      <h1 className="h-[5rem] font-bold text-center mt-10 text-[2.5rem] bg-transparent bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient">
        Certificates
      </h1>
    </div>
    <div className="bg-transparent h-full w-full">

    {/* Certificates Container */}
    <div className="md:h-[40rem] md:w-full  flex justify-center items-center">
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
</section>

  );
}



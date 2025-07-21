import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Certify1 from '../images/certificate1.jpg';
import Certify2 from '../images/certificate1.jpg';
import Certify3 from '../images/certificate2.jpg';
import Certify4 from '../images/certificate1.jpg';
import Certify5 from '../images/certificate1.jpg';
import Certify6 from '../images/certificate1.jpg';
import Certify7 from '../images/certificate1.jpg';
import Certify8 from '../images/certificate1.jpg';
import Certify9 from '../images/certificate1.jpg';

const certificates = [Certify1,Certify2,Certify3,Certify4,Certify5,Certify6,Certify7,Certify8,Certify9];


export default function Certificates() {
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 768);
  const [currentIndex, setCurrentIndex] = useState(0);
const [activeCert, setActiveCert] = useState(null);


  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % certificates.length
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + certificates.length) % certificates.length
    );
  };
  const customStyles = {  // Custom Style for my certificate modal
  content: {
    width: '60%',         
    height: 'auto',        
    maxHeight: '80vh',     
    borderRadius: '12px',
    inset: 'auto',        
    transform: 'translateY(10%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  }
};

  return (
    <section className="h-screen w-full bg-transparent" id='certificates'>
      <div className='w-full h-full'>
        {/* Header */}
        <div className="bg-red">
          <h1 className="h-[5rem] font-bold text-center mt-10 text-[2.5rem] bg-transparent bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient">
            Certificates
          </h1>
        </div>

        {isLaptop ? (
          // Laptop view
          <div className="h-full w-full bg-transparent mt-[-2.5rem] flex justify-center items-center relative">
            {/* Certificates Grid */}
            <div className="w-[90%] h-[90%] bg-transparent overflow-x-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              {certificates.map((src, i) => (
                <div key={i} className="flex justify-center items-center">
                  <img
                    src={src}
                    alt={`Certificate ${i + 1}`}
                    className="h-[18rem] w-full rounded shadow-md cursor-pointer transition-transform hover:scale-105 object-cover"
                    onClick={() => setActiveCert(src)}
                 />
                 <Modal isOpen={!!activeCert} onRequestClose={() => setActiveCert(null)} style={customStyles}>
                   <img src={activeCert} style={{ width: '100%' }} alt="Active Certificate" />
                 </Modal>

                </div>
              ))}
            </div>
          </div>
        ) : (
          // Mobile view
          <div className="bg-transparent h-full w-full flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <button
                className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow z-10  ${currentIndex === 0 ? 'bg-gray-300 cursor-not-allowed opacity-50' : 'bg-gray-200 hover:bg-gray-300'}`}
                onClick={prevCertificate}
                aria-label="Previous certificate"
                disabled={currentIndex === 0}
              >
                ◀
              </button>

              <div className="bg-white rounded-lg overflow-hidden shadow-lg mx-4">
                <img
                  src={certificates[currentIndex]}
                  alt={`Certificate ${currentIndex + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-gray-200">
                  <h5 className="text-2xl font-bold mb-2">Certificate {currentIndex + 1}</h5>
                  <a
                    href={certificates[currentIndex]}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
                  >
                    View Full Size
                  </a>
                </div>
              </div>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow z-10"
                onClick={nextCertificate}
                aria-label="Next certificate"
              >
                ▶
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
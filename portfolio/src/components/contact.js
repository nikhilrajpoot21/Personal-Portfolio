import React from 'react'
import FormImg from '../images/formimg.png'; // Assuming you have an image for the contact form
import Linkedin from '../images/linkedinicon.png'; // Assuming you have an image for the contact form
import Gmail from '../images/gmailicon.png'; // Assuming you have an image for the contact form
import Telegram from '../images/telegramicon.png'; // Assuming you have an image for the contact form
import Whatsapp from '../images/whatsappicon.png'; // Assuming you have an image for the contact form

export default function contact() {
  return (
   <section className='h-screen w-full bg-transparent' id='contact'>
      <div className='w-full h-[2.7rem] bg-transparent'> {/* container for header tag */}
            <h1 className='h-[5rem] font-bold text-center mt-10 text-[2.5rem] bg-transparent bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient'>Contact Me</h1>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[3rem] bg-transparent pt-20'>   {/* Outer most container */}
            
        <div className='bg-transparent md:bg-transparent text-white  h-[15rem] w-3/4 md:w-[40rem] md:h-[22rem] flex flex-row'>    {/* container for image and social links */}
                <div className='bg-transparent h-[10rem] w-[10rem] md:h-[20rem] md:w-[15rem] '> {/* container for image */}
                    <img className='h-full w-full rounded' src={FormImg} alt="Contact Form" />
                </div>
                
                <div className='bg-transparent h-full w-[15rem] md:h-[20rem] md:w-[20rem] md:-mr-6 flex flex-col'> {/* outer container for social links and description*/}
                    <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-300 via-indigo-200 to-blue-500 bg-clip-text text-transparent">DO YOU HAVE A PROJECT TO DISCUSS?</h1>
                    <h1 className="text-xl font-bold text-white font-mono">GET IN TOUCH...💬</h1>
                    <div className='bg-transparent w-full h-1/2 flex justify-center items-center space-x-4 md:gap-6 '> {/* containers for social links icon */}
                        <div className=' h-[3rem] w-[5rem] md:h-[2rem] md:w-[2rem] bg-white'> {/* Linkedin icons */}
                            <a
                                href="https://www.linkedin.com/in/nikhil-singh-rajpoot-436697274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img
                                    src={Linkedin} 
                                    alt="icon"
                                    className="w-48 h-auto rounded-lg hover:opacity-80 transition duration-300"
                                />
                            </a>
                        </div>
                        <div className='bg-white h-[3rem] w-[5rem] md:h-[2rem] md:w-[2rem]'> {/* Gmail icons */}
                            <a
                                href="mailto:nikhil.rajpoot.2104@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img
                                    src={Gmail} 
                                    alt="icon"
                                    className="w-48 h-auto rounded-lg hover:opacity-80 transition duration-300 "
                                />
                            </a>
                        </div>
                        <div className='bg-white h-[3rem] w-[5rem] md:h-[2rem] md:w-[2rem]'> {/* Telegram icons */}
                            <a
                                href="t.me/+919301236616"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img
                                    src={Telegram} 
                                    alt="icon"
                                    className="w-48 h-auto rounded-lg hover:opacity-80 transition duration-300"
                                />
                            </a>
                        </div>
                        <div className='bg-white h-[3rem] w-[5rem] md:h-[2rem] md:w-[2rem]'> {/* Whatsapp icons */}
                             <a
                                href="https://wa.me/919301236616"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                <img
                                    src={Whatsapp} 
                                    alt="icon"
                                    className="w-48 h-auto rounded-lg hover:opacity-80 transition duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
        </div>
            
<form className='h-[20rem] w-[20rem] md:w-[30rem] md:h-[22rem] bg-transparent p-4'> {/* container for contact form */}
  {/* Name Field */}
  <div className="mb-3">
    <p className='text-[1rem] font-bold font-mono bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient'>Name</p>
    <input
      type="text"
      id="name"
      placeholder="Enter your name"
      className="w-full p-2 border border-gray-300 rounded-md text-sm text-white bg-transparent font-mono"
    />
  </div>

  {/* Email Field */}
  <div className="mb-3">
    <p className='text-[1rem] font-bold font-mono bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient'>E-Mail</p>
    <input
      type="email"
      id="email"
      placeholder="Enter your email"
      className="w-full p-2 border border-gray-300 rounded-md text-sm text-white bg-transparent font-mono"
    />
  </div>

  {/* Message Field */}
  <div className="mb-3">
    <p className='text-[1rem] font-bold font-mono bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300 bg-clip-text text-transparent animate-gradient'>Message</p>
    <textarea
      id="message"
      placeholder="Write your message"
      rows="3"
      className="w-full p-2 border border-gray-300 rounded-lg text-sm text-white bg-transparent  font-mono"
    />
  </div>

  {/* Send Button */}
  <div className="text-center mt-2">
    <button className="bg-purple-500 text-white font-mono py-2 px-5 rounded-lg hover:bg-purple-600 transition duration-300 ">
      Send
    </button>
  </div>
</form>

        </div>
    </section>
  )
}

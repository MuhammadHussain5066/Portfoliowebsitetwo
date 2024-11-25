import React from 'react';
import Navbar from './Navbar'; 
import Image from 'next/image'; 

const Hero = () => {
  return (
    <div
      id="Hero"
      className="min-h-screen bg-no-repeat bg-center bg-cover flex flex-col items-center"
    >
    
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] pt-16 px-4 sm:px-8 text-center">
     
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6">
          <Image
            src="/banner.jpeg" 
            alt="Hero Image"
            layout="fill" 
            objectFit="cover" 
            className="rounded-full"
          />
        </div>

   
        <div className="text-white text-center">
          <p className="text-4xl sm:text-5xl font-bold leading-tight mb-2">I am</p>
          <p className="text-6xl sm:text-7xl font-bold leading-tight">Hussain</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';

const Navbar = () => {
  return (
    <div>
      
      <div className="fixed w-full top-0 left-0 bg-black text-white z-10 shadow-lg">
        <div className="container mx-auto px-4 pt-4 flex items-center justify-between">
          
          <div className="text-2xl font-semibold">
            Hussain
          </div>
          
          <div className="flex space-x-8">
            <a href="#home" className="text-lg hover:text-gray-400">Home</a>
            <a href="#about" className="text-lg hover:text-gray-400">About</a>
            <a href="#projects" className="text-lg hover:text-gray-400">Projects</a>
            <a href="#skills" className="text-lg hover:text-gray-400">Skills</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

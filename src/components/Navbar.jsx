// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex justify-between items-center py-[15px] px-[22px] md:px-[50px] ld:px-[130px] omd:px-[90px] bg-white'>
      <div className='text-xl cursor-default font-bold'>
        <h2>Skizzie Devs</h2>
      </div>
      <div className='hidden mid:flex space-x-4 omd:space-x-6'>
        <Link to="sec4" smooth="true" duration={600} className='text-black cursor-pointer  font-semibold hover:text-gray-900'>About me</Link>
       
        <Link to="sec2" smooth="true" duration={600} className='text-black cursor-pointer font-semibold hover:text-gray-900'>Skills</Link>
        <Link to="sec5" smooth="true" duration={600} className='text-black cursor-pointer font-semibold hover:text-gray-900'>Projects</Link>
        <Link to="sec6" smooth="true" duration={600} className='text-black cursor-pointer font-semibold hover:text-gray-900'>Contact me</Link>
      </div>
      <div className='hidden mid:block'>
        <Link to="sec6">
          <button className='cta-button bg-black text-white font-semibold rounded-full px-4 py-2 text-lg'>
            Hire Me
          </button>
        </Link>
      </div>
      <div className='mid:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className='mid:hidden absolute top-16 left-0 right-0 bg-white shadow-lg'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link to="sec4"  smooth="true" duration={600} className='block text-black cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'>About me</Link>
            <Link to="sec2" smooth="true" duration={600} className='block text-black cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'>Skills</Link>
            <Link to="sec5" smooth="true" duration={600} className='block text-black cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'>Projects</Link>
            
            
            <Link to="sec6" smooth="true" duration={600} className='block text-black cursor-pointer hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium'>Contact</Link>
            <Link to="sec6" smooth="true" duration={600}className='cta-button bg-black font-semibold text-white rounded-full block w-full text-center px-4 py-2 text-lg'>Hire Me</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

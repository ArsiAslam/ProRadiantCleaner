import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white text-gray-800 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm relative">
      <div className="flex items-center">
        <span className="text-l font-bold drop-shadow">
          <span className="text-blue-700">PRO</span>
          <span className="text-yellow-400 mx-1">RADIANT</span>
          <span className="text-green-500">CLEANERS</span>
        </span>
      </div>

      {/* Desktop Content */}
      <div className="hidden md:flex items-center">
        <div className="text-sm text-gray-600 mr-10">
          offer Facilities Management, Construction and Extreme Cleaning Services – Fully accredited to ISO 9001, 14001 and 45001 standards.
        </div>
        <div className="border-l border-gray-200 pl-6 ml-4">
          <a
            href=""
            className="text-blue-900 font-bold hover:text-green-500 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">☎</span>
            <span></span>
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 focus:outline-none z-20"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl py-6 px-4 flex flex-col gap-6 md:hidden z-10 animate-fade-in">
          <div className="text-sm text-gray-600">
            offer Facilities Management, Construction and Extreme Cleaning Services – Fully accredited to ISO 9001, 14001 and 45001 standards.
          </div>
          <a
            href=""
            className="text-blue-900 font-bold hover:text-green-500 transition-colors flex items-center gap-2"
          >
            <span className="text-xl">☎</span>
            <span></span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

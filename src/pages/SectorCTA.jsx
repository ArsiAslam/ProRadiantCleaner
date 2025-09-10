import React from 'react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';

const SectorsCTA = () => {
  const sectorHeroBg = 'https://images.unsplash.com/photo-1610651228633-cf6682a4fe6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2FjdGl2ZSUyMGNsZWFuZXIlMjBzZWN0b3J8ZW58MHx8MHx8fDA%3D';

  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section for Sectors */}
      <HeroSection
        backgroundImage={sectorHeroBg}
        title="Our Sectors"
        subtitle="Residential, Commercial, Education, Government, Industrial, Retail & Leisure"
        description="Discover the industries and sectors we serve with our professional cleaning solutions."
        showQuoteButton={false}
      />
      
      {/* Content Section */}
      <div className="p-8">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-left">
          Archives: Sectors
        </h1>
        
        {/* Call-to-Action Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl p-12 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to make us your<br />
              finishing touch?
            </h2>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Phone Button */}
              <button className="flex items-center gap-3 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 text-white px-6 py-3 rounded-full backdrop-blur-sm">
                <span className="text-lg font-medium">01753 428151</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M7 7l10 10M7 17l10-10" 
                  />
                </svg>
              </button>
              
              {/* Get a Quote Button */}
              <Link to="/quote" className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsCTA;
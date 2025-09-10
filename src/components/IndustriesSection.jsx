import React from 'react'
import { Link } from 'react-router-dom';
const IndustriesSection = () => {
const industries = [
        {
            name: 'Residential',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
            )
        },
        {
            name: 'Office & Business',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                    <rect x="14" y="4" width="6" height="2" fill="white" />
                    <text x="17" y="5.5" fill="currentColor" fontSize="3" fontWeight="bold" textAnchor="middle">OFFICE</text>
                </svg>
            )
        },
        {
            name: 'Government',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L2 6v2h20V6l-10-5zM2 10v2h2v6H2v2h20v-2h-2v-6h2v-2H2zm6 8V12h2v6H8zm4 0V12h2v6h-2zm4 0V12h2v6h-2z" />
                </svg>
            )
        },
        {
            name: 'Education',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
            )
        },
        {
            name: 'Healthcare',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    <path d="M16 8h-3V5h-2v3H8v2h3v3h2v-3h3V8z" fill="white" />
                </svg>
            )
        },
        {
            name: 'Hospitality',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.38-1 1.73v2.53l9 3.44v9.3H2v-9.3l9-3.44V5.73c-.6-.35-1-.99-1-1.73 0-1.1.9-2 2-2zm0 15c-1.66 0-3-1.34-3-3 0-1.12.61-2.1 1.5-2.61V9.5l-8.5 3.25V20h20v-7.25L13.5 9.5v1.89c.89.51 1.5 1.49 1.5 2.61 0 1.66-1.34 3-3 3z" />
                    <circle cx="12" cy="14" r="2" fill="white" />
                </svg>
            )
        },
        {
            name: 'Retail',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    <path d="M12 6h6v2h-6V6zm0 3h6v2h-6V9z" fill="white" opacity="0.7" />
                </svg>
            )
        },
        {
            name: 'Industrial',
            icon: (
                <svg className="w-16 h-16" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" transform="rotate(45 12 12)" />
                    <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" fill="white" />
                </svg>
            )
        }
    ];



  return (
    <div>
         {/* Industries Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-11a1 1 0 000 2h3a1 1 0 000-2h-3zm0 3a1 1 0 000 2h3a1 1 0 000-2h-3zm0 3a1 1 0 000 2h3a1 1 0 000-2h-3z" clipRule="evenodd" />
                            </svg>
                            Industries
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Industries We Cover</h2>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {industries.map((industry, index) => (
                            <div
                                key={industry.name}
                                className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-blue-50 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {industry.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                                    {industry.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Phone Number Button */}
                    <div className="text-center">
                        <Link to ="/quote">
                        <button className="inline-flex items-center gap-3 bg-[#02294D] text-white px-8 py-4 rounded-full text-xl font-bold  transition-colors duration-300 shadow-lg hover:shadow-xl">
                            Get a Quote
                            
                        </button>
                        </Link>
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default IndustriesSection

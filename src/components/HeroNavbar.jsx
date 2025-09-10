import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const serviceDetails = {
    commercial: {
        title: 'Commercial Cleaning',
        key: 'commercial-cleaning',
    },
    property: {
        title: 'Property Cleaning',
        key: 'property-cleaning',
    },
    construction: {
        title: 'Construction Cleaning',
        key: 'construction-cleaning',
    },
    specialist: {
        title: 'Specialist Cleaning',
        key: 'specialist-cleaning',
    },
    disinfection: {
        title: 'Disinfection Cleaning',
        key: 'disinfection-cleaning',
    },
};

const locationAreas = [
    { name: 'London', id: 'london' },
    { name: 'Manchester', id: 'manchester' },
    { name: 'Surrey', id: 'surrey' },
    { name: 'Berkshire', id: 'berkshire' },
    { name: 'Buckinghamshire', id: 'buckinghamshire' },
    { name: 'Oxfordshire', id: 'oxfordshire' },
    { name: 'Kent', id: 'kent' },
    { name: 'Sussex', id: 'sussex' },
    { name: 'Essex', id: 'essex' },
];

const HeroNavbar = () => {
    const [selectedService, setSelectedService] = useState('commercial');
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);

    return (
        <nav className="px-4 sm:px-8 py-4 sm:py-8 flex items-center justify-between" style={{ backgroundColor: '#02294D' }}>
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src="/Pro_Radiant_Cleaners_Logo-removebg-preview(1).png"
                        alt="pro-Radiant Cleaner Logo"
                        className="w-[260px] object-cover mr-10"
                        style={{ height: '90px' }}
                        loading="lazy"
                    />
                </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer">Home</Link>
                <Link to="/about" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">About Us</Link>
                {/* Services Dropdown */}
                <div className="relative group">
                    <Link
                        to="/services"
                        className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer flex items-center gap-1"
                    >
                        Services
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>

                    {/* Desktop Services Dropdown Menu */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="flex min-h-[400px]">
                            {/* Left Side - Service Categories */}
                            <div className="w-1/3 bg-gray-50 p-8 rounded-l-2xl">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">Our Services</h3>
                                <div className="space-y-4">
                                    {Object.keys(serviceDetails).map((key) => (
                                        <Link
                                            key={key}
                                            to={`/services/${serviceDetails[key].key}`}
                                            className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer block ${selectedService === key ? 'bg-gray-200' : ''}`}
                                            onMouseEnter={() => setSelectedService(key)}
                                        >
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <div className="w-5 h-5 bg-blue-500 rounded"></div>
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-800">{serviceDetails[key].title.split(' ')[0]}</div>
                                                <div className="text-sm text-gray-500">Cleaning</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side - Main Content */}
                            <div className="w-2/3 p-8">
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <div className="w-5 h-5 bg-green-500 rounded"></div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">{serviceDetails[selectedService].title}</h3>
                                        <div className="w-6 h-6 bg-green-500 rounded-sm ml-auto"></div>
                                    </div>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {serviceDetails[selectedService].description}
                                    </p>
                                    <div className="flex justify-between items-center mb-6">
                                        <Link
                                            to={`/services/${serviceDetails[selectedService].key}`}
                                            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors"
                                        >
                                            Read More
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                        <span className="text-gray-400">📞 {serviceDetails[selectedService].phone}</span>
                                    </div>
                                </div>

                                {/* Sector Icons Grid */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-4 gap-4">
                                        {['Factory', 'Retail', 'School', 'Hospitality'].map((sector) => (
                                            <div key={sector} className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                                                <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                                                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                                                </div>
                                                <div className="text-sm font-medium text-gray-700">{sector}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        {['Office', 'Warehouse', 'Leisure', 'University'].map((sector) => (
                                            <div key={sector} className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                                                <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                                                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                                                </div>
                                                <div className="text-sm font-medium text-gray-700">{sector}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-4 gap-4">
                                        <div className="bg-green-50 p-4 rounded-lg text-center hover:bg-green-100 transition-colors cursor-pointer">
                                            <div className="w-8 h-8 mx-auto bg-green-500 rounded mb-2 flex items-center justify-center">
                                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                                            </div>
                                            <div className="text-sm font-medium text-gray-700">Data Centre</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Locations Dropdown */}
                <div className="relative group">
                    <Link
                        to="/location"
                        className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer flex items-center gap-1"
                    >
                        Locations
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>

                    {/* Desktop Locations Dropdown Menu */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-gray-800 mb-2">Areas We Cover</h3>
                                <p className="text-gray-600">Professional cleaning services throughout South East England</p>
                            </div>

                            <div className="grid grid-cols-6 gap-4 mb-8">
                                {locationAreas.map((location, index) => (
                                    <Link
                                        key={index}
                                        to={`/location/${location.id}`}
                                        className="bg-green-50 p-4 rounded-xl hover:bg-green-100 transition-all duration-300 cursor-pointer border border-green-100 hover:shadow-md hover:scale-105 block"
                                    >
                                        <div className="text-center">
                                            <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-3">
                                                <div className="w-6 h-6 bg-white rounded-full"></div>
                                            </div>
                                            <span className="font-bold text-gray-800 text-sm">{location.name}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-100">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                                            <div className="w-6 h-6 bg-white rounded-full"></div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800">South East England Coverage</h3>
                                            <p className="text-gray-600">Serving communities across the region</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-gray-500 mb-2">📞 01753 428100</div>
                                        <div className="text-sm text-gray-400">Available 24/7</div>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Our commitment to excellence has earned us a reputation as the go-to provider of top-quality extreme cleaning services throughout the South East of England.
                                </p>

                                <div className="grid grid-cols-4 gap-4 mb-6">
                                    {['Emergency Response', 'Fully Insured', '24/7 Available', 'Expert Team'].map((service, idx) => (
                                        <div key={idx} className="bg-white/50 p-4 rounded-lg text-center hover:bg-white/80 transition-colors">
                                            <div className={`w-10 h-10 mx-auto ${idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-blue-500' : idx === 2 ? 'bg-purple-500' : 'bg-orange-500'} rounded-full flex items-center justify-center mb-2`}>
                                                <div className="w-5 h-5 bg-white rounded"></div>
                                            </div>
                                            <div className="text-sm font-medium text-gray-700">{service}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <Link
                                        to="/location"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                    >
                                        View All Coverage Areas
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/sector" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Sectors</Link>
                <Link to="/contact" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">Contact</Link>
            </div>
            {/* Get Quote Button */}
            <Link to="/quote" className="hidden lg:flex bg-green-400 hover:bg-green-500 text-[#02294D] font-bold py-2 px-6 rounded-full shadow transition items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></Link>
        </nav>
    );
};

export default HeroNavbar;
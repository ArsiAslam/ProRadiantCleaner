import React, { useState } from 'react';
import { Phone } from 'react-feather';
import { Link } from 'react-router-dom';

const serviceDetails = {
  commercial: {
    title: 'Commercial Cleaning',
    description: 'We specialize in delivering top-quality commercial cleaning services to keep your business spotless and inviting. Our tailored solutions ensure a clean, healthy, and productive environment, from office spaces to retail establishments. Trust our expert team to maintain the highest standards of cleanliness, helping your business shine every day.',
    phone: '01753 428100',
    key: 'commercial-cleaning',
  },
  property: {
    title: 'Property Cleaning',
    description: 'Expert property cleaning for residential and commercial spaces. Our team ensures every property is maintained to the highest standards, providing a clean and safe environment for tenants and owners alike.',
    phone: '01753 428200',
    key: 'property-cleaning',
  },
  construction: {
    title: 'Construction Cleaning',
    description: 'Post-construction cleaning to make your new build or renovation spotless and ready for use. We remove dust, debris, and ensure a pristine finish for your project.',
    phone: '01753 428300',
    key: 'construction-cleaning',
  },
  specialist: {
    title: 'Specialist Cleaning',
    description: 'Specialist cleaning for unique requirements, including biohazard, industrial, and high-level cleaning. Our certified team handles complex jobs with safety and expertise.',
    phone: '01753 428400',
    key: 'specialist-cleaning',
  },
  disinfection: {
    title: 'Disinfection Cleaning',
    description: 'Advanced disinfection and sanitization for health-critical environments. We use hospital-grade products and techniques to ensure safety and compliance.',
    phone: '01753 428500',
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

const HeroSection = ({
  backgroundImage = "/herosection.png",
  title = "The Best Cleaning Service Solutions",
  subtitle = "Quality Cleaning for Homes, Businesses & Sites",
  description = "We provide bespoke cleaning solutions & services that exceed your expectations covering the Residential, Commercial, Specialist & Construction Sectors.",
  showQuoteButton = true
}) => {
  const [selectedService, setSelectedService] = useState('commercial');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsLocationsOpen(false);
  };

  return (
    <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-4">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation Bar */}
        <nav className="px-4 sm:px-8 py-4 sm:py-8 flex items-center justify-between" style={{ backgroundColor: '#02294D' }}>
          {/* Professional Logo Section */}
            <div className="flex items-center">
              <Link to="/">
                <img
                  src="/Pro_Radiant_Cleaners_Logo-removebg-preview(1).png"
                  alt="pro-Radiant Cleaner Logo"
                  className=" w-[260px] object-cover mr-10"
                  style={{ height: '90px' }}
                  loading="lazy"
                />
              </Link>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              About Us
            </Link>

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
                          className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer ${selectedService === key ? 'bg-gray-200' : ''}`}
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

            <Link
              to="/sector"
              className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              Sectors
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <div>
            <Link
              to="/quote"
              className="ml-6 bg-green-400 hover:bg-green-500 text-[#02294D] font-bold py-2 px-6 rounded-full shadow transition flex items-center gap-2"
            >
              Get a Quote <span aria-hidden="true">↗</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50 relative"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#02294D] z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-blue-700/30">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative">
                    <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="text-white">
                  <div className="font-bold text-sm">
                    <span className="text-green-400">PROACTIVE</span>
                  </div>
                  <div className="font-bold text-sm -mt-0.5">
                    <span className="text-white">CLEANERS</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeMobileMenu}
                className="text-white p-2"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-6">
                <Link
                  to="/"
                  className="block text-green-400 hover:text-green-300 transition-colors font-medium text-lg"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="block text-white hover:text-green-300 transition-colors font-medium text-lg"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

                {/* Mobile Services Section */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-white hover:text-green-300 transition-colors font-medium text-lg"
                  >
                    Services
                    <svg className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isServicesOpen && (
                    <div className="mt-4 pl-4 space-y-3 border-l border-blue-700/30">
                      {Object.keys(serviceDetails).map((key) => (
                        <Link
                          key={key}
                          to={`/services/${serviceDetails[key].key}`}
                          className="block text-blue-200 hover:text-green-300 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {serviceDetails[key].title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Locations Section */}
                <div>
                  <button
                    onClick={() => setIsLocationsOpen(!isLocationsOpen)}
                    className="flex items-center justify-between w-full text-white hover:text-green-300 transition-colors font-medium text-lg"
                  >
                    Locations
                    <svg className={`w-5 h-5 transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isLocationsOpen && (
                    <div className="mt-4 pl-4 space-y-3 border-l border-blue-700/30 max-h-40 overflow-y-auto">
                      {locationAreas.map((location, index) => (
                        <Link
                          key={index}
                          to={`/location/${location.id}`}
                          className="block text-blue-200 hover:text-green-300 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {location.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/sector"
                  className="block text-white hover:text-green-300 transition-colors font-medium text-lg"
                  onClick={closeMobileMenu}
                >
                  Sectors
                </Link>

                <Link
                  to="/contact"
                  className="block text-white hover:text-green-300 transition-colors font-medium text-lg"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-blue-700/30">
              <Link
                to="/quote"
                className="block w-full bg-green-400 hover:bg-green-500 text-[#02294D] font-bold py-3 px-6 rounded-full shadow transition text-center"
                onClick={closeMobileMenu}
              >
                Get a Quote ↗
              </Link>
              <div className="mt-4 text-center text-blue-200 text-sm">
                📞 01753 428100
              </div>
            </div>
          </div>
        </div>

        {/* Main Content with Glassy Sidebar */}
        <div className="flex-grow flex items-center relative">
          {/* Glassy Sidebar - Hidden on mobile and tablet */}
          <div className="hidden xl:flex absolute right-40 top-1/2 transform -translate-y-1/2 w-48 bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <div className="space-y-6">
              {[
                'Customer Satisfaction',
                'Emergency Response Team',
                'Fully Insured & Certified',
                'Operating 24/7'
              ].map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-white font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-2xl text-white px-4 sm:px-8 ml-auto mr-auto xl:mr-0 xl:ml-48">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              {title}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-300 mb-4 sm:mb-6">
              {subtitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {showQuoteButton && (
                <Link
                  to="/quote"
                  className="bg-[#02294D] hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow transition flex items-center justify-center gap-2 text-center"
                >
                  Get a Quote <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
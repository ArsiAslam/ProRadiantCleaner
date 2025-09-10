import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LocationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const locations = [
    {
      name: "London",
      id: "london",
      image: "/areaswecoverphotos/london images.jpeg"
    },
    {
      name: "Manchester",
      id: "manchester",
      image: "/areaswecoverphotos/Manchester-Eng.jpg.webp"
    },
    {
      name: "Surrey",
      id: "surrey",
      image: "/surrey hd image.jpg"
    },
    {
      name: "Sussex",
      id: "sussex",
      image: "/sussex images hd.webp"
    },
    {
      name: "Berkshire",
      id: "berkshire",
      image: "/areaswecoverphotos/berkshire images.jpeg"
    },
    {
      name: "Hampshire",
      id: "hampshire",
      image: "/areaswecoverphotos/hampshire.jpeg"
    },
    {
      name: "Buckinghamshire",
      id: "buckinghamshire",
      image: "/areaswecoverphotos/buckinghamshire.jpeg"
    },
    {
      name: "Oxfordshire",
      id: "oxfordshire",
      image: "/areaswecoverphotos/oxfordshire.jpeg"
    },
    {
      name: "Kent",
      id: "kent",
      image: "/areaswecoverphotos/kent.jpeg"
    },
    {
      name: "Essex",
      id: "essex",
      image: "/areaswecoverphotos/essex.webp"
    }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(locations.length / itemsPerSlide);

  const getCurrentSlideLocations = () => {
    const startIndex = currentIndex * itemsPerSlide;
    return locations.slice(startIndex, startIndex + itemsPerSlide);
  };

  const handleDotClick = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-slide functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Areas We Cover
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional cleaning services across South East England
        </p>
      </div>

      {/* Location Cards Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {locations
                  .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                  .map((location, index) => (
                    <div 
                      key={`${slideIndex}-${index}`}
                      className="group cursor-pointer"
                      onClick={() => navigate(`/location/${location.id}`)}
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img loading="lazy"
                            src={location.image}
                            alt={location.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                        </div>
                        {/* Location Name */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {location.name}
                          </h3>
                          <div className="flex items-center text-green-600 font-medium">
                            <span>Available 24/7</span>
                            <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                          </div>
                        </div>
                        {/* Hover Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center mt-12 space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex 
                ? 'w-12 h-3 bg-green-600' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Navigation Arrows */}
      <div className="hidden md:flex justify-between items-center mt-8">
        <button 
          onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalSlides - 1)}
          className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-green-600"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Previous</span>
        </button>
        
        <div className="text-center">
          <span className="text-gray-500 text-sm">
            {currentIndex + 1} / {totalSlides}
          </span>
        </div>
        
        <button 
          onClick={() => setCurrentIndex(currentIndex < totalSlides - 1 ? currentIndex + 1 : 0)}
          className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:text-green-600"
        >
          <span className="font-medium">Next</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LocationSlider;
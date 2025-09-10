import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const LocationSection = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  // Location markers with coordinates matching your map image
  const markers = [
    { id: 1, top: '88%', left: '80%', location: 'London', slug: 'london' },           // South East
    { id: 2, top: '78%', left: '68%', location: 'Surrey', slug: 'surrey' },          // Just SW of London
    { id: 3, top: '25%', left: '60%', location: 'Berkshire', slug: 'berkshire' },    // West of London
    { id: 4, top: '85%', left: '55%', location: 'Hampshire', slug: 'hampshire' },    // South Coast
    { id: 5, top: '40%', left: '50%', location: 'Buckinghamshire', slug: 'buckinghamshire' }, // NW of London
    { id: 6, top: '75%', left: '58%', location: 'Oxfordshire', slug: 'oxfordshire' }, // West of Bucks
    { id: 7, top: '70%', left: '90%', location: 'Kent', slug: 'kent' },              // Far SE
    { id: 8, top: '70%', left: '65%', location: 'Essex', slug: 'essex' },            // East of London
  ];

  const handleMarkerClick = (slug, location) => {
  // Use React Router's navigate function
  navigate(`/location/${slug}`);
  };

  const handleQuoteClick = () => {
    setIsQuoteModalOpen(true);
    // Add your quote modal logic here
    console.log('Opening quote modal');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
            <MapPin className="text-white w-6 h-6" />
          </div>
          <h2 className="text-5xl font-bold text-slate-800 tracking-tight">
            Where You Can Find Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Pro Radiant Cleaners now provide commercial cleaning services across the 
              entire UK. While we remain specialists in the South East — including 
              Oxfordshire, Buckinghamshire, Surrey and London,Manchester — our team can now 
              travel nationwide for specialist projects or long-term contracts.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We support businesses, homes, construction sites and warehouses across 
              the country. Our experienced teams are based in Luton, Swindon, Oxford, 
              Reading, West London and surrounding regions, and we now serve clients 
              from Cornwall to Scotland.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              If you're looking for reliable, high-quality cleaning services, you're in 
              the right place. No matter where you're located in the UK, we're ready to 
              support your cleaning needs.
            </p>

            <div className="flex gap-4 pt-8">
              <Link
                to="/quote"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-2"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Interactive UK Map */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Map Image - Clean and flat */}
              <img loading="lazy" 
                src="/map-removebg-preview.png" 
                alt="UK Map showing service locations" 
                className="w-full h-auto"
              />

              {/* Interactive Location Markers */}
              {markers.map((marker) => (
                <div
                  key={marker.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    top: marker.top,
                    left: marker.left
                  }}
                  onClick={() => handleMarkerClick(marker.slug, marker.location)}
                  title={`Go to ${marker.location}`}
                >
                  {/* Clean, minimal marker */}
                  <div className="w-6 h-6 bg-white border-3 border-blue-700 rounded-full transition-all duration-200 hover:scale-110 flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                  </div>
                  
                  {/* Simple tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {marker.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-slate-50 to-transparent rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default LocationSection;
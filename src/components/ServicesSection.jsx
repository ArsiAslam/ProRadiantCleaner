import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, Clock, Users, Award } from 'lucide-react';

// Service data with detailed content for each service
export const serviceData = {
  'commercial-cleaning': {
    title: 'The Best Commercial Cleaning Solutions',
    subtitle: 'Professional Office & Business Cleaning Services',
    heroImage: '/commercialcleaning.png',
    description: 'We provide comprehensive commercial cleaning services that keep your workplace spotless and productive with our experienced team covering offices, retail spaces, and business facilities.',
    features: [
      'Daily office cleaning and maintenance',
      'Floor care and carpet cleaning',
      'Restroom sanitization',
      'Window and glass cleaning',
      'Waste management',
      'Deep cleaning services'
    ],
    benefits: [
      'Improved employee productivity',
      'Professional business image',
      'Healthier work environment',
      'Cost-effective solutions',
      'Flexible scheduling',
      'Experienced cleaning team'
    ],
    serviceAreas: ['Offices', 'Retail Stores', 'Restaurants', 'Medical Facilities', 'Educational Institutions'],
    testimonials: [
      {
        name: 'Sarah Johnson',
        company: 'Tech Solutions Ltd',
        text: 'Exceptional service! Our office has never looked better.',
        rating: 5
      },
      {
        name: 'Mike Chen',
        company: 'Downtown Restaurant',
        text: 'Professional, reliable, and thorough cleaning every time.',
        rating: 5
      }
    ]
  },
  'specialist-cleaning': {
    title: 'Expert Specialist Cleaning Solutions',
    subtitle: 'Specialized Services for Unique Cleaning Challenges',
    heroImage: '/specialistcleaning.png',
    description: 'We provide specialized cleaning services for delicate and complex requirements with precision and care using advanced equipment and certified techniques.',
    features: [
      'High-level cleaning and access',
      'Industrial equipment cleaning',
      'Biohazard cleanup',
      'Pressure washing services',
      'Graffiti removal',
      'Emergency cleaning response'
    ],
    benefits: [
      'Expert handling of specialized equipment',
      'Safety-first approach',
      'Compliance with regulations',
      'Emergency response availability',
      'Certified technicians',
      'Custom solutions'
    ],
    serviceAreas: ['Industrial Sites', 'Healthcare Facilities', 'Laboratories', 'Manufacturing Plants', 'Warehouses'],
    testimonials: [
      {
        name: 'Dr. Amanda Lee',
        company: 'Research Laboratory',
        text: 'Their attention to detail and safety protocols are outstanding.',
        rating: 5
      }
    ]
  },
  'property-cleaning': {
    title: 'Complete Property Management Solutions',
    subtitle: 'Comprehensive Property Maintenance & Cleaning Services',
    heroImage: '/Propertycleaning.png',
    description: 'We provide comprehensive cleaning services to maintain your properties in pristine condition covering residential, commercial and mixed-use developments.',
    features: [
      'Tenant turnover cleaning',
      'Common area maintenance',
      'Exterior cleaning services',
      'Landscaping support',
      'Emergency cleanup',
      'Regular maintenance schedules'
    ],
    benefits: [
      'Increased property value',
      'Faster tenant turnover',
      'Reduced maintenance costs',
      'Professional property image',
      'Tenant satisfaction',
      '24/7 emergency support'
    ],
    serviceAreas: ['Residential Properties', 'Commercial Buildings', 'Retail Centers', 'Apartment Complexes', 'Office Buildings'],
    testimonials: [
      {
        name: 'Robert Smith',
        company: 'Property Management Co.',
        text: 'They help us maintain high standards across all our properties.',
        rating: 5
      }
    ]
  },
  'construction-cleaning': {
    title: 'Professional Construction Cleaning Solutions',
    subtitle: 'Post-Construction Cleanup & Site Preparation Services',
    heroImage: '/back-photo.png',
    description: 'We provide professional post-construction cleanup services to make your spaces move-in ready with thorough debris removal and final cleaning.',
    features: [
      'Debris and dust removal',
      'Window and fixture cleaning',
      'Floor preparation and cleaning',
      'Paint and adhesive removal',
      'Final inspection cleaning',
      'Site safety compliance'
    ],
    benefits: [
      'Move-in ready spaces',
      'Professional finish',
      'Safety compliance',
      'Time-saving solutions',
      'Expert equipment',
      'Quality assurance'
    ],
    serviceAreas: ['New Construction', 'Renovations', 'Commercial Build-outs', 'Residential Projects', 'Industrial Sites'],
    testimonials: [
      {
        name: 'Construction Manager',
        company: 'BuildRight Ltd',
        text: 'They consistently deliver quality post-construction cleanup.',
        rating: 5
      }
    ]
  },
  'disinfection-cleaning': {
    title: 'Advanced Disinfection & Sanitization Solutions',
    subtitle: 'Professional Health & Safety Cleaning Services',
    heroImage: '/disinfectioncleaning1.png',
    description: 'We provide professional disinfection services to ensure safe and healthy environments using hospital-grade disinfectants and advanced sanitization techniques.',
    features: [
      'Hospital-grade disinfectants',
      'Electrostatic spraying',
      'Air purification systems',
      'Surface decontamination',
      'Biohazard cleanup',
      'Compliance certification'
    ],
    benefits: [
      'Elimination of harmful pathogens',
      'Peace of mind',
      'Regulatory compliance',
      'Reduced illness transmission',
      'Professional certification',
      'Emergency response'
    ],
    serviceAreas: ['Healthcare Facilities', 'Schools', 'Offices', 'Public Buildings', 'Transportation'],
    testimonials: [
      {
        name: 'Dr. Jennifer Walsh',
        company: 'Medical Center',
        text: 'Their disinfection protocols exceed industry standards.',
        rating: 5
      }
    ]
  },
  'carpet-cleaning': {
    title: 'Professional Carpet Cleaning Solutions',
    subtitle: 'Deep Cleaning for Fresh, Pristine Carpets',
    heroImage: '/carpetcleaning.png',
    description: 'We provide expert carpet cleaning services to restore and maintain your carpets using advanced techniques and eco-friendly solutions.',
    features: [
      'Deep steam cleaning',
      'Stain removal treatments',
      'Odor elimination',
      'Carpet protection application',
      'Fast drying technology',
      'Eco-friendly solutions'
    ],
    benefits: [
      'Extended carpet life',
      'Improved air quality',
      'Stain and odor removal',
      'Professional appearance',
      'Health benefits',
      'Cost-effective maintenance'
    ],
    serviceAreas: ['Offices', 'Hotels', 'Retail Stores', 'Healthcare', 'Educational Facilities'],
    testimonials: [
      {
        name: 'Hotel Manager',
        company: 'Grand Hotel',
        text: 'Our carpets look brand new after their service.',
        rating: 5
      }
    ]
  }
};

// Modified Hero Section that accepts props
const DynamicHeroSection = ({ serviceData: service }) => {
  return (
    <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service?.heroImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Navigation Bar - Same as your original */}
        <nav className="px-8 py-8 flex items-center justify-between bg-blue-900/90 backdrop-blur-sm rounded-t-3xl">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-blue-600 rounded-full relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="text-white">
                <div className="font-bold text-xl">
                  <span className="text-green-400">PROACTIVE</span>
                </div>
                <div className="font-bold text-xl -mt-1">
                  <span className="text-white">CLEANERS</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">
              Home
            </a>
            <a href="#about" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">
              About Us
            </a>
            <a href="#services" className="text-green-400 hover:text-green-300 transition-colors font-medium cursor-pointer">
              Services
            </a>
            <a href="#location" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">
              Locations
            </a>
            <a href="#sectors" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">
              Sectors
            </a>
            <a href="#contact" className="text-white hover:text-green-300 transition-colors font-medium cursor-pointer">
              Contact
            </a>
            <a href="#quote" className="bg-green-400 hover:bg-green-500 text-blue-900 font-bold py-2 px-6 rounded-full shadow transition flex items-center gap-2">
              Get a Quote <span aria-hidden="true">↗</span>
            </a>
          </div>
          
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Main Content with Glassy Sidebar */}
        <div className="flex-grow flex items-center relative">
          {/* Glassy Sidebar - Same as your original */}
          <div className="hidden lg:flex absolute right-40 top-1/2 transform -translate-y-1/2 w-48 bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <div className="space-y-6">
              {[
                'Customer Satisfaction',
                'Emergency Response Team',
                'Fully Insured & Certified',
                'Operating 24/7'
              ].map((item, index) => (
                <div key={index} className="group flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                  <span className="text-white font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Content - Dynamic based on service */}
          <div className="max-w-2xl text-white px-8 ml-auto mr-auto lg:mr-0 lg:ml-48">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {service?.title || 'The Best Cleaning Service Solutions'}
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-green-300 mb-6">
              {service?.subtitle || 'Quality Cleaning for Homes, Businesses & Sites'}
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              {service?.description || 'We provide bespoke cleaning solutions & services that exceed your expectations covering the Residential, Commercial, Specialist & Construction Sectors.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Get a Quote
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold transition-colors border border-white/30">
                <Phone className="w-5 h-5" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Details Components (without header/hero)
const ServiceDetails = ({ service }) => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Service</h2>
          <p className="text-lg text-gray-600 mb-8">{service.description}</p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800">Expert Team</h3>
              <p className="text-sm text-gray-600">Trained professionals</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-800">Certified</h3>
              <p className="text-sm text-gray-600">Industry standards</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <span>01753 428151</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <span>sales@proactivecleaners.co.uk</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-blue-600 mr-3" />
              <span>Mon-Fri: 09:00 - 18:00</span>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = ({ service }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Features</h3>
          <div className="space-y-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Benefits</h3>
          <div className="space-y-4">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceAreas = ({ service }) => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-12">Service Areas</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {service.serviceAreas.map((area, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-800">{area}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection = ({ service }) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Client Testimonials</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {service.testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
            <div>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 bg-blue-600">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
      <p className="text-xl text-blue-100 mb-8">Contact us today for a free consultation and quote</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Free Quote
        </button>
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
          Call Now: 01753 428151
        </button>
      </div>
    </div>
  </section>
);

// Main Service Page Component (without header/hero)
const ServicePage = ({ serviceKey, onBack }) => {
  const service = serviceData[serviceKey];

  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen">
      {/* Service Hero Section */}
      <DynamicHeroSection serviceData={service} />

      {/* Enhanced visually rich details section below hero */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-8 gap-8">
          <div className="flex-1">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold mb-4">Our Services</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Pro-Radiant Cleaners For {service.title}</h2>
            <p className="text-lg text-gray-700 mb-4">There are a wide variety of options to choose from when considering our company for {service.title.toLowerCase()}. These options include:</p>
            <div className="bg-gray-50 rounded-2xl p-6 mb-4 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Contract Cleaning Services</h3>
                <p className="text-md text-gray-600 mb-4">Have your communal spaces regularly cleaned with our contract cleaning services. Please contact us to get a no-obligation, bespoke quote.</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500 mr-1"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <img src={service.heroImage} alt={service.title} className="rounded-2xl w-full max-w-xs object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back button */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Services
        </button>
      </div>

      {/* Service Details */}
      <ServiceDetails service={service} />

      {/* Features & Benefits */}
      <FeaturesSection service={service} />

      {/* Service Areas */}
      <ServiceAreas service={service} />

      {/* Testimonials */}
      <TestimonialsSection service={service} />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

// Updated Services Section Component with Navigation
const ServicesSection = ({ HeroSection }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();
  const { serviceKey } = useParams();
  const location = useLocation();

  // If URL has /services/:serviceKey, use that as selectedService
  const selectedService = serviceKey || null;

  const services = [
    {
      title: 'Commercial Cleaning',
      description: 'Professional cleaning services to keep your business clean, productive, and welcoming.',
      icon: '🏢',
      backgroundImage: '/commercialcleaning.png',
      key: 'commercial-cleaning'
    },
    {
      title: 'Specialist Cleaning',
      description: 'Expert services for delicate and specialized cleaning requirements with precision and care.',
      icon: '🧼',
      backgroundImage: '/specialistcleaning.png',
      key: 'specialist-cleaning'
    },
    {
      title: 'Property Cleaning',
      description: 'Complete cleaning solutions to maintain pristine, fresh, and presentable properties effortlessly.',
      icon: '🏠',
      backgroundImage: '/Propertycleaning.png',
      key: 'property-cleaning'
    },
    {
      title: 'Construction Cleaning',
      description: 'Post-construction cleanup removing dust, debris, and ensuring spaces are move-in ready.',
      icon: '🚧',
      backgroundImage: '/back-photo.png',
      key: 'construction-cleaning'
    },
    {
      title: 'Disinfection Cleaning',
      description: 'Thorough disinfection eliminating germs to create safe, healthy, and sanitized spaces.',
      icon: '🦠',
      backgroundImage: '/disinfectioncleaning1.png',
      key: 'disinfection-cleaning'
    },
    {
      title: 'Carpet Cleaning',
      description: 'Deep cleaning carpets to remove stains, allergens, and restore their original freshness.',
      icon: '🧹',
      backgroundImage: '/carpetcleaning.png',
      key: 'carpet-cleaning'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {!selectedService ? (
          <>
            {/* Homepage Hero Section */}
            {HeroSection && <HeroSection />}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional cleaning solutions tailored to your specific needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} onClick={() => navigate(`/services/${service.key}`)} style={{ cursor: 'pointer' }}>
                  <ServiceCard
                    service={service}
                    index={index}
                    hoveredCard={hoveredCard}
                    setHoveredCard={setHoveredCard}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <ServicePage serviceKey={selectedService} onBack={() => navigate('/services')} />
          </div>
        )}
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, hoveredCard, setHoveredCard, onClick }) => {
  return (
    <div
      className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 h-80 cursor-pointer ${
        hoveredCard === index ? 'scale-105 z-10' : 'scale-100'
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${service.backgroundImage})`,
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-all duration-500 ${
          hoveredCard === index ? 'bg-black/40' : 'bg-black/60'
        }`}
      ></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 text-white">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl mb-6 transition-all duration-500 ${
            hoveredCard === index ? 'translate-y-0 opacity-100 scale-110' : 'translate-y-4 opacity-80'
          }`}
        >
          {service.icon}
        </div>
        
        {/* Text Content */}
        <div>
          <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:translate-x-2">
            {service.title}
          </h3>
          <p
            className={`text-white/90 transition-all duration-500 ${
              hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {service.description}
          </p>
        </div>
        
        {/* Learn More Button */}
        <div
          className={`flex justify-end transition-all duration-500 ${
            hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button className="flex items-center gap-2 text-white font-medium group/btn hover:text-blue-300">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
      
      {/* Hover Effect Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-10 -left-10 w-20 h-20 rounded-full bg-white/10 transition-all duration-700 ${
            hoveredCard === index ? 'scale-150 opacity-0' : 'scale-0 opacity-0'
          }`}
        ></div>
        <div
          className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-white/10 transition-all duration-700 ${
            hoveredCard === index ? 'scale-150 opacity-0' : 'scale-0 opacity-0'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ServicesSection;
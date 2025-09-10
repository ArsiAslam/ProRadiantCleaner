import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { serviceData } from '../components/ServicesSection';
import HeroNavbar from '../components/HeroNavbar';
import ProcessSection from '../components/ProcessSection';
import GetQuoteForm from '../components/GetQuoteForm';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import TestimonialsSection from '../components/TestimonialCard';
import ContactSection from '../components/ContactSection';
import { Contact } from 'lucide-react';
import FAQSection from '../components/FAQSection';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceData[serviceId];

  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen">
      {/* Service-specific Hero Section with Home Theme */}
      <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${service.heroImage}')` }}>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Shared Navigation Bar */}
          <HeroNavbar />
          {/* Hero Content */}
          <div className="max-w-2xl text-white px-8 ml-auto mr-auto lg:mr-0 lg:ml-48">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{service.title}</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-green-300 mb-6">{service.subtitle}</h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">Get a Quote</Link>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold transition-colors border border-white/30">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm16 0h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Services
        </button>
      </div>

      {/* Enhanced Service Details Section */}
      <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl">
              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Why Choose Pro Radiant Cleaners For{" "}
                <span className="text-blue-600">{service?.title || "Professional Cleaning"}</span>
              </h2>
              
              {/* Subtitle */}
              <h3 className="text-xl lg:text-2xl font-semibold text-green-700 mb-6 leading-relaxed">
                {service?.subtitle || "Excellence in Every Clean"}
              </h3>
              
              {/* Description */}
              <div className="text-lg text-gray-700 leading-relaxed mb-8">
                <p>
                  {service?.description || "Experience unmatched quality and reliability with our professional cleaning services tailored to your specific needs. Our expert team delivers consistent results that exceed expectations."}
                </p>
              </div>
              
              {/* Call to Action Text */}
              <p className="text-xl font-semibold text-gray-900 mb-8">
                Get a personalized, no-obligation quote tailored to your specific requirements and budget.
              </p>
              
              {/* Feature List */}
              {service?.features && service.features.length > 0 && (
                <div className="space-y-4 mb-10">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-green-500 rounded-full p-1 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-lg font-medium text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={"/quote"} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Get a Quote
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  Call Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={service?.heroImage || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=95"}
                  alt={service?.title || "Professional Cleaning Service"} 
                  className="w-full h-full object-cover"
                  style={{
                    aspectRatio: '16/9',
                    minHeight: '500px'
                  }}
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-3xl opacity-10 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-500 rounded-3xl opacity-10 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>

      <ProcessSection />
      <GetQuoteForm />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
};

export default ServicePage;

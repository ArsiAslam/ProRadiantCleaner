import React from 'react';
import HeroSection from '../components/HeroSection';
import GetQuoteForm from '../components/GetQuoteForm';
import GallerySection from '../components/GallerySection';
import ServicesSection from '../components/ServicesSection';
import FAQSection from '../components/FAQSection';
import IndustriesSection from '../components/IndustriesSection';

const QuotePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - use homepage HeroSection with custom content */}
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1632951933372-b64aeb1b5bee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHF1b3RlJTIwZm9yJTIwYWxsJTIwY2xlYW5pbmd8ZW58MHx8MHx8fDA%3D"
        title="Request a Free Quote"
        subtitle="Get a personalized cleaning solution for your business or property."
        description="Fill out our quick form and our team will provide a bespoke quote tailored to your needs."
        showQuoteButton={false}
      />

      {/* Quote Details Section */}
      <GetQuoteForm />

      {/* Section 1: Bespoke Cleaning Service For Your Needs */}
      <section className="max-w-6xl mx-auto my-12 p-0 flex flex-col md:flex-row items-center">
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-bold mb-6">Bespoke Cleaning Service For Your Needs</h2>
          <p className="text-lg text-gray-700 mb-4">At pro-Radiant Cleaner, we offer a wide variety of commercial, construction and industrial cleaning services. This includes rapid-response disinfection and decontamination cleaning as well as emergency call-outs. From a one-off builder’s clean to daily disinfection cleaning at medical clinics, our team of specialists are here to help.</p>
          <p className="text-lg text-gray-700">As all of our services are bespoke and designed around your needs, we do not have a price list. However, after understanding your requirements, we will create a competitive quote that is exclusive to your business. By filling in this quick quote form, we’ll have a greater understanding of precisely what you are looking for to be able to provide a quote. In some circumstances, we may need to conduct a free site visit before giving you a final price. If you’d like more information about our services before receiving a quote, then please request a free callback.</p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://images.unsplash.com/photo-1742483359033-13315b247c74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVzcG9rZSUyMGNsZWFuaW5nfGVufDB8fDB8fHww" alt="Bespoke Cleaning" className="rounded-2xl w-full max-w-md object-cover" loading="lazy" />
        </div>
      </section>

      {/* Section 2: Quotes For All Cleaning Services */}
      <section className="max-w-6xl mx-auto my-12 p-0 flex flex-col md:flex-row items-center md:flex-row-reverse">
        <div className="flex-1 flex justify-center">
          <img src="https://plus.unsplash.com/premium_photo-1678718604563-5268de669666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVvdGUlMjBmb3IlMjBhbGwlMjBjbGVhbmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Quotes For Cleaning" className="rounded-2xl w-full max-w-md object-cover" loading="lazy" />
        </div>
        <div className="flex-1 p-8">
          <h2 className="text-4xl font-bold mb-6">Quotes For All Cleaning Services</h2>
          <p className="text-lg text-gray-700 mb-4">We can offer a quick quote for a range of cleaning services, whether as a one-off clean or regular, ongoing contract. Some of the services you can receive a free quote for include;</p>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Builder’s clean</li>
            <li>End of tenancy clean</li>
            <li>Office and site cleaning</li>
            <li>School cleaning</li>
            <li>GP and dental surgery cleaning</li>
            <li>Disinfection cleaning and infection control</li>
            <li>Decontamination cleaning and bio-fogging</li>
            <li>Extreme or Trauma cleans</li>
            <li>Window cleaning</li>
          </ul>
        </div>
      </section>
      <ServicesSection />
      <GallerySection />
      <IndustriesSection />
      <FAQSection />
      
    </div>
  );
};

export default QuotePage;

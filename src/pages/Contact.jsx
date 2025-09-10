import React from 'react';
import HeroSection from '../components/HeroSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialCard';
import ServicesSection from '../components/ServicesSection';

const Contact = () => (
  <>
    <HeroSection
      backgroundImage="/contact.png"
      title="Contact Pro Radiant Cleaner"
      subtitle="We'd Love To Hear From You"
      description="Reach out to our team for any questions, quotes, or support. We're here to help you with all your cleaning needs."
      showQuoteButton={false}
    />
    <ContactSection />
    <TestimonialsSection />
    <ServicesSection />
  </>
);

export default Contact;
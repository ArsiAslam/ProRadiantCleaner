import React from 'react'
import HeroSection from '../components/HeroSection'
import LocationSection from '../components/LocationSection'
import LocationSlider from '../components/LocationSlider'
const LocationPage = () => {
  return (
    <div>
      <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1800&q=80"
      title="Find Your Location"
      subtitle="We'd Love To Hear From You"
      description="Reach out to our team for any questions, quotes, or support. We're here to help you with all your cleaning needs."
      showQuoteButton={false}
    />
    <LocationSection />
    <LocationSlider />
    </div>
  )
}

export default LocationPage

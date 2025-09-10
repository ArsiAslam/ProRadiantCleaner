// pages/ServicePage.js
import { useParams, useNavigate } from 'react-router-dom';
import DynamicHeroSection from '../components/DynamicHeroSection';
// import other service detail components...

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceData[serviceId];
  
  if (!service) return <div>Service not found</div>;

  return (
    <div className="min-h-screen">
      <DynamicHeroSection serviceData={service} />
      
      <div className="max-w-6xl mx-auto px-6 py-4">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Services
        </button>
      </div>
      
      <ServiceDetails service={service} />
      <FeaturesSection service={service} />
      <ServiceAreas service={service} />
      <TestimonialsSection service={service} />
      <CTASection />
    </div>
  );
};
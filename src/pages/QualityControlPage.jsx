import HeroSection from '../components/HeroSection';

const QualityControlPage = () => (
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1465101178521-c1a2b1c6413c?auto=format&fit=crop&w=1800&q=80"
      title="Quality Control"
      subtitle="Excellence in Every Detail"
      description="Learn about our rigorous quality control processes that ensure top-tier cleaning results every time."
      showQuoteButton={false}
    />
    <div className="max-w-4xl mx-auto py-12 grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">Inspection Protocols</h3>
        <p className="text-gray-700">Every job is inspected to meet our high standards before completion.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">Client Feedback</h3>
        <p className="text-gray-700">We actively seek and respond to client feedback to improve our services.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2">
        <h3 className="text-xl font-bold mb-4">Continuous Improvement</h3>
        <p className="text-gray-700">Our team is committed to ongoing training and process refinement for quality assurance.</p>
      </div>
    </div>
  </div>
);

export default QualityControlPage;

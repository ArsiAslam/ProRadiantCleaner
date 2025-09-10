import HeroSection from '../components/HeroSection';

const HealthSafetyPage = () => (
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1800&q=80"
      title="Health and Safety"
      subtitle="Safety First, Always"
      description="Discover our commitment to health and safety for our team, clients, and the environments we clean."
      showQuoteButton={false}
    />
    <div className="max-w-4xl mx-auto py-12 grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">Certified Procedures</h3>
        <p className="text-gray-700">All cleaning is performed according to certified health and safety standards.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-xl font-bold mb-4">Staff Training</h3>
        <p className="text-gray-700">Our staff receive regular training to ensure safe and effective cleaning practices.</p>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 md:col-span-2">
        <h3 className="text-xl font-bold mb-4">Risk Management</h3>
        <p className="text-gray-700">We proactively identify and manage risks to protect everyone involved.</p>
      </div>
    </div>
  </div>
);

export default HealthSafetyPage;

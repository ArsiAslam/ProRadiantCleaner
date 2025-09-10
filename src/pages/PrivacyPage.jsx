import HeroSection from '../components/HeroSection';

const PrivacyPage = () => (
  <div>
    <HeroSection
      backgroundImage="/privacy.png"
      title="Privacy & GDPR Policy"
      subtitle="Your Data, Our Responsibility"
      description="We are committed to safeguarding your personal information with the highest standards of security and transparency."
      showQuoteButton={false}
    />

    {/* Main Content */}
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">🔒 Data Protection</h3>
          <p className="text-gray-700 leading-relaxed">
            We implement state-of-the-art encryption and security protocols to ensure your
            data remains safe and confidential at all times.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">📜 GDPR Compliance</h3>
          <p className="text-gray-700 leading-relaxed">
            Our procedures strictly comply with GDPR guidelines, ensuring fairness,
            transparency, and accountability in data processing.
          </p>
        </div>

        {/* Full-width card */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl shadow-xl p-10 md:col-span-2 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">⚖️ Your Rights</h3>
          <p className="text-gray-700 leading-relaxed">
            You are entitled to request access, updates, or deletion of your personal 
            information at any time. We ensure that your rights are respected and 
            protected under GDPR.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPage;

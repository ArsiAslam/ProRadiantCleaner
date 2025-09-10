import { Phone, ArrowUpRight, User } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';
import { useState } from 'react';

const ProactiveCleanersAbout = () => {

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <User size={20} />
          </div>
          <span className="text-gray-700 font-medium">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              The Story Of<br />
              Pro Radiant Cleaners
            </h1>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our founder spent many years working in the construction and commercial
                sectors, with an extensive skillset including surveying, project management,
                design and facilities management.
              </p>

              <p>
                Witnessing first-hand the many frustrations and logistical challenges
                surrounding cleaning across a range of diverse industries and sites, our
                founder saw a chance to create a service that could make a difference.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get a Quote
                <ArrowUpRight size={18} />
              </button>

              {/* WhatsApp button removed, only floating button in App.jsx */}
            </div>
          </div>

          {/* Right Images Grid - Three Images */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-4">
              <div className="relative rounded-lg overflow-hidden max-w-md w-full">
                        <img
                          src="/back-photo.png"
                          alt="Pro Radiant Cleaners at work"
                          className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1677234147127-36046f5fbe78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsZWFuaW5nfGVufDB8fDB8fHww"
                    alt="Team at work"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Cleaning in action"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="fixed bottom-6 left-6">
          <button className="bg-white shadow-lg border border-gray-200 p-3 rounded-full hover:bg-gray-50 transition-colors">
            <ArrowUpRight size={20} className="text-gray-600 rotate-45" />
          </button>
        </div>
      </div>
      {/* Quote Modal */}
      <QuoteModal open={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
};

export default ProactiveCleanersAbout;
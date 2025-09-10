import React from "react";
import HeroSection from "../components/HeroSection";
import { FileText, ShieldCheck, ArrowUpRight } from "lucide-react";

// Hero background for Terms & Privacy page
const termsHeroBg =
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80";

const TermsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={termsHeroBg}
        title="Terms & Privacy Policy"
        subtitle="Pro-Radiant Cleaners Ltd"
        description="Your privacy and trust are important to us. Please read our terms and conditions and how we protect your data."
        showQuoteButton={false}
      />

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-12">
        {/* Header Icon */}
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-blue-600 text-white p-2 rounded-full">
            <FileText size={20} />
          </div>
          <span className="text-gray-700 font-medium">Terms & Privacy</span>
        </div>

        {/* Privacy Policy Section */}
        <section className="bg-white p-6 md:p-10 rounded-xl shadow-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <ShieldCheck className="text-green-500" /> Privacy Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Pro-Radiant Cleaners Ltd are committed to protecting and respecting
            your privacy. This policy sets out the basis on which any personal
            data we collect from you, or that you provide to us, will be
            processed by us.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Information We Collect
            </h3>
            <p className="text-gray-600">
              We collect data you provide (such as your name, email, phone
              number, and address), technical data during your visits (such as
              IP address, browser type, pages visited), and information from
              third-party partners. This helps us deliver our cleaning services
              effectively.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              How We Use Your Data
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To communicate with you and provide requested services.</li>
              <li>To inform you of updates, offers, and important changes.</li>
              <li>To improve our website and ensure a safe browsing experience.</li>
              <li>To measure the effectiveness of our marketing and advertising.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Disclosure of Information
            </h3>
            <p className="text-gray-600">
              We may share your personal data with trusted partners,
              subcontractors, advertisers, or analytics providers when necessary
              for service delivery, legal compliance, or fraud protection.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Your Rights</h3>
            <p className="text-gray-600">
              You have rights under UK data protection law, including access,
              rectification, erasure, restriction of processing, portability,
              and objection. You can learn more via the{" "}
              <a
                href="https://ico.org.uk/for-the-public/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Information Commissioner’s Office (ICO)
              </a>
              .
            </p>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="bg-white p-6 md:p-10 rounded-xl shadow-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="text-blue-500" /> Terms & Conditions
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Pro-Radiant Cleaners Ltd operates under a 100% satisfaction
              guarantee. Please read the following terms carefully:
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Payment, Cancellation & Refunds
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Payment is taken prior to each clean and continues until service
                cancellation.
              </li>
              <li>
                We require at least <strong>48 hours’ notice</strong> for
                cancellations.
              </li>
              <li>
                Refunds or re-cleans will be arranged if you report any issue
                within 48 hours of service.
              </li>
              <li>
                Payment schedules (weekly, fortnightly, or monthly) can be
                arranged on request.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800">
              Data Retention
            </h3>
            <p>
              We only retain your personal information for as long as necessary
              to provide our services, comply with legal obligations, or as set
              out in our data retention policy.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p>
              For any queries, please contact Pro-Radiant Cleaners Ltd:
              <br />
              Phone: 01753 428151 <br />
              Email: sales@proradiantcleaners.co.uk <br />
              Address: Futureworks, 2 Brunel Way, Slough, SL1 1XL, UK
            </p>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-6 left-6">
          <button className="bg-white shadow-lg border border-gray-200 p-3 rounded-full hover:bg-gray-50 transition-colors">
            <ArrowUpRight size={20} className="text-gray-600 rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

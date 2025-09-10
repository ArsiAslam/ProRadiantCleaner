import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const faqData = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We provide comprehensive cleaning solutions including commercial office cleaning, residential house cleaning, specialist deep cleaning, post-construction cleanup, and maintenance services across the UK. Our experienced team handles everything from daily office maintenance to one-time deep cleaning projects.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
      category: "Services"
    },
    {
      id: 2,
      question: "How do I request a quote?",
      answer: "Getting a quote is simple and free. You can use our online quote form, call us directly at our dedicated phone line, or send us an email with your requirements. We typically respond within 24 hours with a detailed, no-obligation estimate tailored to your specific needs.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      category: "Pricing"
    },
    {
      id: 3,
      question: "Are your staff insured and trained?",
      answer: "Absolutely. All our cleaning professionals are fully insured, bonded, and undergo comprehensive background checks. They receive ongoing training in the latest cleaning techniques, safety protocols, and use of eco-friendly products to ensure the highest standards of service.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
      category: "Safety"
    },
    {
      id: 4,
      question: "What areas do you cover?",
      answer: "We provide cleaning services throughout the UK, with dedicated teams in major cities and surrounding areas. Our coverage includes London, Manchester, Birmingham, Leeds, Glasgow, and many other locations. Contact us to confirm service availability in your specific area.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80",
      category: "Coverage"
    },
    {
      id: 5,
      question: "Do you use eco-friendly products?",
      answer: "Yes, we prioritize environmental responsibility by using certified eco-friendly and non-toxic cleaning products wherever possible. Our green cleaning solutions are safe for your family, pets, and the environment while still delivering exceptional cleaning results.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&q=80",
      category: "Environment"
    },
    {
      id: 6,
      question: "How flexible are your scheduling options?",
      answer: "We understand that every client has unique needs, so we offer flexible scheduling options including one-time cleanings, weekly, bi-weekly, monthly services, and emergency cleaning. We can accommodate evening and weekend appointments to fit your busy lifestyle.",
      image: "/11.webp",
      category: "Scheduling"
    }
  ];

  const categoryColors = {
    Services: 'bg-blue-100 text-blue-800',
    Pricing: 'bg-green-100 text-green-800',
    Safety: 'bg-red-100 text-red-800',
    Coverage: 'bg-purple-100 text-purple-800',
    Environment: 'bg-emerald-100 text-emerald-800',
    Scheduling: 'bg-orange-100 text-orange-800'
  };

  return (
    <div>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80"
        title="Frequently Asked Questions"
        subtitle="Answers to Your Common Queries"
        description="Find answers to the most frequently asked questions about our cleaning services and company policies."
        showQuoteButton={false}
      />
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've compiled answers to the most common questions about our services, 
              processes, and policies to help you make informed decisions.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {faqData.map((faq, index) => (
              <div 
                key={faq.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={faq.image} 
                    alt={faq.question}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[faq.category]}`}>
                      {faq.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Question Icon */}
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Answer */}
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our friendly team is here to help. Get in touch with us for personalized assistance 
                and detailed information about our cleaning services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg">
                  Contact Us Today
                </Link>
                <Link to="/quote" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
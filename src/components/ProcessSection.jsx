import React from 'react'

const ProcessSection = () => {
    // Example steps data
    const [hoveredStep, setHoveredStep] = React.useState(null);
    const steps = [
        {
            number: 1,
            title: 'Book Your Service',
            description: 'Contact us to schedule your cleaning service at a time that suits you.',
            icon: <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
            isCenter: false
        },
        {
            number: 2,
            title: 'Site Assessment',
            description: 'We assess your site to understand your requirements and provide a tailored solution.',
            icon: <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M9 17H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4h-2M9 17v2a4 4 0 004 4h2a4 4 0 004-4v-2" /></svg>,
            isCenter: false
        },
        {
            number: 3,
            title: 'Cleaning Process',
            description: 'Our professional team carries out the cleaning process efficiently and thoroughly.',
            icon: <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" /></svg>,
            isCenter: true
        },
        {
            number: 4,
            title: 'Quality Check',
            description: 'We perform a quality check to ensure the highest standards are met.',
            icon: <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
            isCenter: false
        },
        {
            number: 5,
            title: 'Feedback & Support',
            description: 'We welcome your feedback and provide ongoing support for your cleaning needs.',
            icon: <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2M12 15v2m0-6v2m0-6v2" /></svg>,
            isCenter: false
        }
    ];
    return (
    <div>
       {/* Process Section */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            Our Process
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Working Process</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            As a company, we provide a range of professional cleaning services, from hospitality cleaning to emergency cleaning.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Curved Lines - Exactly like in image */}
                        <div className="hidden lg:block absolute inset-0 pointer-events-none">
                            {/* Line 1 to 2 - Curved up */}
                            <svg className="absolute left-[16%] top-[35%] w-[18%] h-20" viewBox="0 0 200 80">
                                <path d="M20 60 Q100 10 180 30" stroke="#9CA3AF" strokeWidth="3" strokeDasharray="8,8" fill="none" />
                            </svg>
                            {/* Line 2 to 3 - Curved down */}
                            <svg className="absolute left-[34%] top-[15%] w-[18%] h-32" viewBox="0 0 200 120">
                                <path d="M20 20 Q100 80 180 100" stroke="#9CA3AF" strokeWidth="3" strokeDasharray="8,8" fill="none" />
                            </svg>
                            {/* Line 3 to 4 - Curved up */}
                            <svg className="absolute left-[52%] top-[35%] w-[18%] h-20" viewBox="0 0 200 80">
                                <path d="M20 60 Q100 10 180 30" stroke="#9CA3AF" strokeWidth="3" strokeDasharray="8,8" fill="none" />
                            </svg>
                            {/* Line 4 to 5 - Curved down */}
                            <svg className="absolute left-[70%] top-[15%] w-[18%] h-32" viewBox="0 0 200 120">
                                <path d="M20 20 Q100 80 180 100" stroke="#9CA3AF" strokeWidth="3" strokeDasharray="8,8" fill="none" />
                            </svg>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`text-center relative transition-all duration-300 cursor-pointer group ${index === 0 || index === 4 ? 'lg:mt-12' :
                                        index === 1 || index === 3 ? 'lg:mt-0' : 'lg:mt-24'
                                        }`}
                                    onMouseEnter={() => setHoveredStep(index)}
                                    onMouseLeave={() => setHoveredStep(null)}
                                >
                                    {/* Hover Content Tooltip */}
                                    {hoveredStep === index && (
                                        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-3 rounded-lg shadow-lg w-64 z-20 animate-fade-in">
                                            <p className="text-sm">{step.description}</p>
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                                        </div>
                                    )}

                                    <div className={`relative mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 ${step.isCenter ? 'w-40 h-40' : 'w-32 h-32'
                                        }`}>
                                        {/* Large dotted circle border */}
                                        <div className={`w-full h-full rounded-full border-4 border-dashed border-gray-300 flex items-center justify-center bg-white relative transition-all duration-300 group-hover:border-green-400 group-hover:shadow-xl ${step.isCenter ? 'border-blue-400' : ''
                                            }`}>
                                            {/* Inner circle with icon */}
                                            <div className={`bg-green-50 rounded-full p-4 transition-all duration-300 group-hover:bg-green-100 ${step.isCenter ? 'p-6' : ''
                                                }`}>
                                                {step.icon}
                                            </div>
                                        </div>
                                        {/* Step number */}
                                        <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-green-600 ${step.isCenter ? 'text-xl px-5 py-3' : 'text-lg'
                                            }`}>
                                            {step.number}
                                        </div>
                                    </div>

                                    <h3 className={`font-bold text-gray-800 mb-3 whitespace-pre-line transition-all duration-300 group-hover:text-green-600 ${step.isCenter ? 'text-2xl' : 'text-xl'
                                        }`}>
                                        {step.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Custom CSS for fade in animation */}
                <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
            </section>
    </div>
  )
}

export default ProcessSection

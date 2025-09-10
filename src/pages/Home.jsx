import { useState } from 'react';
import { Star, Phone, Mail, MapPin, ChevronDown } from 'react-feather';
import { Contact, Target } from 'lucide-react';
import { ArrowUpRight, Award, User, Settings, CheckCircle } from 'lucide-react';
import ServicesSection from '../components/ServicesSection';
import HeroSection from '../components/HeroSection';
import GallerySection from '../components/GallerySection';
import LocationSection from '../components/LocationSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialCard';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import ProcessSection from '../components/ProcessSection';
import LocationSlider from '../components/LocationSlider';
import QuoteModal from '../components/QuoteModal';
import IndustriesSection from '../components/IndustriesSection';
import { Link } from 'react-router-dom';

const Home = () => {
    const [hoveredStep, setHoveredStep] = useState(null);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };
    const steps = [
        {
            number: '01',
            title: 'Initial\nConsultation',
            description: 'Understanding your specific cleaning requirements and site assessment',
            icon: (
                <svg className="w-12 h-12" style={{ color: '#02294D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Customised\nPlan',
            description: 'Creating a tailored cleaning plan that meets your specific needs and budget',
            icon: (
                <svg className="w-12 h-12" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.3" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Professional\nCleaning',
            description: 'Our trained professionals carry out the cleaning according to the customized plan',
            icon: (
                <svg className="w-14 h-14" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.36 2.72L20.78 4.14l-1.42 1.42c-.22-.22-.48-.42-.78-.58V9c0 1.1-.9 2-2 2s-2-.9-2-2V4.98c-.3.16-.56.36-.78.58L12.36 4.14 13.78 2.72c1.58-1.58 4.14-1.58 5.72 0zM9 12c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zm3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM6 16.5c0-.83.67-1.5 1.5-1.5S9 15.67 9 16.5 8.33 18 7.5 18 6 17.33 6 16.5zm7.5-1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S12 17.33 12 16.5s.67-1.5 1.5-1.5zm4.5 1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z" />
                </svg>
            ),
            isCenter: true
        },
        {
            number: '04',
            title: 'Quality\nInspection',
            description: 'Thorough quality check to ensure all work meets our high standards',
            icon: (
                <svg className="w-12 h-12" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    <circle cx="12" cy="12" r="3" fill="white" opacity="0.8" />
                </svg>
            )
        },
        {
            number: '05',
            title: 'Feedback and\nFollow-Up',
            description: 'Collecting feedback and ensuring complete satisfaction with our services',
            icon: (
                <svg className="w-12 h-12" style={{ color: '#02294D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.5V12c0-5.52-4.48-10-10-10z" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            )
        }
    ];


    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection />
            <AboutSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Stats Section */}
            <section className="py-20" style={{ background: 'linear-gradient(90deg, #02294D 0%, #02294D 100%)' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Dedicated Attention to Detail Every Step of the Way
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                        <div className="space-y-12">
                            <div className="text-center lg:text-right">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                    <Star className="w-8 h-8" style={{ color: '#02294D' }} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Customer Satisfaction</h3>
                                <p className="text-white leading-relaxed">
                                    At Pro Radiant Cleaner, your satisfaction is our priority, with consistent quality and reliable service every time
                                </p>
                            </div>

                            <div className="text-center lg:text-right">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                    <svg className="w-8 h-8" style={{ color: '#02294D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Fully Insured & Certified</h3>
                                <p className="text-white leading-relaxed">
                                    Ensuring professional, reliable service with complete peace of mind
                                </p>
                            </div>
                        </div>

                        <div className="relative flex justify-center items-center">
                            <div className="bg-transparent rounded-3xl p-8 text-white text-center">
                                <div className="flex justify-center items-center">
                                    <img src="/dedicatedsection(1).webp" alt="Professional Cleaning" className="rounded-2xl shadow-lg object-cover w-[320px] h-[320px] md:w-[400px] md:h-[400px] border-4 border-white" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                                    <Phone className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Emergency Response Team</h3>
                                <p className="text-white leading-relaxed">
                                    Our emergency response team is ready to handle any situation with speed and precision
                                </p>
                            </div>

                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                                    <svg className="w-8 h-8" style={{ color: '#02294D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">Operating 24/7</h3>
                                <p className="text-white leading-relaxed">
                                    Operating 24/7 to provide reliable cleaning services whenever you need them
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="bg-white py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-8">
                        <div className="bg-blue-500 text-white p-2 rounded-full">
                            <Target size={20} />
                        </div>
                        <span className="text-gray-700 font-medium">Why Choose Us</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Side - Images */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Large image - left side */}
                            <div className="relative rounded-2xl overflow-hidden">
                                <img
                                    src="/back-photo.png"
                                    className="w-full h-100 object-cover"
                                />
                            </div>

                            {/* Right column with stats and smaller image */}
                            <div className="space-y-4">
                                {/* Stats card */}
                                <div className="bg-blue-50 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                                    <div className="text-gray-600 font-medium mb-3">Years of Experience</div>
                                    <p className="text-sm text-gray-500 mb-4">
                                        With over 5+ years of experience, we deliver trusted and expert cleaning solutions
                                    </p>
                                    <Link to="/quote" className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 mx-auto transition-colors">
                                        Get a Quote
                                        <ArrowUpRight size={16} />
                                    </Link>
                                </div>

                                {/* Small image */}
                                <div className="relative rounded-2xl overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Professional window cleaning"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Unbeatable Cleaning In Every Sector
                            </h2>

                            <p className="text-gray-600 leading-relaxed">
                                Our experience and expertise mean that quantity surveyors, site
                                managers, office managers, clinic and education decision-makers
                                regularly seek out Pro Radiant Cleaners as they can trust us to deliver.
                            </p>

                            {/* Feature list */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <Award size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">Experts In What We Do</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <User size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">Leading The Way In Accreditations</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <Settings size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">Specialist Services And Equipment</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                                        <CheckCircle size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">Projects Managed To Perfection</span>
                                </div>
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
                    </div>
                </div>
            </section>

            <ProcessSection />

            {/* Gallery Section */}
            <GallerySection />

            {/* Location Section */}
            <LocationSection />
            <LocationSlider />

           <IndustriesSection />
            <TestimonialsSection />
            <ContactSection />
            <FAQSection />
            {/* Quote Modal */}
            <QuoteModal open={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </div>

    );
};

export default Home;
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import HeroNavbar from '../components/HeroNavbar';
import GallerySection from '../components/GallerySection';
import GetQuoteForm from '../components/GetQuoteForm';
import LocationSlider from '../components/LocationSlider';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';

const locationData = {
    london: {
        name: 'London',
        heroImage: '/areaswecoverphotos/london images.jpeg',
        description: 'Professional cleaning services in London. Serving all boroughs and business districts.',
        coordinates: { lat: 51.5074, lng: -0.1278 },
        areas: 'Central London, North London, South London, East London, West London and more.',
        phone: '0207 123456',
        address: 'London Office, 1 Main Street, London, UK',
        hours: {
            'Monday to Friday': '8:00AM to 18:00PM',
            'Sunday': 'Closed'
        }
    },
    manchester: {
        name: 'Manchester',
        heroImage: '/areaswecoverphotos/Manchester-Eng.jpg.webp',
        description: 'Professional cleaning services in Manchester and surrounding areas.',
        coordinates: { lat: 53.4808, lng: -2.2426 },
        areas: 'Manchester, Salford, Stockport, and more.',
        phone: '0161 123456',
        address: 'Manchester Office, 20 Piccadilly, Manchester M1 1AN',
        hours: { 'Monday to Friday': '8:00AM to 18:00PM', 'Saturday': '9:00AM to 16:00PM', 'Sunday': 'Closed' }
    },
    surrey: {
        name: 'Surrey',
        heroImage: '/areaswecoverphotos/berkshire images.jpeg',
        description: 'Comprehensive cleaning solutions for homes and businesses in Surrey. Trusted by local clients for reliability and excellence.',
        coordinates: { lat: 51.2362, lng: -0.5704 },
        areas: 'Guildford, Woking, Epsom, Reigate, Staines, Camberley, Farnham and more.',
        phone: '01483 123456',
        address: 'Surrey Business Centre, 15 High Street, Guildford, Surrey GU1 3AA',

        hours: {
            'Monday to Friday': '7:00AM to 19:00PM',
            'Saturday': '8:00AM to 17:00PM',
            'Sunday': 'Closed'
        }
    },
    essex: {
        name: 'Essex',
        heroImage: '/areaswecoverphotos/essex.webp',
        description: 'Comprehensive cleaning solutions for homes and businesses in Essex. Trusted by local clients for reliability and excellence.',
        coordinates: { lat: 51.7361, lng: 0.4781 },
        areas: 'Chelmsford, Colchester, Southend-on-Sea, Basildon, Harlow, Brentwood, Braintree and more.',
        phone: '01273 123456',
        address: 'Essex Business Centre, 15 North Street, Brighton, Essex BN1 1AL',
        hours: {
            'Monday to Friday': '7:00AM to 19:00PM',
            'Saturday': '8:00AM to 17:00PM',
            'Sunday': 'Closed'
        }
    },
    berkshire: {
        name: 'Berkshire',
        heroImage: '/areaswecoverphotos/berkshire images.jpeg',
        description: 'Expert cleaning services in Berkshire, including office, property, and specialist cleaning. Available 24/7 for all your needs.',
        coordinates: { lat: 51.4543, lng: -0.9781 },
        areas: 'Reading, Slough, Windsor, Maidenhead, Bracknell, Wokingham, Newbury and more.',
        phone: '0118 345678',
        address: 'Berkshire Hub, 67 Broad Street, Reading, Berkshire RG1 2AP',
        hours: {
            'Monday to Friday': '7:30AM to 18:30PM',
            'Saturday': '8:30AM to 16:00PM',
            'Sunday': 'Closed'
        }
    },
    hampshire: {
        name: 'Hampshire',
        heroImage: '/areaswecoverphotos/hampshire.jpeg',
        description: 'Professional cleaning services for homes and businesses in Hampshire. Trusted by local clients for reliability and excellence.',
        coordinates: { lat: 51.0578, lng: -1.3081 },
        areas: 'Southampton, Portsmouth, Winchester, Basingstoke, Andover, Alton, Fareham and more.',
        phone: '023 8456789',
        address: 'Hampshire Office, 91 Above Bar Street, Southampton, Hampshire SO14 7FG',
        hours: {
            'Monday to Saturday': '7:00AM to 19:00PM',
            'Sunday': '10:00AM to 15:00PM'
        }
    },
    buckinghamshire: {
        name: 'Buckinghamshire',
        heroImage: '/areaswecoverphotos/buckinghamshire.jpeg',
        description: 'Comprehensive cleaning solutions for homes and businesses in Buckinghamshire. Our team ensures every property is maintained to the highest standards.',
        coordinates: { lat: 51.8168, lng: -0.8252 },
        areas: 'Milton Keynes, High Wycombe, Aylesbury, Amersham, Chesham, Beaconsfield, Marlow and more.',
        phone: '01296 567890',
        address: 'Buckinghamshire Base, 33 Market Square, Aylesbury, Buckinghamshire HP20 1TN',
        hours: {
            'Monday to Friday': '8:00AM to 17:30PM',
            'Saturday': '9:00AM to 16:00PM',
            'Sunday': 'Emergency calls only'
        }
    },
    oxfordshire: {
        name: 'Oxfordshire',
        heroImage: '/areaswecoverphotos/oxfordshire.jpeg',
        description: 'Expert cleaning services in Oxfordshire, including office, property, and specialist cleaning. Available 24/7 for all your needs.',
        coordinates: { lat: 51.7612, lng: -1.2577 },
        areas: 'Oxford, Banbury, Bicester, Witney, Abingdon, Didcot, Henley-on-Thames and more.',
        phone: '01865 234567',
        address: 'Oxfordshire Centre, 28 George Street, Oxford, Oxfordshire OX1 2AQ',
        hours: {
            'Monday to Saturday': '8:00AM to 18:00PM',
            'Sunday': 'Emergency calls only'
        }
    },
    kent: {
        name: 'Kent',
        heroImage: '/areaswecoverphotos/kent.jpeg',
        description: 'Expert cleaning services in Kent, including office, property, and specialist cleaning. Available 24/7 for all your needs.',
        coordinates: { lat: 51.2787, lng: 0.5217 },
        areas: 'Canterbury, Maidstone, Dover, Folkestone, Margate, Ashford, Dartford and more.',
        phone: '01227 678901',
        address: 'Kent Operations, 54 High Street, Canterbury, Kent CT1 2HJ',
        hours: {
            'Monday to Saturday': '7:30AM to 18:00PM',
            'Sunday': 'Closed'
        }
    },
    sussex: {
        name: 'Sussex',
        heroImage: '/sussex images hd.webp',
        description: 'Comprehensive cleaning solutions for homes and businesses in Sussex. Trusted by local clients for reliability and excellence.',
        coordinates: { lat: 50.8615, lng: -0.1426 },
        areas: 'Brighton, Hove, Worthing, Crawley, Eastbourne and more.',
        phone: '01273 123456',
        address: 'Sussex Business Centre, 15 North Street, Brighton, Sussex BN1 1AL',
        hours: {
            'Monday to Friday': '7:00AM to 19:00PM',
            'Saturday': '8:00AM to 17:00PM',
            'Sunday': 'Closed'
        }
    }
};

const LocationPage = () => {
    const { locationId } = useParams();
    const navigate = useNavigate();
    const location = locationData[locationId];

    if (!location) return <div>Location not found</div>;

    // Generate Google Maps embed URL
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location.address)}&center=${location.coordinates.lat},${location.coordinates.lng}&zoom=12`;

    return (
        <div className="min-h-screen">
            <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-4">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${location.heroImage}')` }}>
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                    <HeroNavbar />
                    {/* Hero Content */}
                    <div className="max-w-2xl text-white px-8 ml-auto mr-auto lg:mr-0 lg:ml-48">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{location.name} Cleaning Services</h1>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-300 mb-6">Quality Cleaning for {location.name}</h2>
                        <p className="text-lg md:text-xl mb-8 leading-relaxed">{location.description}</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/quote" className="bg-green-400 hover:bg-green-500 text-blue-900 font-bold py-2 px-6 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                            <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-bold transition-colors border border-white/30">
                                Call Us
                            </button>
                        </div>
                    </div>
                </div>
            </section >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#02294D] hover:text-green-800 font-medium">
                    ← Back to Locations
                </button>
            </div>

            {/* Service Details Sections */}
            <div className="max-w-6xl mx-auto px-4 py-8 space-y-16">
                {/* Commercial Cleaning Section */}
                <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-8 gap-8">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Commercial Cleaners in {location.name}</h2>
                        <p className="text-lg text-gray-700 mb-6">Need cleaning services for business venues or offices in Greater/{location.name}? pro-Radiant Cleaner can help, with their wide variety of services for commercial cleaning.</p>
                        <p className="text-lg text-gray-700 mb-6">Our services include hospitality/retail cleaning, office cleaning and school cleaning in {location.name}. Check out our services today.</p>
                        <div className="flex gap-4 mt-6">
                            <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/1location.webp" alt="Commercial Cleaning" className="rounded-2xl w-full max-w-md object-cover" loading="lazy" />
                    </div>
                </div>

                {/* Property Cleaning Section */}
                <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row-reverse items-center p-8 gap-8">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Property Cleaning in {location.name}</h2>
                        <p className="text-lg text-gray-700 mb-6">There are plenty of properties and buildings in {location.name} that require professional cleaning on a regular basis. pro-Radiant Cleaner offers property cleaning in {location.name}.</p>
                        <p className="text-lg text-gray-700 mb-6">Whether your property in {location.name} needs regular or intensive cleaning, pro-Radiant Cleaning has the right option for you. Our property cleaning services include carpet cleaners, end of tenancy, deep cleaning and garden cleaning.</p>
                        <div className="flex gap-4 mt-6">
                            <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/location 3.jpg" alt="Property Cleaning" className="rounded-2xl w-full max-w-md object-cover" loading="lazy" />
                    </div>
                </div>

                {/* Disinfection Cleaning Section */}
                <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-8 gap-8">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Disinfection Cleaning in {location.name}</h2>
                        <p className="text-lg text-gray-700 mb-6">COVID-19 has made disinfection cleaning a necessary service for cities across the globe. pro-Radiant Cleaner have provided numerous disinfection services across {location.name}.</p>
                        <p className="text-lg text-gray-700 mb-6">Our disinfection cleaning option includes biohazard cleaning and decontamination. Take a look at our disinfection cleaning option today.</p>
                        <div className="flex gap-4 mt-6">
                            <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/disinfectioncleaning1.png" className="rounded-2xl w-full max-w-md object-cover" loading="lazy" />
                    </div>
                </div>
            </div>

            {/* Additional Cleaning Services Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col items-center mb-10">
                    <span className="inline-flex items-center px-6 py-2 bg-blue-50 text-blue-900 rounded-full font-semibold text-lg mb-4">
                        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm0 0c0 1.104.896 2 2 2s2-.896 2-2-.896-2-2-2-2 .896-2 2z" /></svg>
                        Additional Services
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Additional Cleaning Services in {location.name}</h2>
                    <p className="text-lg text-gray-700 text-center mb-2">Couldn't find what you're looking for? No problem, we have other cleaning services available in {location.name}.<br />Take a look at the additional services we offer below.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Specialist Cleaning Card */}
                    <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
                        <div className="mb-4">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 17v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9V7a5 5 0 0110 0v2" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Specialist Cleaning</h3>
                        <p className="text-gray-700 mb-4">Within our specialist cleaning service, we provide industrial cleaning and infection control in {location.name}.</p>
                    </div>
                    {/* Construction Cleaning Card */}
                    <div className="bg-gray-50 rounded-2xl p-8 flex flex-col items-start shadow">
                        <div className="mb-4">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 17v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 9V7a5 5 0 0110 0v2" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Construction Cleaning</h3>
                        <p className="text-gray-700 mb-4">Our after builders cleaning service in {location.name} prioritises safety and cleanliness for all workers within the construction site.</p>
                    </div>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                    <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                </div>
            </div>



            <GallerySection />
            <GetQuoteForm />

            {/* Areas We Serve Section */}
            <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
                {/* Left Side - Text */}
                <div className="flex-1">
                    <span className="inline-flex items-center px-6 py-2 bg-blue-50 text-blue-900 rounded-full font-semibold text-lg mb-6">
                        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                        Areas We Serve
                    </span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Unbeatable Cleaning<br />In Every Sector</h2>
                    <p className="text-lg text-gray-700 mb-6">As cleaning contractors, our services cover much of Southern England including West and Greater London, Surrey, Hampshire, Hertfordshire, Oxfordshire, Berkshire and Buckinghamshire.</p>
                    <p className="text-lg text-gray-700 mb-6">However, if you're further afield and require our services, please don't hesitate to get in touch; we'll always do our utmost to help.</p>
                    <p className="text-lg font-semibold text-gray-900 mb-6">Click on the map to find out more</p>
                    <div className="flex gap-4 mt-6">
                        <a href="/quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Get a Quote <span aria-hidden="true">↗</span></a>
                        <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow transition flex items-center gap-2">Call Us <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.13.37 2.25.72 3.32a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c1.07.35 2.19.59 3.32.72A2 2 0 0122 16.92z" /></svg></a>
                    </div>
                </div>
                {/* Right Side - Interactive SVG Map */}
                <div className="flex-1 flex justify-center">

                    <img src="/map.png" alt="" loading="lazy" />
                </div>
            </div>
            <LocationSlider />
            <ContactSection />
            <FAQSection />
        </div >
    );
};

export default LocationPage;
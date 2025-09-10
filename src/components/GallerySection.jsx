// Animated Gallery Section Component
import { useEffect, useState } from 'react';

const GallerySection = () => {
  // Gallery images data
  const galleryImages = [
    { id: 1, url: '/1.webp', alt: 'Gallery image 1' },
    { id: 2, url: '/2.jpg', alt: 'Gallery image 2' },
    { id: 3, url: '/3.webp', alt: 'Gallery image 3' },
    { id: 4, url: '/4.jpg', alt: 'Gallery image 4' },
    { id: 5, url: '/5.jpg', alt: 'Gallery image 5' },
    { id: 6, url: '/6.webp', alt: 'Gallery image 6' },
    { id: 7, url: '/7.jpg', alt: 'Gallery image 7' },
    { id: 8, url: '/8.jpg', alt: 'Gallery image 8' },
    { id: 9, url: '/9.jpg', alt: 'Gallery image 9' },
    { id: 10, url: '/10.jpg', alt: 'Gallery image 10' },
    { id: 11, url: '/11.webp', alt: 'Gallery image 11' },
    { id: 12, url: '/12.webp', alt: 'Gallery image 12' },
    { id: 13, url: '/13.jpg', alt: 'Gallery image 13' }
  ];

  // Duplicate images for seamless animation
  const firstRow = [...galleryImages.slice(0, 4), ...galleryImages.slice(0, 4)];
  const secondRow = [...galleryImages.slice(4, 8), ...galleryImages.slice(4, 8)];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600">
            View our gallery for a closer look at our expert cleaning results
          </p>
        </div>

        <div className="space-y-6">
          {/* First Row - Left to Right Animation */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-left-to-right">
              {firstRow.map((image, index) => (
                <div
                  key={`row1-${image.id}-${index}`}
                  className="flex-shrink-0 w-80 h-64 mx-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left Animation */}
          <div className="relative overflow-hidden">
            <div className="flex animate-slide-right-to-left">
              {secondRow.map((image, index) => (
                <div
                  key={`row2-${image.id}-${index}`}
                  className="flex-shrink-0 w-80 h-64 mx-3 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  <style>{`
        @keyframes slide-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slide-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-left-to-right {
          animation: slide-left-to-right 18s linear infinite;
        }

        .animate-slide-right-to-left {
          animation: slide-right-to-left 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
import React from 'react';

const NotFound = () => (
  <section className="flex flex-col items-center justify-center h-[60vh] text-center">
    <h1 className="text-5xl font-bold mb-4">404</h1>
    <p className="text-xl mb-6">Page Not Found</p>
    <a href="/" className="bg-blue-600 text-white py-2 px-4 rounded">Go Home</a>
  </section>
);

export default NotFound;

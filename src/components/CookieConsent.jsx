import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
      <span className="mb-2 md:mb-0">This website uses cookies to ensure you get the best experience. <a href="/privacy" className="underline">Learn more</a>.</span>
      <button onClick={acceptCookies} className="bg-blue-600 px-4 py-2 rounded text-white font-semibold ml-0 md:ml-4">Accept</button>
    </div>
  );
};

export default CookieConsent;

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function GetQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postcode: '',
    service: '',
    message: '',
    agreedToPolicy: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreedToPolicy) {
      alert("Please agree to the Privacy Policy before submitting.");
      return;
    }

    try {
      await emailjs.send(
        'service_q6o61aj',
        'template_yic20zk',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          postcode: formData.postcode,
          service: formData.service,
          message: formData.message
        },
        'v6HP2QzIPKNwyGYvw'
      );

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        postcode: '',
        service: '',
        message: '',
        agreedToPolicy: false
      });

    } catch (err) {
      alert('Failed to send quote. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-[#02294D] rounded-2xl p-6 border border-blue-700/30 shadow-2xl overflow-y-auto" style={{ maxHeight: '80vh' }}>
        <h1 className="text-3xl font-bold text-white text-center mb-6">Get a Quote</h1>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* First row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleInputChange} required
              className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300" />
            <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleInputChange} required
              className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300" />
            <input type="tel" name="phone" placeholder="Phone*" value={formData.phone} onChange={handleInputChange} required
              className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300" />
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <input type="text" name="address" placeholder="Address*" value={formData.address} onChange={handleInputChange} required
              className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300" />
            <input type="text" name="postcode" placeholder="Postcode*" value={formData.postcode} onChange={handleInputChange} required
              className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300" />
            <select name="service" value={formData.service} onChange={handleInputChange} required
              className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white">
              <option value="" disabled>-- Select Service --</option>
              <option value="Commercial Cleaning">Commercial Cleaning</option>
              <option value="Residential Cleaning">Residential Cleaning</option>
              <option value="Builders Clean">Builders Clean</option>
              <option value="Deep Cleaning">Deep Cleaning</option>
              <option value="Carpet & Upholstery Cleaning">Carpet & Upholstery Cleaning</option>
              <option value="Window Cleaning">Window Cleaning</option>
              <option value="Pressure Washing">Pressure Washing</option>
              <option value="Specialist Cleaning">Specialist Cleaning</option>
              <option value="COVID Disinfection">COVID Disinfection</option>
              <option value="Waste Management">Waste Management</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Message */}
          <textarea name="message" placeholder="Please explain how we can help you" value={formData.message} onChange={handleInputChange}
            rows={4} className="w-full px-6 py-4 bg-blue-800/30 border border-blue-600/50 rounded-xl text-white placeholder-blue-300" />

          {/* Privacy Policy */}
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" name="agreedToPolicy" checked={formData.agreedToPolicy} onChange={handleInputChange} required />
            <span className="text-blue-100">I agree to the site's <span className="text-blue-300 underline">Privacy Policy</span></span>
          </label>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-green-600 text-white p-4 rounded-lg flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Your quote request has been submitted successfully!</span>
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-12 py-4 rounded-full">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

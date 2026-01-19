import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

export default function GetQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    service: "",
    message: "",
    agreedToPolicy: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // 🔹 SEND TO GOOGLE SHEET
  const sendToGoogleSheet = async () => {
    await fetch(
      "https://script.google.com/macros/s/AKfycbyL1JwseJbF9eQwtFs1eENuBF8IWBtlMwUjZx0YXJfQM0PM5o6fcetZ7RMopOdztla9JQ/exec",
      {
        method: "POST",
        mode: "no-cors", // IMPORTANT
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          postcode: formData.postcode,
          service: formData.service,
          message: formData.message,
        }),
      },
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreedToPolicy) {
      alert("Please agree to the Privacy Policy.");
      return;
    }

    try {
      // 📧 EMAILJS
      await emailjs.send(
        "service_q6o61aj",
        "template_yic20zk",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          postcode: formData.postcode,
          service: formData.service,
          message: formData.message,
        },
        "v6HP2QzIPKNwyGYvw",
      );

      // 📊 GOOGLE SHEET
      await sendToGoogleSheet();

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 4000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        postcode: "",
        service: "",
        message: "",
        agreedToPolicy: false,
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="bg-[#02294D] rounded-2xl p-6 border border-blue-700/30 shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Get a Quote
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <input
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="input"
            />
            <input
              name="phone"
              placeholder="Phone*"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="input"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <input
              name="address"
              placeholder="Address*"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="input"
            />
            <input
              name="postcode"
              placeholder="Postcode*"
              required
              value={formData.postcode}
              onChange={handleInputChange}
              className="input"
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleInputChange}
              className="input"
            >
              <option value="">Select Service</option>
              <option>Commercial Cleaning</option>
              <option>Residential Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Window Cleaning</option>
              <option>Pressure Washing</option>
              <option>Other</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="How can we help?"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="input"
          />

          <label className="flex items-center space-x-2 text-white">
            <input
              type="checkbox"
              name="agreedToPolicy"
              checked={formData.agreedToPolicy}
              onChange={handleInputChange}
            />
            <span>I agree to the Privacy Policy</span>
          </label>

          {showSuccess && (
            <div className="bg-green-600 p-3 rounded flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Quote submitted successfully!</span>
            </div>
          )}

          <button className="bg-green-500 px-10 py-3 rounded-full text-white">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

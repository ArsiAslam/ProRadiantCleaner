import emailjs from "emailjs-com";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronUp,
  ExternalLink,
  Loader2,
  Check,
} from "lucide-react";
import { Link } from "react-router-dom";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbyL1JwseJbF9eQwtFs1eENuBF8IWBtlMwUjZx0YXJfQM0PM5o6fcetZ7RMopOdztla9JQ/exec";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    service: "",
    message: "",
    agreeToPrivacy: false,
    captchaVerified: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [captchaCompleted, setCaptchaCompleted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCaptchaChange = (e) => {
    const { checked } = e.target;

    if (checked && !captchaCompleted) {
      setCaptchaLoading(true);
      setTimeout(() => {
        setCaptchaLoading(false);
        setCaptchaCompleted(true);
        setFormData((prev) => ({ ...prev, captchaVerified: true }));
      }, 2000);
    } else if (!checked) {
      setCaptchaCompleted(false);
      setFormData((prev) => ({ ...prev, captchaVerified: false }));
    }
  };

  const sendToGoogleSheet = async () => {
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        postcode: formData.postcode,
        service: formData.service,
        message: formData.message,
      }),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.captchaVerified) {
      alert("Please verify that you are human");
      return;
    }

    try {
      // EmailJS
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

      // Google Sheet
      await sendToGoogleSheet();

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        postcode: "",
        service: "",
        message: "",
        agreeToPrivacy: false,
        captchaVerified: false,
      });

      setCaptchaCompleted(false);
      setCaptchaLoading(false);
    } catch (err) {
      console.error("Submission Error:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your space? Contact us today for a free
            consultation and personalized cleaning solution.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="text-gray-900 text-lg font-medium">
                07984-960890
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <span className="text-gray-900 text-lg font-medium">
                info@proradiantcleaners.co.uk
              </span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-gray-900 text-lg font-medium">
                Cambridge, United Kingdom
              </span>
            </div>
          </div>

          <div className="pt-8">
            <Link to="/quote">
              <button className="bg-[#02294D] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-colors shadow-lg">
                Get a Quote
                <ExternalLink className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#02294D] rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8">Get a Quote</h2>

          {showSuccess && (
            <div className="mb-6 p-4 bg-green-500 text-white rounded-lg flex items-center space-x-2">
              <Check className="w-5 h-5" />
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* FIRST ROW */}
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-blue-800/30 border border-blue-600/50 rounded-xl px-6 py-4 text-white placeholder-blue-300 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-blue-800/30 border border-blue-600/50 rounded-xl px-6 py-4 text-white placeholder-blue-300 focus:outline-none focus:border-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-blue-800/30 border border-blue-600/50 rounded-xl px-6 py-4 text-white placeholder-blue-300 focus:outline-none focus:border-white"
              />
            </div>

            {/* SECOND ROW */}
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                name="address"
                placeholder="Address*"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="bg-blue-800/30 border border-blue-600/50 rounded-xl px-6 py-4 text-white placeholder-blue-300 focus:outline-none focus:border-white"
              />
              <input
                type="text"
                name="postcode"
                placeholder="Postcode*"
                value={formData.postcode}
                onChange={handleInputChange}
                required
                className="bg-blue-800/30 border border-blue-600/50 rounded-xl px-6 py-4 text-white placeholder-blue-300 focus:outline-none focus:border-white"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="bg-blue-800/30 border border-blue-600/50 rounded-xl px-6 py-4 text-black focus:outline-none focus:border-white appearance-none cursor-pointer"
                style={{
                  backgroundImage:
                    'url(\'data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>\')',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  WebkitAppearance: "none",
                  MozAppearance: "none",
                  color: "white",
                }}
              >
                <option value="" disabled>
                  -- Select Service --
                </option>
                <option value="residential">Residential Cleaning</option>
                <option value="commercial">Commercial Cleaning</option>
                <option value="deep-cleaning">Deep Cleaning</option>
                <option value="carpet-cleaning">Carpet Cleaning</option>
              </select>
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Please explain how we can help you"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-blue-800/30 border border-blue-600/50 rounded-xl px-6 py-4 text-white placeholder-blue-300 focus:outline-none focus:border-white resize-none"
              required
            />

            {/* PRIVACY */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="agreeToPrivacy"
                checked={formData.agreeToPrivacy}
                onChange={handleInputChange}
                className="w-5 h-5 text-blue-600 bg-transparent border-2 border-white rounded focus:ring-blue-500 focus:ring-2"
              />
              <label className="text-white text-sm">
                I agree to the site's Privacy Policy
              </label>
            </div>

            {/* CAPTCHA */}
            <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="captchaVerified"
                    checked={captchaCompleted}
                    onChange={handleCaptchaChange}
                    disabled={captchaLoading || captchaCompleted}
                    className="w-6 h-6 text-blue-600 bg-white border-2 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                  />
                  {captchaLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                    </div>
                  )}
                  {captchaCompleted && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                  )}
                </div>
                <span className="text-white">
                  {captchaLoading
                    ? "Verifying..."
                    : captchaCompleted
                      ? "Verified!"
                      : "Verify you are human"}
                </span>
              </div>
              <div className="text-right">
                <div className="text-orange-400 font-bold text-sm">
                  CLOUDFLARE
                </div>
                <div className="text-gray-400 text-xs">Privacy • Terms</div>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={!formData.captchaVerified}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-12 py-4 rounded-full transition-colors shadow-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button className="fixed bottom-24 left-8 bg-white hover:bg-gray-100 text-gray-600 p-3 rounded-full shadow-lg transition-colors">
        <ChevronUp className="w-6 h-6" />
      </button>
    </section>
  );
};

export default ContactFormSection;

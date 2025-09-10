import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form className="bg-white shadow rounded-lg p-6 mb-6" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Name*</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email*</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Phone</label>
        <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Message*</label>
        <textarea name="message" value={form.message} onChange={handleChange} required className="w-full border px-3 py-2 rounded" rows={4}></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
      {status && <div className="mt-4 text-center text-sm">{status}</div>}
    </form>
  );
};

export default ContactForm;

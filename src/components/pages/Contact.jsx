import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // replace with actual logic
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-6 py-20">
      <div className="bg-gray-200 rounded-xl w-full max-w-3xl shadow-lg overflow-hidden font-sans">

        {/* Header */}
        <div className="bg-[#00376E] px-6 py-5 text-white">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p className="text-sm text-gray-200">We'd love to hear from you</p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 gap-5 text-black">
          <div>
            <label className="block font-semibold mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded bg-gray-300 outline-none"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 rounded bg-gray-300 outline-none"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Your Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full p-2 rounded bg-gray-300 outline-none"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#00376E] text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

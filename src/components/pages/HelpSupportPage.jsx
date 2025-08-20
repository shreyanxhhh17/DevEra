import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const faqs = [
  "How to join a group?",
  "How to start a new project?",
  "Issues with group chat?",
  "Can I edit my profile?",
  "How to report a bug?",
  "How to invite team members?",
  "How do I delete my account?",
  "How to switch between light/dark theme?",
  "How to view my experience card?",
  "Can I contact a mentor?"
];

export default function HelpSupport() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white font-sans px-6 md:px-20 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Help & <span className="text-blue-500">Support</span>
        </h1>
        <p className="text-gray-400 text-base max-w-2xl mx-auto">
          Stuck somewhere? Get instant help on using Devera, solving issues, or exploring features.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-4 py-3 max-w-2xl mx-auto mb-12">
        <BiSearch className="text-xl text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search help articles..."
          className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
        />
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-[#3a3a3a] bg-[#2a2a2a] hover:bg-[#333] p-5 rounded-lg flex justify-between items-center transition"
          >
            <span className="text-sm text-gray-200">{faq}</span>
            <BsArrowRight className="text-blue-500" />
          </div>
        ))}
      </div>

      {/* Footer Suggestion */}
      <div className="text-center mt-20 text-gray-400 text-sm">
        Can’t find what you're looking for? <a href="/contact" className="text-blue-500 hover:underline">Contact Support</a>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function CallToActionSection() {
  return (
    <section className="min-h-screen w-full bg-primary text-white flex flex-col items-center justify-center px-6 md:px-20">
      {/* Heading + Description */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Ready to <span className="text-brandBlue">Elevate</span> Your Learning?
        </h2>
        <p className="text-gray-400 text-lg">
          Join a collaborative ecosystem where students work on real-world projects, grow together, and get noticed.
        </p>
      </div>

      {/* CTA Button */}
      <Link
        to="/signup"
        className="bg-secondary hover:bg-brandBlue text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-md transition duration-300 mb-20">
        Start Your Journey →
      </Link>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-center">
        <div className="bg-[#1e293b] rounded-xl p-6 shadow hover:shadow-md transition">
          <p className="text-4xl font-extrabold text-brandBlue">1000+</p>
          <p className="text-gray-300 mt-2 text-sm">Active Students</p>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow hover:shadow-md transition">
          <p className="text-4xl font-extrabold text-brandBlue">10+</p>
          <p className="text-gray-300 mt-2 text-sm">Partner Colleges</p>
        </div>
        <div className="bg-[#1e293b] rounded-xl p-6 shadow hover:shadow-md transition">
          <p className="text-4xl font-extrabold text-yellow-400">4.8/5</p>
          <p className="text-gray-300 mt-2 text-sm">Student Rating</p>
        </div>
      </div>
    </section>
  );
}

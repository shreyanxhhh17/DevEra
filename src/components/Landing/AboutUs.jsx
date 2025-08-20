import React from "react";
import { HiUsers, HiOutlineLightBulb, HiCheckCircle } from "react-icons/hi";

export default function AboutUs() {
  return (
    <div id="about-us" className="bg-primary text-white font-sans px-6 md:px-20 py-20 space-y-24">
      
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Who We Are at <span className="text-brandBlue">Devera</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Devera is built for developers, by developers. We believe in collaboration, innovation, and growth — together.
        </p>
        {/* <a href="#" className="inline-block bg-secondary hover:bg-brandBlue transition px-6 py-3 rounded-md font-semibold text-white shadow-md">
          Join Our Mission →
        </a> */}
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-10 text-center">
        <div className="bg-[#1e293b] p-8 rounded-xl shadow hover:scale-105 transition-transform">
          <HiUsers className="text-4xl text-brandBlue mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Community Driven</h3>
          <p className="text-gray-400">
            Our global developer community powers real change by building impactful, scalable tech together.
          </p>
        </div>
        <div className="bg-[#1e293b] p-8 rounded-xl shadow hover:scale-105 transition-transform">
          <HiOutlineLightBulb className="text-4xl text-brandBlue mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Innovative Thinking</h3>
          <p className="text-gray-400">
            We believe creativity thrives in collaboration — and every idea matters.
          </p>
        </div>
        <div className="bg-[#1e293b] p-8 rounded-xl shadow hover:scale-105 transition-transform">
          <HiCheckCircle className="text-4xl text-brandBlue mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Real Results</h3>
          <p className="text-gray-400">
            Devera empowers devs to turn ideas into projects that actually launch — and grow your resume.
          </p>
        </div>
      </div>
    </div>
  );
}

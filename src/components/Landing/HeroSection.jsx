// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { HiUserAdd } from "react-icons/hi";
import mainImage from "../../assets/main.webp"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary text-white px-6 md:px-20 py-10 font-sans">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-20">
        <h1 className="text-4xl font-bold">
          Dev<span className="text-brandBlue">Era</span>
        </h1>
        <nav className="hidden md:flex space-x-10 text-white text-2xl">
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#about-us" className="hover:text-blue-400 transition-colors">About Us</a>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-3">
          <Link
            to="/login"
            className="bg-[#3a3a3a] px-4 py-2 rounded-md text-sm hover:bg-[#4a4a4a] transition font-semibold"
          >
          Login
          </Link>
          <Link
            to="/signup"
            className="bg-secondary hover:bg-brandBlue px-4 py-2 rounded-md text-sm transition font-semibold"
          >
            SignUp
          </Link>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl w-full text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Build Together <br />
            <span className="text-brandBlue">Grow Faster</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Lorem Ipsum is simply dummy text of the font. Lorem Ipsum is simply dummy text of the font.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-secondary hover:bg-brandBlue text-white px-6 py-3 rounded-md font-semibold shadow-md transition flex items-center gap-2">
              <span className="text-lg"><HiUserAdd /></span><Link to='/dashboard'>Go to Dashboard</Link>
            </button>
<a
  href="#how-it-works"
  className="bg-[#3a3a3a] hover:bg-[#4a4a4a] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition"
>
  <span className="text-lg">❔</span> How it works
</a>


          </div>
        </div>

        {/* Right Placeholder Image Area */}
        {/* <div className="w-full lg:w-[50%] h-[300px] sm:h-[350px] md:h-[400px] bg-[#3a3a3a] rounded-lg"></div> */}

<div 
  className="w-full lg:w-[50%] h-[300px] sm:h-[350px] md:h-[400px] bg-[#3a3a3a] rounded-lg"
  style={{ 
    backgroundImage: `url(${mainImage})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
></div>
      </div>
    </div>
  );
}

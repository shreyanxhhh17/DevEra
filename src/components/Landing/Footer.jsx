import React from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-gray-300 px-6 md:px-20 py-16 font-sans w-full">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
        {/* Products */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover-pill transition-colors">Screen</a>
            </li>
            <li>
              <a href="#" className="hover-pill transition-colors">Interview</a>
            </li>
            <li>
              <a href="#" className="hover-pill transition-colors">Engage</a>
            </li>
            <li>
              <a href="#" className="hover-pill transition-colors">SkillUp</a>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover-pill">Hackathons</a></li>
            <li><a href="#" className="hover-pill">Colleges</a></li>
            <li><a href="#" className="hover-pill">Communities</a></li>
            <li><a href="#" className="hover-pill">Placements</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover-pill">Blog</a></li>
            <li><a href="#" className="hover-pill">News</a></li>
            <li><a href="#" className="hover-pill">What's New</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">About Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover-pill">Career</a></li>
            <li><a href="#" className="hover-pill">Team</a></li>
            <li><a href="#" className="hover-pill">Trust</a></li>
            <li><a href="#" className="hover-pill">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#2a2a2a] pt-6 gap-4">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">
            Dev<span className="text-blue-500">Era</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">© DevEra 2025. All Rights Reserved.</p>
        </div>

        {/* Socials */}
        <div className="flex gap-5 text-xl">
          <a href="#" className="hover:text-blue-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaGithub /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaTwitter /></a>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover-pill">Privacy Policy</a>
          <a href="#" className="hover-pill">Terms</a>
        </div>
      </div>
    </footer>
  );
}

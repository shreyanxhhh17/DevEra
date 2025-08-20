import React from "react";
import { FaUserPlus, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AccountSettings() {
  return (
    <div id="profile" className="min-h-screen flex bg-[#1e1e1e] text-white font-sans">
      {/* Left: Profile Card */}
      <div className="w-full max-w-sm p-8 border-r border-[#2e2e2e] flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-26">
          Dev<span className="text-brandBlue">Shrey</span>
        </h1>

        <div className="bg-[#2b2b2b] w-24 h-24 rounded-full flex items-center justify-center mb-4">
          <FaUserPlus className="text-4xl text-white" />
        </div>

        <h2 className="text-xl font-semibold mt-2 mb-1">Shreyansh Sahu</h2>
        <p className="text-sm text-gray-400 mb-4">Aspiring MERN developer</p>

        <p className="text-sm text-gray-400 mb-1">
          <span className="text-white">Joined:</span> 1 Jan 2025
        </p>
        <p className="text-sm text-gray-400 mb-6">
          <span className="text-white">Skills:</span> MERN, C++
        </p>

        <div className="w-full space-y-3">
          <a
            href="#"
            className="flex items-center gap-2 bg-[#2f2f2f] hover:bg-[#3a3a3a] px-4 py-2 rounded text-sm transition"
          >
            <FaGithub /> github/shreyanshhh.com
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-[#2f2f2f] hover:bg-[#3a3a3a] px-4 py-2 rounded text-sm transition"
          >
            <FaLinkedin /> linkedin/shreyanshhh.com
          </a>
        </div>
      </div>

      {/* Right: Account Settings Form */}
      <div className="flex-1 p-10 md:p-16">
        <h2 className="text-xl font-semibold mb-8">Account Settings</h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-[#2b2b2b] rounded outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-[#2b2b2b] rounded outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
              placeholder="New Password"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-[#2b2b2b] rounded outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Add Skills</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-[#2b2b2b] rounded outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
              placeholder="e.g., React, Node.js"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm">Add Recovery Mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-[#2b2b2b] rounded outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
              placeholder="recovery@email.com"
            />
          </div>

          <button
            type="submit"
            className="bg-secondary hover:bg-brandBlue text-white px-6 py-2 rounded transition font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

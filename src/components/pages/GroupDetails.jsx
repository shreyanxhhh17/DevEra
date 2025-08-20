import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoLockClosedOutline } from 'react-icons/io5';

export default function GroupDetails() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white font-sans px-6 md:px-20 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Dev<span className="text-brandBlue">Era</span>
        </h1>

        <div className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full shadow">
          Hi Jenny <FaUserCircle className="text-xl" />
        </div>
      </div>

      {/* Content Split */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Section: Group Info */}
        <div className="bg-[#121212] rounded-xl p-6 w-full md:w-1/2 shadow-lg">
          <h2 className="text-2xl font-bold mb-1">Python Course</h2>
          <p className="text-gray-400 mb-6">Shreyansh Sahu</p>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-1">Description</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-1">Who can Join ?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-1">What you will learn?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>

          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded">
            Request
          </button>
        </div>

        {/* Right Section: Locked Timeline */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="border border-gray-600 rounded-xl p-8 bg-[#1e1e1e] text-center w-full shadow-inner">
            <div className="text-yellow-400 text-4xl mb-4 flex justify-center">
              <IoLockClosedOutline />
            </div>
            <h2 className="text-xl font-semibold mb-2">Timeline Locked</h2>
            <p className="text-gray-400 text-sm">Your request to join is pending.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

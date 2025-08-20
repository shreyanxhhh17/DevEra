import React from "react";

export default function GroupDetails2() {
  const members = ["Shreyansh Sahu (Owner)", "John", "Alice"];

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white px-6 md:px-20 py-12 font-sans">
      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT SECTION */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-1">Python Course</h1>
          <p className="text-sm text-gray-400 mb-6">by Shreyansh Sahu</p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-white">📘 Description</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Learn Python from scratch and collaborate with your team to build real-world applications. This course includes core programming, data structures, and basic ML with a focus on teamwork.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-white">👥 Who Can Join?</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Any student passionate about Python, whether beginner or intermediate. Teams are formed for hands-on collaboration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-white">📚 What You Will Learn</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Fundamentals of Python, problem-solving, real-world coding, GitHub project handling, and teamwork management.
            </p>
          </section>

          <div className="flex gap-4 mt-4">
            <button className="bg-blue-700 hover:bg-blue-800 px-5 py-2 text-sm rounded-md transition font-medium">
              Timeline
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 px-5 py-2 text-sm rounded-md transition font-medium">
              Discussion
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="md:w-1/2 bg-[#2a2a2a] rounded-lg p-6 shadow-md border border-[#3a3a3a]">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">💡 Python Ninjas</h2>
            <p className="text-gray-400 text-sm mt-1">
              Created on: <span className="text-white">1 May 2025</span> | <span className="text-blue-400">Role: Owner</span>
            </p>
          </div>

          {/* Member List */}
          <div className="mb-6">
            <p className="text-sm font-medium text-white mb-2">Group Members ({members.length})</p>
            <div className="bg-[#1e1e1e] border border-gray-700 rounded-md px-4 py-3 text-sm text-gray-300 space-y-1">
              {members.map((member, index) => (
                <p key={index}>{member}</p>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-4 mb-6">
            <Toggle label="Mute Notifications" />
            <Toggle label="Enable Light Theme" />
            <Toggle label="Pin Group Chat" />
          </div>

          {/* Nickname Input */}
          <div className="mb-6">
            <label htmlFor="nickname" className="text-sm font-medium mb-2 block text-white">
              Set Nickname
            </label>
            <input
              type="text"
              placeholder="e.g. Pro Coder"
              className="bg-[#1e1e1e] border border-gray-600 rounded-md w-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-700 hover:bg-blue-800 transition px-5 py-2 rounded-md font-medium">
              Save changes
            </button>
            <button className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-md font-medium">
              Leave group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Toggle Component
function Toggle({ label }) {
  return (
    <label className="flex justify-between items-center text-sm text-gray-300">
      {label}
      <input type="checkbox" className="form-checkbox h-4 w-4 accent-blue-500" />
    </label>
  );
}

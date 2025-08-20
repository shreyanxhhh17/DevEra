// src/pages/Dashboard.jsx
import React from "react";
import Header from "../Landing/Header";
import { Link } from "react-router-dom";
// import AiImage from "../assets/AI.jpg"

const techStacks = [
  {
    title: "AI/ML",
    desc: "Join innovative projects using AI models, machine learning, and neural networks.",
    img: "AiImage",
  },
  {
    title: "Data Science",
    desc: "Join or create teams using Python, ML, and data analytics.",
    img: "https://source.unsplash.com/400x200/?data,science",
  },
  {
    title: "MERN Stack",
    desc: "Collaborate on full-stack projects with MongoDB, Express, React, and Node.js.",
    img: "https://source.unsplash.com/400x200/?coding,developer",
  },
  {
    title: "App Development",
    desc: "Build mobile apps using Flutter, React Native, and more.",
    img: "https://source.unsplash.com/400x200/?mobile,app",
  },
  {
    title: "Blockchain",
    desc: "Explore blockchain technology and build decentralized apps.",
    img: "https://source.unsplash.com/400x200/?blockchain",
  },
];

export default function Dashboard() {

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white px-6 md:px-20 py-10 font-sans">
      <Header/>
      {/* Welcome Message */}
      <h2 className="text-3xl font-semibold mb-6">Welcome Back, Jenny!</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-purple-700 rounded-xl p-6 shadow text-white">
          <p className="font-bold">My Groups</p>
          <p className="text-2xl mt-2">0</p>
        </div>
        <div className="bg-purple-400 rounded-xl p-6 shadow text-white">
          <p className="font-bold">Total Groups</p>
          <p className="text-2xl mt-2">5</p>
        </div>
        <div className="bg-gray-700 rounded-xl p-6 shadow text-white">
          <p className="font-bold">Managed Groups</p>
          <p className="text-2xl mt-2">0</p>
        </div>
      </div>

      {/* Section Title */}
      <h3 className="text-center text-2xl md:text-3xl font-light mb-10">
        Find the Right Team for Your <span className="text-brandBlue">Tech Stack</span>
      </h3>

      {/* Tech Stack Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {techStacks.map((item, index) => (
          <div key={index} className="bg-[#2a2a2a] rounded-lg overflow-hidden shadow hover:shadow-xl transition">
            <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400 mb-4">{item.desc}</p>
              <button className="px-4 py-2 text-sm text-blue-400 border border-gray-600 rounded-md hover:bg-[#3a3a3a] transition">
                <Link to='/dashboard/groups'>Explore groups →</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import Header from "../Landing/Header";

// Initial mock data for discoverable groups
const mockGroups = [
  {
    name: "Python Course",
    status: "Public",
    owner: "Alice",
    members: 4,
  },
  {
    name: "Machine Learning",
    status: "Public",
    owner: "Alice",
    members: 4,
  },
];

export default function ExploreGroups() {
  const [showModal, setShowModal] = useState(false);
  const [groups, setGroups] = useState(mockGroups); // Groups shown in Discover section

  // Form states
  const [title, setTitle] = useState("");
  const [access, setAccess] = useState("");
  const [description, setDescription] = useState("");
  const [learning, setLearning] = useState("");

  const handleCreateGroup = () => {
    const newGroup = {
      name: title,
      status: access,
      owner: "You",
      members: 1,
      description,
      learning,
    };

    setGroups([...groups, newGroup]); // Add to Discover Groups
    setTitle("");
    setAccess("");
    setDescription("");
    setLearning("");
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white px-6 md:px-20 py-10 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-montserrat">
          Find the Right Team for Your Tech Stack
        </h2>
        <p className="text-gray-400">
          Collaborate, build, and learn with like-minded developers.
        </p>
      </section>

      {/* Create Group Button */}
      <div className="flex justify-end mb-10">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-secondary hover:bg-[#00376E] transition px-4 py-2 rounded text-white font-semibold"
        >
          Create <BiPlus className="ml-1 text-lg" />
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* My Groups (Static for now) */}
        <div className="bg-[#7c4d9e] rounded-xl overflow-hidden md:col-span-1">
          <div className="px-6 py-4 bg-[#6b3e8e]">
            <h3 className="text-lg font-bold">★ My Groups</h3>
            <p className="text-sm text-gray-300">Groups you have joined</p>
          </div>
          <div className="flex flex-col justify-center items-center py-10 bg-[#f4f4f4] text-black">
            <FaUserCircle className="text-5xl mb-4" />
            <p className="font-semibold mb-2">No Groups Yet</p>
            <p className="text-sm text-gray-600 mb-4">
              You haven’t joined any group
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#6b3e8e] text-white px-4 py-2 rounded-md hover:bg-[#5c367a] transition"
            >
              Create your group
            </button>
          </div>
        </div>

        {/* Discover Groups */}
        <div className="bg-[#2b2b2b] rounded-xl overflow-hidden md:col-span-2">
          <div className="px-6 py-4 bg-[#353535]">
            <h3 className="text-lg font-bold">🌐 Discover Groups</h3>
            <p className="text-sm text-gray-300">Find and join new communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#e5e5e5] text-black">
            {groups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">{group.name}</h4>
                  <span className="text-green-600 text-sm font-medium">
                    {group.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  {group.owner} &nbsp; • Members: {group.members}
                </p>
                <button className="text-sm text-white bg-[#2b2b2b] px-4 py-2 rounded hover:bg-black transition">
                  Join Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Group Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-gray-200 rounded-xl w-[90%] max-w-3xl shadow-lg overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#00376E] px-6 py-4 text-white rounded-t-xl">
              <h2 className="text-lg font-bold">Create New Group</h2>
              <p className="text-sm">Provide your group details below</p>
            </div>

            {/* Modal Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
              <div>
                <label className="font-semibold">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-1 p-2 rounded bg-gray-300 outline-none"
                />
              </div>
              <div>
                <label className="font-semibold">Who can join?</label>
                <input
                  type="text"
                  value={access}
                  onChange={(e) => setAccess(e.target.value)}
                  className="w-full mt-1 p-2 rounded bg-gray-300 outline-none"
                  placeholder="e.g., Public or Private"
                />
              </div>
              <div className="md:col-span-2">
                <label className="font-semibold">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full mt-1 p-2 rounded bg-gray-300 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="font-semibold">What you will learn?</label>
                <textarea
                  value={learning}
                  onChange={(e) => setLearning(e.target.value)}
                  className="w-full mt-1 p-2 rounded bg-gray-300 outline-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center px-6 py-4 bg-gray-200">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-gray-600 hover:underline hover:text-red-600"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGroup}
                className="bg-[#00376E] text-white px-4 py-2 rounded-md font-semibold"
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

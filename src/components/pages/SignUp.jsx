// src/pages/SignUpPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-6 py-12 text-white font-sans">
      <div className="w-full max-w-5xl bg-[#121212] rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side */}
        <div className="bg-gradient-to-br from-[#4e00c2] to-[#8e2de2] p-10 flex flex-col justify-center text-white space-y-4">
          <Link to="/" className="text-sm hover:underline text-white">← Back to Home</Link>
          <div className="text-4xl font-extrabold leading-snug">
            Start Your Journey <br /> With DevEra
          </div>
          <p className="text-sm opacity-80">
            Empowering developers to grow and build — together. At Devera, collaboration is not a feature, it's the mission.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-10 bg-[#2a2a2a]">
          <h2 className="text-3xl font-bold mb-6">Create Your Account</h2>
          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-md outline-none focus:border-brandBlue transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-md outline-none focus:border-brandBlue transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-[#2a2a2a] text-white border border-gray-600 rounded-md outline-none focus:border-brandBlue transition"
                required
              />
              <p className="text-xs text-gray-400 mt-1">Must be at least 6 characters</p>
            </div>
            <button type="submit" className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition font-bold">
              Create Account
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Already have an account? <Link to="/login" className="text-brandBlue hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

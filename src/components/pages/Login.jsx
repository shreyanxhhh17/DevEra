// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center px-6 py-12 text-white font-sans">
      <div className="w-full max-w-5xl rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* Left Info Panel */}
        <div className="bg-gradient-to-br from-[#4e00c2] to-[#8e2de2] p-10 flex flex-col justify-center text-white space-y-4">
          <Link to="/" className="text-sm hover:underline text-white">← Back to Home</Link>
          <h2 className="text-4xl font-extrabold leading-snug">
            Welcome Back to <br /> <span className="text-white">Devera</span>
          </h2>
          <p className="text-sm opacity-80">
            Build together. Learn together. Let’s keep your journey going.
          </p>
        </div>

        {/* Right Form Panel */}
        <div className="p-10 bg-[#2a2a2a]">
          <h2 className="text-3xl font-bold mb-6">Log In to Your Account</h2>

          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@devera.dev"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 bg-[#1e1e1e] text-white border border-gray-600 rounded-md outline-none focus:border-brandBlue transition"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 bg-[#1e1e1e] text-white border border-gray-600 rounded-md outline-none focus:border-brandBlue transition"
              />
              <div className="text-right text-sm mt-1 text-blue-400 hover:underline cursor-pointer">
                Forgot Password?
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition font-bold"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-brandBlue hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

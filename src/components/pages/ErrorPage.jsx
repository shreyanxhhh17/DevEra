import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#1e1e1e] text-white flex items-center justify-center font-[Montserrat] px-6">
      <div className="text-center max-w-md">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-6 mx-auto" />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-brandBlue hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

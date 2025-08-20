import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">
          Dev<span className="text-brandBlue">Era</span>
        </h1>

        {/* Avatar Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full shadow"
          >
            Hi Jenny <FaUserCircle className="text-xl" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#2e2e2e] rounded-md w-40 shadow-lg text-sm z-10">
              <Link to="/profile" className="block px-4 py-2 hover:bg-[#3a3a3a]">My Profile</Link>
              <Link to="/projects" className="block px-4 py-2 hover:bg-[#3a3a3a]">Projects</Link>
              <Link to="/help" className="block px-4 py-2 hover:bg-[#3a3a3a]">Help</Link>
              <Link to="/#" className="block px-4 py-2 hover:bg-[#3a3a3a]">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
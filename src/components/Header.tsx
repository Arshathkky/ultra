import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Phone Number */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-700 font-medium">+94 65 2051 155</span>
          </div>
          {/* Address */}
          <div className="flex items-center space-x-6">
            <span className="text-gray-700 font-medium">
              No. 413/10, Main Street, Kovil Kulam, Palamunai, Arayampathi, Batticaloa, Sri Lanka
            </span>
          </div>
          
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Ultra Aluminium"
                className="h-12"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
              <Link to="/profiles" className="hover:text-blue-600 font-medium">Profiles</Link>
              <Link to="/net" className="hover:text-blue-600 font-medium">Net</Link>
              <Link to="/solar" className="hover:text-blue-600 font-medium">Solar Accessories</Link>
              <Link to="/dealers" className="hover:text-blue-600 font-medium">Dealers</Link>
              <Link to="/about" className="hover:text-blue-600 font-medium">About Us</Link>
              <Link to="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-100">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link to="/" className="block text-gray-800 hover:text-blue-600">Home</Link>
              <Link to="/profiles" className="block text-gray-800 hover:text-blue-600">Profiles</Link>
              <Link to="/net" className="block text-gray-800 hover:text-blue-600">Net</Link>
              <Link to="/solar" className="block text-gray-800 hover:text-blue-600">Solar Accessories</Link>
              <Link to="/about" className="block text-gray-800 hover:text-blue-600">About Us</Link>
              <Link to="/contact" className="block text-gray-800 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

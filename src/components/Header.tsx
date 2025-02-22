import { Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Phone, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Phone Number */}
          <div className="flex items-center space-x-2 text-gray-700">
            <Phone size={18} />
            <span className="font-medium">+94 65 2051 144</span>
          </div>
          {/* Address */}
          <div className="flex items-center space-x-2 text-gray-700">
            <MapPin size={18} />
            <span className="font-medium">
              No. 413/10, Main Street, Kovil Kulam, Palamunai, Arayampathi, Batticaloa, Sri Lanka
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Ultra Aluminium" className="h-12" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600">Home</Link>

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-800 font-medium flex items-center space-x-1 transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600"
              >
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/profiles" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-300" onClick={handleLinkClick}>Profiles</Link>
                  <Link to="/net" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-300" onClick={handleLinkClick}>Net</Link>
                  <Link to="/solar" className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-300" onClick={handleLinkClick}>Solar Accessories</Link>
                </div>
              )}
            </div>

            <Link to="/dealers" className="text-gray-800 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600">Dealers</Link>
            <Link to="/about" className="text-gray-800 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600">About Us</Link>
            <Link to="/contact" className="text-gray-800 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-blue-600 hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <Link to="/" className="block text-gray-800 font-medium hover:text-blue-600 py-2" onClick={handleLinkClick}>Home</Link>
            
            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block w-full text-left text-gray-800 font-medium hover:text-blue-600 py-2 flex justify-between"
              >
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <div className="mt-1 space-y-2 pl-4">
                  <Link to="/profiles" className="block text-gray-800 pl-4 hover:text-blue-600 py-1" onClick={handleLinkClick}>Profiles</Link>
                  <Link to="/net" className="block text-gray-800 pl-4 hover:text-blue-600 py-1" onClick={handleLinkClick}>Net</Link>
                  <Link to="/solar" className="block text-gray-800 pl-4 hover:text-blue-600 py-1" onClick={handleLinkClick}>Solar Accessories</Link>
                </div>
              )}
            </div>

            <Link to="/dealers" className="block text-gray-800 font-medium hover:text-blue-600 py-2" onClick={handleLinkClick}>Dealers</Link>
            <Link to="/about" className="block text-gray-800 font-medium hover:text-blue-600 py-2" onClick={handleLinkClick}>About Us</Link>
            <Link to="/contact" className="block text-gray-800 font-medium hover:text-blue-600 py-2" onClick={handleLinkClick}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

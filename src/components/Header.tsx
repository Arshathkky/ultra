import { Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Phone, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-[#1e048b] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Phone size={18} />
            <span className="font-medium">+94 65 2051 144</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={18} />
            <span className="font-medium">
              No. 413/10, Main Street, Kovil Kulam, Palamunai, Arayampathi, Batticaloa, Sri Lanka
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="w-full bg-white shadow-md">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-md flex items-center justify-center">
              <img src="/images/logo1.png" className="h-14 w-16" />
            </div>
            <span className="font-bold text-xl text-[#1e048b]">Ultra Aluminium</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-800 font-medium hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition">Home</Link>

            <div className="relative dropdown">
              <button
                onClick={() => handleDropdownToggle("aluminium")}
                className="text-gray-800 font-medium flex items-center space-x-1 hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition"
              >
                <span>Aluminium</span>
                <ChevronDown size={16} className={`${openDropdown === "aluminium" ? "rotate-180" : ""} transition-transform`} />
              </button>
              {openDropdown === "aluminium" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/production" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>Aluminium Products</Link>
                </div>
              )}
            </div>

            <div className="relative dropdown">
              <button
                onClick={() => handleDropdownToggle("products")}
                className="text-gray-800 font-medium flex items-center space-x-1 hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition"
              >
                <span>Products</span>
                <ChevronDown size={16} className={`${openDropdown === "products" ? "rotate-180" : ""} transition-transform`} />
              </button>
              {openDropdown === "products" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/profiles" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>Profiles</Link>
                  <Link to="/net" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>Net</Link>
                  <Link to="/solar" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>Solar Accessories</Link>
                </div>
              )}
            </div>

            <Link to="/dealers" className="text-gray-800 font-medium hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition">Dealers</Link>
            <Link to="/about" className="text-gray-800 font-medium hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition">About Us</Link>
            <Link to="/contact" className="text-gray-800 font-medium hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition">Contact</Link>
          </div>

          {/* Mobile Menu Toggle */}
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

            <div className="relative dropdown">
              <button onClick={() => handleDropdownToggle("aluminium")} className="block w-full text-left text-gray-800 font-medium hover:text-blue-600 py-2 flex justify-between">
                <span>Aluminium</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === "aluminium" && (
                <div className="mt-1 space-y-2 pl-4">
                  <Link to="/production" className="block text-gray-800 hover:text-blue-600 py-1" onClick={handleLinkClick}>Aluminium Products</Link>
                </div>
              )}
            </div>

            <div className="relative dropdown">
              <button onClick={() => handleDropdownToggle("products")} className="block w-full text-left text-gray-800 font-medium hover:text-blue-600 py-2 flex justify-between">
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === "products" && (
                <div className="mt-1 space-y-2 pl-4">
                  <Link to="/profiles" className="block text-gray-800 hover:text-blue-600 py-1" onClick={handleLinkClick}>Profiles</Link>
                  <Link to="/net" className="block text-gray-800 hover:text-blue-600 py-1" onClick={handleLinkClick}>Net</Link>
                  <Link to="/solar" className="block text-gray-800 hover:text-blue-600 py-1" onClick={handleLinkClick}>Solar Accessories</Link>
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

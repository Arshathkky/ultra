import { Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Phone, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownOpen = (menu: string) => setOpenDropdown(menu);
  const handleDropdownClose = () => setOpenDropdown(null);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full shadow-md bg-slate-900">
      <div className="py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-white">
            <Phone size={18} />
            <span className="font-medium">+94 65 2051 144</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <MapPin size={18} />
            <span className="font-medium">
              No. 413/10, Main Street, Kovil Kulam, Palamunai, Arayampathi, Batticaloa, Sri Lanka
            </span>
          </div>
        </div>
      </div>

      <nav className="bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Ultra Aluminium" className="h-12" />
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">Home</Link>
            
            <div className="relative dropdown"
              onMouseEnter={() => handleDropdownOpen("aluminium")}
              onMouseLeave={handleDropdownClose}
            >
              <button className="text-gray-800 font-medium flex items-center space-x-1 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">
                <span>Aluminium</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === "aluminium" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/production" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>Aluminium Products</Link>
                </div>
              )}
            </div>

            <div className="relative dropdown"
              onMouseEnter={() => handleDropdownOpen("products")}
              onMouseLeave={handleDropdownClose}
            >
              <button className="text-gray-800 font-medium flex items-center space-x-1 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === "products" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/profiles" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>Profiles</Link>
                  <Link to="/net" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>Net</Link>
                  <Link to="/solar" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>Solar Accessories</Link>
                </div>
              )}
            </div>

            <Link to="/dealers" className="text-gray-800 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">Dealers</Link>
            <Link to="/about" className="text-gray-800 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">About Us</Link>
            <Link to="/contact" className="text-gray-800 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition">Contact</Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

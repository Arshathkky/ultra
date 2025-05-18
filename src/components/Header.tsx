import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MapPin, Phone, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="w-full">
      {/* Top phone & address bar - normal flow, visible at top */}
      <div className="py-1 bg-white border-b border-gray-200 hidden md:flex justify-between items-center px-4 container mx-auto text-[#1e048b]">
        <div className="flex items-center space-x-2">
          <Phone size={18} />
          <span className="font-medium">+94 65 2051 144</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={18} />
          <span className="font-medium">
            No. 413/10, Main Street, Kovil Kulam, Palamunai, Arayampathi, Batticaloa, Sri Lanka
          </span>
        </div>
      </div>

      {/* Navigation bar fixed BELOW phone/address bar */}
      <nav
        className="bg-white fixed left-0 right-0 z-50 shadow-md "
        style={{ top: "30px" }} // adjust if your phone/address bar height changes
      >
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Ultra Aluminium" className="h-12" />
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-800 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition"
            >
              Home
            </Link>
            <div className="relative dropdown">
              <button
                onClick={() => handleDropdownToggle("aluminium")}
                className="text-gray-800 font-medium flex items-center space-x-1 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition"
              >
                <span>Aluminium</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === "aluminium" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/production" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>
                    Aluminium Products
                  </Link>
                </div>
              )}
            </div>
            <div className="relative dropdown">
              <button
                onClick={() => handleDropdownToggle("products")}
                className="text-gray-800 font-medium flex items-center space-x-1 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition"
              >
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {openDropdown === "products" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/profiles" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>
                    Profiles
                  </Link>
                  <Link to="/net" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>
                    Net
                  </Link>
                  <Link to="/solar" className="block px-4 py-2 text-gray-800 hover:bg-blue-100" onClick={handleLinkClick}>
                    Solar Accessories
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/dealers"
              className="text-gray-800 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition"
            >
              Dealers
            </Link>
            <Link
              to="/about"
              className="text-gray-800 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 font-medium hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link to="/" className="block text-gray-800 font-medium hover:text-blue-600 py-2" onClick={handleLinkClick}>
                Home
              </Link>
              <div className="relative dropdown">
                <button
                  onClick={() => handleDropdownToggle("aluminium")}
                  className="block w-full text-left text-gray-800 font-medium hover:text-blue-600 py-2 flex justify-between"
                >
                  <span>Aluminium</span>
                  <ChevronDown size={16} />
                </button>
                {openDropdown === "aluminium" && (
                  <div className="mt-1 space-y-2 pl-4">
                    <Link to="/production" className="block text-gray-800 pl-4 hover:text-blue-600 py-1" onClick={handleLinkClick}>
                      Aluminium Products
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative dropdown">
                <button
                  onClick={() => handleDropdownToggle("products")}
                  className="block w-full text-left text-gray-800 font-medium hover:text-blue-600 py-2 flex justify-between"
                >
                  <span>Products</span>
                  <ChevronDown size={16} />
                </button>
                {openDropdown === "products" && (
                  <div className="mt-1 space-y-2 pl-4">
                    <Link to="/profiles" className="block text-gray-800 pl-4 hover:text-blue-600 py-1" onClick={handleLinkClick}>
                      Profiles
                    </Link>
                    <Link to="/net" className="block text-gray-800 pl-4 hover:text-blue-600 py-1" onClick={handleLinkClick}>
                      Net
                    </Link>
                    <Link to="/solar" className="block text-gray-800 pl-4 hover:text-blue-600 py-1" onClick={handleLinkClick}>
                      Solar Accessories
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/dealers" className="block text-gray-800 font-medium hover:text-blue-600 py-2" onClick={handleLinkClick}>
                Dealers
              </Link>
              <Link to="/about" className="block text-gray-800 font-medium hover:text-blue-600 py-2" onClick={handleLinkClick}>
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-800 font-medium hover:text-blue-600 py-2" onClick={handleLinkClick}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer div to offset fixed nav + top bar height */}
      <div className="hidden md:block" style={{ height: "72px" }}></div>
    </header>
  );
}

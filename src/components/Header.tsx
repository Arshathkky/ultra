import React, { useState, useEffect } from "react";
import { MapPin, Phone, ChevronDown, Menu, X } from "lucide-react";

// Mock Link component since react-router-dom isn't installed yet
const Link = ({ to, className, children, onClick }: { to: string; className?: string; children: React.ReactNode; onClick?: () => void }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
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
      {/* Top info bar with contact information */}
      <div className={`bg-[#1e048b] text-white transition-all duration-300 ${scrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <Phone size={16} className="text-blue-200" />
              <span className="font-medium">+94 65 2051 144</span>
            </div>
            <div className="flex items-center space-x-2 text-sm md:text-base">
              <MapPin size={16} className="text-blue-200 flex-shrink-0" />
              <span className="font-medium">
                No. 413/10, Main Street, Kovil Kulam, Palamunai, Arayampathi, Batticaloa, Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav 
        className={`bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
        style={{ transform: scrolled ? 'translateY(0)' : 'translateY(40px)' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            <Link to="/" className="flex items-center">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-[#1e048b] rounded-md flex items-center justify-center">
                  <img src="/images/logo1.png"/>
                </div>
                <span className="font-bold text-xl text-[#1e048b]">Ultra Aluminium</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center">
              <NavLink to="/" label="Home" onClick={handleLinkClick} />
              
              <div className="relative dropdown">
                <button
                  onClick={() => handleDropdownToggle("aluminium")}
                  className="text-gray-800 font-medium flex items-center space-x-1 hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition-all duration-200 py-1"
                >
                  <span>Aluminium</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === "aluminium" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "aluminium" && (
                  <DropdownMenu>
                    <DropdownItem to="/production" label="Aluminium Products" onClick={handleLinkClick} />
                  </DropdownMenu>
                )}
              </div>
              
              <div className="relative dropdown">
                <button
                  onClick={() => handleDropdownToggle("products")}
                  className="text-gray-800 font-medium flex items-center space-x-1 hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition-all duration-200 py-1"
                >
                  <span>Products</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === "products" && (
                  <DropdownMenu>
                    <DropdownItem to="/profiles" label="Profiles" onClick={handleLinkClick} />
                    <DropdownItem to="/net" label="Net" onClick={handleLinkClick} />
                    <DropdownItem to="/solar" label="Solar Accessories" onClick={handleLinkClick} />
                  </DropdownMenu>
                )}
              </div>
              
              <NavLink to="/dealers" label="Dealers" onClick={handleLinkClick} />
              <NavLink to="/about" label="About Us" onClick={handleLinkClick} />
              <NavLink to="/contact" label="Contact" onClick={handleLinkClick} />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center text-gray-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-2 bg-white shadow-inner border-t border-gray-100">
            <MobileNavLink to="/" label="Home" onClick={handleLinkClick} />
            
            <div className="py-2">
              <button
                onClick={() => handleDropdownToggle("aluminium")}
                className="w-full flex justify-between items-center text-gray-800 font-medium"
              >
                <span>Aluminium</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${openDropdown === "aluminium" ? "rotate-180" : ""}`} 
                />
              </button>
              
              <div className={`pl-4 mt-1 overflow-hidden transition-all duration-200 ${
                openDropdown === "aluminium" ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
              }`}>
                <MobileNavLink 
                  to="/production" 
                  label="Aluminium Products" 
                  onClick={handleLinkClick} 
                  className="py-1 pl-2 border-l-2 border-gray-200"
                />
              </div>
            </div>
            
            <div className="py-2">
              <button
                onClick={() => handleDropdownToggle("products")}
                className="w-full flex justify-between items-center text-gray-800 font-medium"
              >
                <span>Products</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${openDropdown === "products" ? "rotate-180" : ""}`} 
                />
              </button>
              
              <div className={`pl-4 mt-1 overflow-hidden transition-all duration-200 ${
                openDropdown === "products" ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              }`}>
                <MobileNavLink 
                  to="/profiles" 
                  label="Profiles" 
                  onClick={handleLinkClick} 
                  className="py-1 pl-2 border-l-2 border-gray-200"
                />
                <MobileNavLink 
                  to="/net" 
                  label="Net" 
                  onClick={handleLinkClick} 
                  className="py-1 pl-2 border-l-2 border-gray-200"
                />
                <MobileNavLink 
                  to="/solar" 
                  label="Solar Accessories" 
                  onClick={handleLinkClick} 
                  className="py-1 pl-2 border-l-2 border-gray-200"
                />
              </div>
            </div>
            
            <MobileNavLink to="/dealers" label="Dealers" onClick={handleLinkClick} />
            <MobileNavLink to="/about" label="About Us" onClick={handleLinkClick} />
            <MobileNavLink to="/contact" label="Contact" onClick={handleLinkClick} />
          </div>
        </div>
      </nav>
    </header>
  );
}

// Reusable components for navigation
const NavLink = ({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) => (
  <Link
    to={to}
    className="text-gray-800 font-medium hover:text-[#1e048b] border-b-2 border-transparent hover:border-[#1e048b] transition-all duration-200 py-1"
    onClick={onClick}
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label, onClick, className = "" }: { to: string; label: string; onClick?: () => void; className?: string }) => (
  <Link
    to={to}
    className={`block text-gray-800 hover:text-[#1e048b] py-2 transition-colors ${className}`}
    onClick={onClick}
  >
    {label}
  </Link>
);

const DropdownMenu = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50 overflow-hidden animate-fadeIn">
    {children}
  </div>
);

const DropdownItem = ({ to, label, onClick }: { to: string; label: string; onClick?: () => void }) => (
  <Link 
    to={to} 
    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-[#1e048b] transition-colors" 
    onClick={onClick}
  >
    {label}
  </Link>
);
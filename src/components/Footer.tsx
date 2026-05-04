import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/logo1.jpeg" className="h-10 w-auto rounded-lg" alt="Logo" />
              <span className="font-bold text-2xl tracking-tight">ULTRA <span className="text-[#39b54a]">ALUMINIUM</span></span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading manufacturer of premium aluminum solutions for modern architecture and industrial excellence in Sri Lanka.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#39b54a] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#39b54a]">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Products', path: '/profile' },
                { name: 'Aluminium Systems', path: '/system' },
                { name: 'Latest News', path: '/news' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-[#39b54a] flex items-center group transition-colors duration-300">
                    <span className="w-0 group-hover:w-2 h-px bg-[#39b54a] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#39b54a]">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#39b54a] transition-colors duration-300">
                  <Phone size={18} className="text-[#39b54a] group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Call Us</span>
                  <span className="font-medium">+94 65 2051 144</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#39b54a] transition-colors duration-300">
                  <Mail size={18} className="text-[#39b54a] group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Email Us</span>
                  <span className="font-medium break-all">Ultra.aluminium2019@gmail.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#39b54a] transition-colors duration-300">
                  <MapPin size={18} className="text-[#39b54a] group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">Visit Us</span>
                  <span className="text-sm leading-relaxed text-gray-400">No. 413/10, Main Street, Kovil Kulam, Arayampathi, Batticaloa.</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-[#39b54a]">Newsletter</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Subscribe to get latest updates and news.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-800 border-none rounded-xl py-4 pl-6 pr-14 text-white focus:ring-2 focus:ring-[#39b54a] transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-[#39b54a] text-white rounded-lg flex items-center justify-center hover:bg-[#2e943c] transition-all duration-300"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ULTRA Aluminium (Pvt) Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AluminumPro</h3>
            <p className="text-gray-400">
              Leading manufacturer of premium aluminum solutions for modern architecture.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/profile" className="text-gray-400 hover:text-white">Profile</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white">News</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@aluminumpro.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>123 Business Ave, City, State</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AluminumPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
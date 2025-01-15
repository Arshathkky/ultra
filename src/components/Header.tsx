import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/ultra-aluminium-logo.png" 
                alt="Ultra Aluminium" 
                className="h-12"
              />
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
              <Link to="/profiles" className="hover:text-blue-600 font-medium">Profiles</Link>
              <Link to="/net" className="hover:text-blue-600 font-medium">Net</Link>
              <Link to="/solar" className="hover:text-blue-600 font-medium">Solar Accessories</Link>
              <Link to="/about" className="hover:text-blue-600 font-medium">About Us</Link>
              <Link to="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
import React, { useEffect } from 'react';
import ProductCard from '../components/Profilepage/ProductCart';
import { categories } from '../data/categoryData';

function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#1a0179] dark:text-white mb-12 tracking-wide uppercase">
          Aluminum Profile Categories
        </h1>
        <div className="space-y-8">
          {categories.map((category, index) => (
            <ProductCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
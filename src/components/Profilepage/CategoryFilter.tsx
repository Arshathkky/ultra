import React from 'react';
import { Category } from '../../types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
}

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <div className="flex flex-nowrap overflow-x-auto pb-2 gap-2 md:flex-wrap">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${selectedCategory === null 
              ? 'bg-[#1a0179] text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All Categories
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
              ${selectedCategory === category.id 
                ? 'bg-[#1a0179] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
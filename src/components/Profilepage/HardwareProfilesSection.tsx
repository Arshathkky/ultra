import React, { useState } from 'react';
import { allProfiles } from '../../data/profilesData';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

function HardwareProfilesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter categories based on search query and selected category
  const filteredCategories = allProfiles.filter(category => {
    // Filter by selected category if any
    if (selectedCategory && category.id !== selectedCategory) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      
      // Check if category title or description matches
      if (
        category.title.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query)
      ) {
        return true;
      }
      
      // Check if any product in this category matches
      return category.products.some(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.productSpecs.some(spec => 
          spec.code.toLowerCase().includes(query)
        )
      );
    }
    
    return true;
  });

  return (
    <div className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a0179] mb-4">Aluminum Profiles Catalog</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of aluminum profiles, from architectural systems to hardware components,
            designed for various applications and professional requirements.
          </p>
        </div>

        <div className="mb-8">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        <CategoryFilter 
          categories={allProfiles} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
        />

        {filteredCategories.length > 0 ? (
          <div className="space-y-8">
            {filteredCategories.map(category => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No profiles found matching your search criteria.</p>
            <button 
              className="mt-4 px-6 py-2 bg-[#1a0179] text-white rounded-md hover:bg-opacity-90 transition-colors"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HardwareProfilesSection;
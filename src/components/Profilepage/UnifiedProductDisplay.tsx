import React, { useState } from 'react';
import { Section, Product } from '../../types';
import ProductModal from './ProductModal';

interface UnifiedProductDisplayProps {
  section: Section;
}

function UnifiedProductDisplay({ section }: UnifiedProductDisplayProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Flatten all products from all categories in this section
  const allProducts = section.categories.flatMap(category => 
    category.products.map(product => ({
      ...product,
      categoryTitle: category.title,
      categoryIcon: category.icon
    }))
  );

  return (
    <div className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a0179] mb-4">
            {section.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {section.description}
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-[#1a0179] to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Single Unified Box with All Products */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allProducts.map((product, index) => (
                <div
                  key={`${product.categoryTitle}-${product.id}`}
                  className="relative cursor-pointer group transition-all duration-500 transform hover:-translate-y-2"
                  onClick={() => setSelectedProduct(product)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={product.finishOptions[0].image}
                      alt={product.name}
                      className={`w-full h-48 object-cover transition-transform duration-500 ${
                        hoveredIndex === index ? 'scale-110' : 'scale-100'
                      }`}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-[#1a0179]">
                        <product.categoryIcon className="w-3 h-3" />
                        {product.categoryTitle}
                      </div>
                    </div>

                    {/* Gradient Overlay on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent text-white p-4 flex flex-col justify-end transition-opacity duration-300 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      } hidden md:flex`}
                    >
                      <span className="font-bold text-lg mb-2">{product.name}</span>
                      <p className="text-sm text-gray-200 leading-relaxed line-clamp-2">{product.description}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          {product.productSpecs.length} Variants
                        </span>
                        <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          {product.finishOptions.length} Finishes
                        </span>
                      </div>
                    </div>

                    {/* Click indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 text-[#1a0179]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Details */}
                  <div className="mt-4 block md:hidden">
                    <div className="flex items-center gap-2 mb-2">
                      <product.categoryIcon className="w-4 h-4 text-[#1a0179]" />
                      <span className="text-xs font-medium text-[#1a0179] uppercase tracking-wide">
                        {product.categoryTitle}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{product.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {product.productSpecs.length} Variants
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {product.finishOptions.length} Finishes
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>
    </div>
  );
}

export default UnifiedProductDisplay;
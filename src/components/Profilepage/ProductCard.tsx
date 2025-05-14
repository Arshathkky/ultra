import React, { useState } from 'react';
import { Category, Product } from '../../types';
import ProductModal from './ProductModal';

function ProductCard({ category }: { category: Category }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Track selected product variant (index) per category
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const hasVariants = category.products.length > 1;
  const activeProduct = category.products[selectedIndex];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="p-6">
        {/* Category Title & Dropdown */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <category.icon className="w-8 h-8 text-[#1a0179]" />
          <h2 className="text-2xl font-semibold text-[#1a0179]">{category.title}</h2>

          {hasVariants && (
            <select
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
              className="ml-4 border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 focus:ring-[#1a0179] focus:border-[#1a0179]"
            >
              {category.products.map((product, index) => (
                <option key={index} value={index}>
                  {product.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <p className="text-gray-600 mb-6">{category.description}</p>

        {/* Single Selected Product */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            key={activeProduct.name}
            className="relative cursor-pointer group transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => setSelectedProduct(activeProduct)}
            onMouseEnter={() => setHoveredIndex(selectedIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img
                src={activeProduct.finishOptions[0].image}
                alt={activeProduct.name}
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  hoveredIndex === selectedIndex ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Desktop Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredIndex === selectedIndex ? 'opacity-100' : 'opacity-0'
                } hidden md:flex`}
              >
                <span className="font-semibold text-lg">{activeProduct.name}</span>
                <p className="text-sm text-gray-200">{activeProduct.description}</p>
              </div>
            </div>

            {/* Always Show Details on Mobile */}
            <div className="mt-3 block md:hidden">
              <h3 className="text-lg font-semibold text-gray-800">{activeProduct.name}</h3>
              <p className="text-sm text-gray-600">{activeProduct.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default ProductCard;

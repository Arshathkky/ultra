import React, { useState } from 'react';
import { Category, Product } from '../../types/index';
import ProductModal from './ProductModal';

function ProductCard({ category }: { category: Category }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <category.icon className="w-8 h-8 text-[#1a0179]" />
          <h2 className="text-2xl font-semibold text-[#1a0179]">{category.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer relative"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Image with hover effect */}
                <img
                  src={product.finishOptions[0].image}
                  alt={product.name}
                  className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                />

                {/* Description overlay with fade-in effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white font-semibold text-lg">
                    <span>{product.name}</span>
                    <p className="text-sm">{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default ProductCard;
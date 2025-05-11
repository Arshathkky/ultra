import React, { useState } from 'react';
import { Category, Product } from '../../types/index';
import ProductModal from './ProductModal';

function ProductCard({ category }: { category: Category }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <category.icon className="w-8 h-8 text-[#1a0179]" />
          <h2 className="text-2xl font-semibold text-[#1a0179]">{category.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{category.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => setSelectedProduct(product)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.finishOptions[0].image}
                    alt={product.name}
                    className={`w-full h-48 object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
                  />

                  {/* Desktop overlay */}
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-50 text-white p-4 flex flex-col justify-end transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    } hidden md:flex`}
                  >
                    <span className="font-semibold text-lg">{product.name}</span>
                    <p className="text-sm">{product.description}</p>
                  </div>
                </div>

                {/* Always show info on mobile */}
                <div className="mt-3 block md:hidden">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default ProductCard;

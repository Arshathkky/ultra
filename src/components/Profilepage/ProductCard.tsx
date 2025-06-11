import React, { useState } from 'react';
import { Category, Product } from '../../types';
import ProductModal from './ProductModal';

interface ProductCardProps {
  category: Category;
}

function ProductCard({ category }: ProductCardProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
  const hasVariants = category.products.length > 1;
  const activeProduct = category.products[selectedIndex];

  const getProductImage = (product: Product) => {
    // For products with configurations, use the first configuration's first finish
    if (product.configurations && product.configurations.length > 0) {
      return product.configurations[0].finishOptions[0]?.image;
    }
    // For regular products, use the first finish option
    return product.finishOptions?.[0]?.image;
  };

  const getProductVariantCount = (product: Product) => {
    if (product.configurations && product.configurations.length > 0) {
      return product.configurations.reduce((total, config) => total + config.productSpecs.length, 0);
    }
    return product.productSpecs?.length || 0;
  };

  const getProductFinishCount = (product: Product) => {
    if (product.configurations && product.configurations.length > 0) {
      return product.configurations.reduce((total, config) => total + config.finishOptions.length, 0);
    }
    return product.finishOptions?.length || 0;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="p-8">
        {/* Category Header */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-[#1a0179] to-blue-600 rounded-xl text-white">
              <category.icon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a0179]">{category.title}</h2>
          </div>

          {hasVariants && (
            <select
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
              className="ml-auto border-2 border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-[#1a0179] focus:border-[#1a0179] transition-colors bg-white shadow-sm"
            >
              {category.products.map((product, index) => (
                <option key={index} value={index}>
                  {product.name}
                </option>
              ))}
            </select>
          )}
        </div>

        <p className="text-gray-600 mb-8 leading-relaxed">{category.description}</p>

        {/* Product Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            key={activeProduct.name}
            className="relative cursor-pointer group transition-all duration-500 transform hover:-translate-y-2"
            onClick={() => setSelectedProduct(activeProduct)}
            onMouseEnter={() => setHoveredIndex(selectedIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
              <img
                src={getProductImage(activeProduct)}
                alt={activeProduct.name}
                className={`w-full h-56 object-cover transition-transform duration-500 ${
                  hoveredIndex === selectedIndex ? 'scale-110' : 'scale-100'
                }`}
              />

              {/* Configuration Badge for multi-config products */}
              {activeProduct.configurations && activeProduct.configurations.length > 1 && (
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                    {activeProduct.configurations.length} Configurations
                  </div>
                </div>
              )}

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent text-white p-6 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredIndex === selectedIndex ? 'opacity-100' : 'opacity-0'
                } hidden md:flex`}
              >
                <span className="font-bold text-xl mb-2">{activeProduct.name}</span>
                <p className="text-sm text-gray-200 leading-relaxed">{activeProduct.description}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {getProductVariantCount(activeProduct)} Variants
                  </span>
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {getProductFinishCount(activeProduct)} Finishes
                  </span>
                </div>
              </div>

              {/* Click indicator */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-800">{activeProduct.name}</h3>
                {activeProduct.configurations && activeProduct.configurations.length > 1 && (
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                    {activeProduct.configurations.length} Configs
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{activeProduct.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {getProductVariantCount(activeProduct)} Variants
                </span>
                <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {getProductFinishCount(activeProduct)} Finishes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default ProductCard;
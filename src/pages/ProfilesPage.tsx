import React, { useState } from 'react';
import { Box, Layout, X, ChevronRight, ArrowRight, Grid } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  specs: string[];
  applications: string[];
  image: string;
  examples: string[];
}

interface Category {
  title: string;
  icon: React.ElementType;
  description: string;
  products: Product[];
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Specifications</h4>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Applications</h4>
              <ul className="space-y-2">
                {product.applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain transform transition-transform duration-300 group-hover:scale-105"
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

function ProfilePage() {
  const categories: Category[] = [
    {
      title: 'Hardware Profiles',
      icon: Box,
      description: 'Durable and high-quality aluminum profiles for various hardware applications.',
      products: [
        {
          name: 'Box Bar',
          description: 'Aluminum box bars for multiple applications.',
          image: '/images/box 02.jpg',
          specs: ['Material: Aluminum', 'Finish: Anodized, powder-coated', 'Sizes: Various options available'],
          applications: ['Construction', 'Industrial use', 'Furniture'],
          examples: ['Standard Box Bar', 'Heavy Duty Box Bar', 'Slim Profile Box Bar']
        },
        {
          name: 'Round Pipe',
          description: 'Aluminum round pipes for various uses.',
          image: '/images/roundpipe.jpg',
          specs: ['Material: High-grade aluminum', 'Thickness: 1mm - 3mm', 'Length: 6m'],
          applications: ['Plumbing', 'Structural support', 'Decorative applications'],
          examples: ['1" Round Pipe', '2" Round Pipe', 'Heavy Duty Round Pipe']
        },
        {
          name: 'Angle Bar',
          description: 'L-shaped aluminum angle bars.',
          image: '/images/logo.png',
          specs: ['Material: Aluminum alloy', 'Surface: Smooth, anodized', 'Thickness: 1mm - 5mm'],
          applications: ['Reinforcement', 'Edge protection', 'Structural supports'],
          examples: ['1"x1" Angle Bar', '2"x1" Angle Bar', 'Heavy Duty Angle Bar']
        },
        {
          name: 'Curtain Rail Bar',
          description: 'High-quality aluminum curtain rails.',
          image: '/images/logo.png',
          specs: ['Material: Aluminum', 'Finish: Powder-coated', 'Length: Customizable'],
          applications: ['Homes', 'Offices', 'Hotels'],
          examples: ['Standard Curtain Rail', 'Heavy Duty Curtain Rail', 'Decorative Curtain Rail']
        },
        {
          name: 'Box Bar with Channel',
          description: 'Special aluminum box bars with channels.',
          image: '/images/logo.png',
          specs: ['Material: Aluminum', 'Customizable slots', 'Different sizes available'],
          applications: ['Sliding systems', 'Industrial frameworks', 'Architectural applications'],
          examples: ['Channel Box Bar Small', 'Channel Box Bar Medium', 'Channel Box Bar Large']
        }
      ]
    },
    {
      title: 'Section Profiles',
      icon: Layout,
      description: 'Structural aluminum profiles designed for a wide range of applications.',
      products: [
        {
          name: 'Shop Front',
          description: 'Aluminum profiles for modern shop fronts.',
          image: '/images/logo.png',
          specs: ['Material: High-strength aluminum', 'Customizable sizes', 'Elegant finish'],
          applications: ['Retail stores', 'Commercial buildings', 'Shopping malls'],
          examples: ['Standard Shop Front', 'Glass Support Shop Front', 'Heavy Duty Shop Front']
        },
        {
          name: 'Sliding Door',
          description: 'Aluminum profiles for sliding doors.',
          image: '/images/logo.png',
          specs: ['Material: Durable aluminum', 'Track included', 'Various thicknesses'],
          applications: ['Homes', 'Offices', 'Retail stores'],
          examples: ['Single Sliding Door', 'Double Sliding Door', 'Heavy Duty Sliding Door']
        },
        {
          name: 'Door Section',
          description: 'High-quality aluminum door profiles.',
          image: '/images/logo.png',
          specs: ['Material: High-grade aluminum', 'Surface: Anodized or powder-coated', 'Customizable dimensions'],
          applications: ['Homes', 'Offices', 'Hotels'],
          examples: ['Standard Door Profile', 'Decorative Door Profile', 'Heavy Duty Door Profile']
        },
        {
          name: 'Sliding Window',
          description: 'Aluminum profiles for sliding windows.',
          image: '/images/logo.png',
          specs: ['Material: Lightweight aluminum', 'Smooth sliding mechanism', 'Various colors available'],
          applications: ['Residential buildings', 'Commercial buildings', 'Hotels'],
          examples: ['Single Sliding Window', 'Double Sliding Window', 'Heavy Duty Sliding Window']
        },
        {
          name: 'Casement Window',
          description: 'Casement window aluminum profiles.',
          image: '/images/logo.png',
          specs: ['Material: Aluminum alloy', 'Various frame thicknesses', 'Weather-resistant'],
          applications: ['Homes', 'Offices', 'Architectural projects'],
          examples: ['Standard Casement Window', 'Decorative Casement Window', 'Heavy Duty Casement Window']
        }
      ]
    }
];


  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#1a0179] dark:text-white mb-12 tracking-wide uppercase">Aluminum Profile Categories</h1>
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

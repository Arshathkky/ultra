import React, { useState } from 'react';
import { Box, Layout, SlidersHorizontal, X, ArrowRight, ChevronRight, Grid } from 'lucide-react';

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
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img src={product.image} alt={product.name} className="w-full h-full object-contain rounded-lg mb-4" />
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

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Available Types</h4>
              <ul className="space-y-2">
                {product.examples.map((example, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Grid className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">{example}</span>
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
          <category.icon className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
        </div>
        <p className="text-gray-600 mb-6">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{product.name}</h3>
                    <p className="text-white/80 text-sm">{product.description}</p>
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
      title: 'Structural Profiles',
      icon: Box,
      description: 'Premium aluminum profiles for construction and industrial applications',
      products: [
        {
          name: 'Box Bars',
          description: 'Versatile box-section aluminum profiles for structural applications',
          image: '/images/box 02.jpg',
          specs: [
            'Material: High-grade aluminum alloy',
            'Surface Finish: Mill finish, anodized',
            'Length: 3.65m, 6.10m standard',
            'Wall Thickness: 0.9mm to 1.2mm',
          ],
          applications: [
            'Structural frameworks',
            'Display systems',
            'Furniture manufacturing',
            'Industrial applications',
          ],
          examples: [
            '3/4" x 3/4" Box Bar',
            '2" x 1" Box Bar',
            '1" x 1" Box Bar',
            '1.5" x 1.5" Box Bar',
          ],
        },
        {
          name: 'Angles',
          description: 'L-shaped profiles for corner joints and structural support',
          image: 'images/logo1.png',
          specs: [
            'Material: Premium aluminum alloy',
            'Finish Options: Natural, anodized',
            'Standard Lengths: 3.65m, 6.10m',
            'Thickness Range: 1.0mm to 3.0mm',
          ],
          applications: [
            'Corner reinforcement',
            'Frame construction',
            'Support structures',
            'Decorative trim',
          ],
          examples: [
            '1" x 1" Thick Angle',
            '1/2" x 1/2" Angle Channel',
            '3/4" x 3/4" Angle',
            '1.5" x 1.5" Heavy Duty Angle',
          ],
        },
        {
          name: 'Round Pipes',
          description: 'Circular aluminum profiles for various applications',
          image: '/images/roundpipe.jpg',
          specs: [
            'Material: Aluminum alloy',
            'Surface: Smooth finish',
            'Length Options: 3.65m, 6.10m',
            'Wall Thickness: 0.9mm to 1.2mm',
          ],
          applications: [
            'Handrails',
            'Support posts',
            'Furniture making',
            'Decorative elements',
          ],
          examples: [
            '5/8" Round Pipe',
            '1" Round Pipe',
            '1.5" Round Pipe',
            '2" Round Pipe',
          ],
        },
      ],
    },
    {
      title: 'Commercial Systems',
      icon: Layout,
      description: 'Complete solutions for commercial and retail spaces',
      products: [
        {
          name: 'Shop Front Partitions',
          description: '100mm premium partition system for commercial spaces',
          image: 'images/logo1.png',
          specs: [
            'Profile Width: 100mm',
            'Material: Heavy-duty aluminum',
            'Thickness: 1.2mm to 2.0mm',
            'Glass Compatibility: 6mm to 12mm',
          ],
          applications: [
            'Retail storefronts',
            'Office partitions',
            'Shopping malls',
            'Commercial buildings',
          ],
          examples: [
            '100mm Single Glazed System',
            '100mm Double Glazed System',
            'Corner Posts',
            'Door Frames',
          ],
        },
        {
          name: 'Sliding Systems',
          description: 'Advanced sliding door and window solutions',
          image: 'images/logo1.png',
          specs: [
            'Track Options: Single, double, triple',
            'Profile Thickness: 1.3mm to 1.6mm',
            'Wheel System: Heavy-duty rollers',
            'Security: Multi-point locking',
          ],
          applications: [
            'Patio doors',
            'Room dividers',
            'Closet systems',
            'Commercial entrances',
          ],
          examples: [
            '2-Track Sliding Door',
            '3-Track Sliding Window',
            'Heavy Duty Sliding System',
            'Slim Profile Slider',
          ],
        },
      ],
    },
    {
      title: 'Window Systems',
      icon: SlidersHorizontal,
      description: 'Energy-efficient window solutions for modern architecture',
      products: [
        {
          name: '60mm Casement Windows',
          description: 'Standard casement window system with excellent performance',
          image: 'images/logo1.png',
          specs: [
            'Frame Depth: 60mm',
            'Material: High-strength aluminum',
            'Weather Seal: Rubber gasket',
            'Glass: Single or double-glazed',
          ],
          applications: [
            'Residential windows',
            'Commercial buildings',
            'Facades',
            'Skylights',
          ],
          examples: [
            'Single Hinged Casement',
            'Double Hinged Casement',
            'Fixed Casement',
            'Sliding Casement',
          ],
        },
        {
          name: '70mm Premium Windows',
          description: 'Enhanced thermal performance window system',
          image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80&w=800',
          specs: [
            'Frame Depth: 70mm',
            'Thermal Break: 34mm polyamide',
            'Glass Thickness: Up to 32mm',
            'Air Tightness: Class 4'
          ],
          applications: [
            'High-end residential',
            'Commercial buildings',
            'Green buildings',
            'Sound-sensitive areas'
          ],
          examples: [
            'Tilt-Turn Window',
            'Push-Out Casement',
            'Awning Window',
            'Picture Window'
          ]
        }
      ],
    },
  ];

  return (
 
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Aluminum Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-quality aluminum profiles
            engineered for durability and performance
          </p>
        </div>
     </div>   
    <div className="p-6">
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

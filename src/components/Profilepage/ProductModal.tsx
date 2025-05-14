import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronRight, ArrowRight } from 'lucide-react';
import { Product } from '../../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<number>(0);
  const [selectedSpecIndex, setSelectedSpecIndex] = useState<number>(0);
  const selectedSpec = product.productSpecs[selectedSpecIndex];

  // Close the modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div
        ref={modalRef}
        className="bg-white rounded-lg max-w-4xl w-full p-6 relative max-h-[90vh] overflow-y-auto animate-scaleIn"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side with images and description */}
          <div>
            {/* Main image */}
            <div className="mb-3">
              <img
                src={product.finishOptions[selectedFinish].image}
                alt={`${product.name} - ${product.finishOptions[selectedFinish].type}`}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
              {product.finishOptions.map((finish, index) => (
                <div
                  key={index}
                  className={`cursor-pointer border-2 rounded flex-shrink-0 transition-all ${
                    selectedFinish === index
                      ? 'border-blue-500 scale-105'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedFinish(index)}
                >
                  <img
                    src={finish.image}
                    alt={finish.type}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="text-xs font-medium text-center py-1">
                    {finish.type}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
          </div>

          {/* Right side with spec selector and details */}
          <div className="space-y-6">
            {/* Dropdown Selector */}
            {product.productSpecs.length > 1 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Profile Size:
                </label>
                <select
                  value={selectedSpecIndex}
                  onChange={(e) => setSelectedSpecIndex(Number(e.target.value))}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#1a0179] focus:border-[#1a0179] sm:text-sm"
                >
                  {product.productSpecs.map((spec, index) => (
                    <option key={index} value={index}>
                      {spec.size} ({spec.thickness} / {spec.length})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Selected Spec Table */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Specifications</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Code
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Size
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Thickness
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Length
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-2 text-sm text-gray-900">{selectedSpec.code}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{selectedSpec.size}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{selectedSpec.thickness}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{selectedSpec.length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Other Specs */}
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

            {/* Applications */}
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

export default ProductModal;

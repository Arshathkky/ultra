import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronRight, ArrowRight, Info, Settings, Wrench } from 'lucide-react';
import { Product } from '../../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const getConfigOptions = () => {
    const prefixes = product.productSpecs.map((s) => s.code.match(/^\D+/)?.[0] || '');
    return Array.from(new Set(prefixes)); // Unique prefixes like "76SF", "10SF"
  };

  const [configOptions] = useState<string[]>(getConfigOptions());
  const [selectedConfig, setSelectedConfig] = useState<string>(configOptions[0]);
  const filteredSpecs = product.productSpecs.filter((spec) => spec.code.startsWith(selectedConfig));
  const [selectedSpecIndex, setSelectedSpecIndex] = useState<number>(0);
  const [selectedFinish, setSelectedFinish] = useState<number>(0);

  const selectedSpec = filteredSpecs[selectedSpecIndex];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  useEffect(() => {
    // Reset spec and finish when config changes
    setSelectedSpecIndex(0);
    setSelectedFinish(0);
  }, [selectedConfig]);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-6xl w-full p-8 relative max-h-[90vh] overflow-y-auto animate-scaleIn shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Main Image */}
            <div className="mb-4">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={product.finishOptions[selectedFinish]?.image}
                  alt={`${product.name} - ${product.finishOptions[selectedFinish]?.type}`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-gray-800">
                    {product.finishOptions[selectedFinish]?.type} Finish
                  </span>
                </div>
              </div>
            </div>

            {/* Finish Options */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                Available Finishes
              </h4>
              <div className="grid grid-cols-4 gap-3">
                {product.finishOptions.map((finish, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                      selectedFinish === index
                        ? 'border-[#1a0179] ring-2 ring-[#1a0179]/20 scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedFinish(index)}
                  >
                    <img
                      src={finish.image}
                      alt={finish.type}
                      className="w-full h-16 object-cover"
                    />
                    <div className="p-2 text-center bg-white">
                      <div className="text-xs font-medium text-gray-700">{finish.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-[#1a0179] mb-3">{product.name}</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Configuration Selector */}
            {configOptions.length > 1 && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  <Settings className="inline w-4 h-4 mr-2" />
                  Select Configuration
                </label>
                <select
                  value={selectedConfig}
                  onChange={(e) => setSelectedConfig(e.target.value)}
                  className="block w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#1a0179] focus:border-[#1a0179] transition-colors bg-white shadow-sm"
                >
                  {configOptions.map((config, index) => (
                    <option key={index} value={config}>
                      {config} Series
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Spec Selector */}
            {filteredSpecs.length > 1 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Variant Options
                </label>
                <select
                  value={selectedSpecIndex}
                  onChange={(e) => setSelectedSpecIndex(Number(e.target.value))}
                  className="block w-full border border-gray-200 rounded-md px-4 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm"
                >
                  {filteredSpecs.map((spec, index) => (
                    <option key={index} value={index}>
                      {spec.code} - {spec.size} ({spec.thickness})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Tech Spec Table */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 mr-2 text-[#1a0179]" />
                Technical Specifications
              </h4>
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                <table className="min-w-full bg-white">
                  <thead className="bg-gradient-to-r from-[#1a0179] to-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Product Code
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Dimensions
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Thickness
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                        Length
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-gray-100">
                      <td className="px-4 py-4 text-sm font-mono font-semibold text-[#1a0179]">
                        {selectedSpec.code}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                        {selectedSpec.size}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {selectedSpec.thickness}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {selectedSpec.length}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-[#1a0179]" />
                Key Features
              </h4>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <ChevronRight className="w-5 h-5 mt-0.5 text-[#1a0179] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span className="text-gray-700 leading-relaxed">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <ArrowRight className="w-5 h-5 mr-2 text-[#1a0179]" />
                Ideal Applications
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {product.applications.map((app, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-800 font-medium text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;

import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronRight, ArrowRight, Info, Settings, Wrench } from 'lucide-react';
import { Product, Configuration } from '../../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [selectedConfigId, setSelectedConfigId] = useState<string>('');
  const [selectedFinish, setSelectedFinish] = useState<number>(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  useEffect(() => {
    if (product.configurations && product.configurations.length > 0) {
      setSelectedConfigId(product.configurations[0].id);
    }
  }, [product]);

  const currentConfig: Configuration | null = product.configurations
    ? product.configurations.find(config => config.id === selectedConfigId) || product.configurations[0]
    : null;

  const currentFinishOptions = currentConfig?.finishOptions || product.finishOptions || [];
  const currentProductSpecs = currentConfig?.productSpecs || product.productSpecs || [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        zoomImage ? setZoomImage(null) : onClose();
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
  }, [onClose, zoomImage]);

  useEffect(() => {
    setSelectedFinish(0);
  }, [selectedConfigId]);

  return (
    <>
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
              <div className="mb-4">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={currentFinishOptions[selectedFinish]?.image}
                    alt={`${product.name} - ${currentFinishOptions[selectedFinish]?.type}`}
                    className="w-full h-80 object-cover cursor-zoom-in"
                    onClick={() => setZoomImage(currentFinishOptions[selectedFinish]?.image || '')}
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-medium text-gray-800">
                      {currentFinishOptions[selectedFinish]?.type} Finish
                    </span>
                  </div>
                  {currentConfig && (
                    <div className="absolute top-4 left-4 bg-[#1a0179]/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-medium text-white">
                        {currentConfig.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Available Finishes
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {currentFinishOptions.map((finish, index) => (
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
                        className="w-full h-16 object-cover cursor-zoom-in"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent parent click
                          setZoomImage(finish.image);
                        }}
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
                <p className="text-gray-700 leading-relaxed">
                  {currentConfig?.description || product.description}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {product.configurations && product.configurations.length > 1 && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    <Settings className="inline w-4 h-4 mr-2" />
                    Select Configuration
                  </label>
                  <select
                    value={selectedConfigId}
                    onChange={(e) => setSelectedConfigId(e.target.value)}
                    className="block w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-[#1a0179] focus:border-[#1a0179] transition-colors bg-white shadow-sm"
                  >
                    {product.configurations.map((config) => (
                      <option key={config.id} value={config.id}>
                        {config.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {currentProductSpecs.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-[#1a0179]" />
                    Technical Specifications
                  </h4>
                  <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                    <table className="min-w-full bg-white">
                      <thead className="bg-gradient-to-r from-[#1a0179] to-blue-600 text-white">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Product Code</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Dimensions</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Thickness</th>
                          <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Length</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentProductSpecs.map((spec, index) => (
                          <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}>
                            <td className="px-4 py-4 text-sm font-mono font-semibold text-[#1a0179]">{spec.code}</td>
                            <td className="px-4 py-4 text-sm text-gray-900 font-medium">{spec.size}</td>
                            <td className="px-4 py-4 text-sm text-gray-900">{spec.thickness}</td>
                            <td className="px-4 py-4 text-sm text-gray-900">{spec.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

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

      {/* Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <div className="relative max-w-4xl w-full p-4">
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={zoomImage}
              alt="Zoomed Finish"
              className="w-full h-auto max-h-[90vh] rounded-lg shadow-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductModal;

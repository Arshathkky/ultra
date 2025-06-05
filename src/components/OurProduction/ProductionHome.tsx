import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Shield, Leaf, Factory } from 'lucide-react';

const systems = [
  { 
    id: 'production', 
    name: 'Production Cycle', 
    icon: Factory,
    description: 'Our aluminum production process from waste to finished products',
    color: 'from-blue-500 to-blue-700'
  },
  { 
    id: 'quality', 
    name: 'Quality Management', 
    icon: Check,
    description: 'Ensuring highest standards through rigorous quality processes',
    color: 'from-green-500 to-green-700'
  },
  { 
    id: 'safety', 
    name: 'Safety Management', 
    icon: Shield,
    description: 'Prioritizing workplace safety at every step',
    color: 'from-orange-500 to-red-600'
  },
  { 
    id: 'environment', 
    name: 'Environmental Management', 
    icon: Leaf,
    description: 'Our commitment to sustainable production',
    color: 'from-emerald-500 to-emerald-700'
  },
];

const ProductionHome = () => {
  const navigate = useNavigate();

  const handleSystemClick = (systemId: string) => {
    window.scrollTo(0, 0);
    navigate(`/systems/${systemId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Integrated Management Systems
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to managing production, quality, safety, and environmental aspects
            of our aluminum manufacturing facility.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <button
                key={system.id}
                onClick={() => handleSystemClick(system.id)}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${system.color} opacity-90`} />
                <div className="relative p-8 text-white">
                  <Icon className="w-12 h-12 mb-4" />
                  <h2 className="text-2xl font-bold mb-3">{system.name}</h2>
                  <p className="text-white/90">{system.description}</p>
                  <div className="mt-6 inline-flex items-center text-sm font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductionHome;
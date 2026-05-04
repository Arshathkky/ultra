import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Shield, Leaf, Factory } from 'lucide-react';

const systems = [
  { 
    id: 'production', 
    name: 'Production Cycle', 
    icon: Factory,
    description: 'Our aluminum production process from waste to finished products',
    color: 'from-[#05af28] to-blue-700'
  },
  { 
    id: 'quality', 
    name: 'Quality Management', 
    icon: Check,
    description: 'Ensuring highest standards through rigorous quality processes',
    color: 'from-[#39b54a] to-emerald-700'
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
    color: 'from-blue-500 to-[#05af28]'
  },
];

const ProductionHome = () => {
  const navigate = useNavigate();

  const handleSystemClick = (systemId: string) => {
    window.scrollTo(0, 0);
    navigate(`/systems/${systemId}`);
  };

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Integrated <span className="text-[#05af28]">Management Systems</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Our comprehensive approach to managing production, quality, safety, and environmental aspects
            of our aluminum manufacturing facility.
          </motion.p>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <motion.button
                key={system.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => handleSystemClick(system.id)}
                className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-10 text-left text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{system.name}</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">{system.description}</p>
                  <div className="inline-flex items-center text-sm font-bold tracking-widest uppercase">
                    Learn More Systems
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductionHome;
import { Check, Shield, Leaf, Factory } from 'lucide-react';
import { SystemType } from './ManagementSystems';

interface SystemNavigationProps {
  activeSystem: SystemType;
  onSystemChange: (system: SystemType) => void;
}

const SystemNavigation = ({ activeSystem, onSystemChange }: SystemNavigationProps) => {
  const systems = [
    { 
      id: 'production', 
      name: 'Production Cycle', 
      icon: Factory, 
      description: 'Our aluminum production process from waste to finished products' 
    },
    { 
      id: 'quality', 
      name: 'Quality Management', 
      icon: Check, 
      description: 'Ensuring highest standards through rigorous quality processes' 
    },
    { 
      id: 'safety', 
      name: 'Safety Management', 
      icon: Shield, 
      description: 'Prioritizing workplace safety at every step' 
    },
    { 
      id: 'environment', 
      name: 'Environmental Management', 
      icon: Leaf, 
      description: 'Our commitment to sustainable production' 
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <button
                key={system.id}
                onClick={() => onSystemChange(system.id as SystemType)}
                className={`
                  flex items-center p-4 rounded-lg transition-all duration-300
                  ${activeSystem === system.id 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                <Icon className={`w-6 h-6 mr-3 ${activeSystem === system.id ? 'text-white' : 'text-blue-600'}`} />
                <div className="text-left">
                  <h3 className="font-bold">{system.name}</h3>
                  <p className={`text-sm mt-1 ${activeSystem === system.id ? 'text-blue-100' : 'text-gray-600'}`}>
                    {system.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SystemNavigation;
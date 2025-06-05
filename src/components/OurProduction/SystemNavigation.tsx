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
      name: 'Production', 
      icon: Factory, 
      description: 'Our aluminum production process' 
    },
    { 
      id: 'quality', 
      name: 'Quality', 
      icon: Check, 
      description: 'Ensuring highest standards' 
    },
    { 
      id: 'safety', 
      name: 'Safety', 
      icon: Shield, 
      description: 'Workplace safety priority' 
    },
    { 
      id: 'environment', 
      name: 'Environment', 
      icon: Leaf, 
      description: 'Sustainable production' 
    },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white shadow-md px-2 py-3 lg:px-4 lg:py-6">
      <div className="max-w-full lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-2 lg:gap-4">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <button
                key={system.id}
                onClick={() => onSystemChange(system.id as SystemType)}
                className={`
                  flex flex-col items-center p-2 lg:p-4 rounded-lg transition-all duration-300
                  ${activeSystem === system.id 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                `}
              >
                <Icon className={`w-5 h-5 lg:w-6 lg:h-6 mb-1 ${activeSystem === system.id ? 'text-white' : 'text-blue-600'}`} />
                <h3 className="text-xs lg:text-base font-bold text-center">{system.name}</h3>
                <p className={`hidden lg:block text-sm mt-1 ${activeSystem === system.id ? 'text-blue-100' : 'text-gray-600'}`}>
                  {system.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SystemNavigation;
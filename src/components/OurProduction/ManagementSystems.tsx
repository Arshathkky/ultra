import { useState } from 'react';
import ProductionCycle from './ProductionCycle.tsx';
import SystemNavigation from './SystemNavigation.tsx';
import EnvironmentManagement from './EnvironmentManagement.tsx';
import SafetyManagement from './SafetyManagement.tsx';
import QualityManagement from './QualityManagement.tsx';


export type SystemType = 'production' | 'quality' | 'safety' | 'environment';

const ManagementSystems = () => {
  const [activeSystem, setActiveSystem] = useState<SystemType>('production');

  const handleSystemChange = (system: SystemType) => {
    setActiveSystem(system);
  };

  return (
    <div className="relative w-full">
      <SystemNavigation activeSystem={activeSystem} onSystemChange={handleSystemChange} />
      
      <div className="mt-20">
        {activeSystem === 'production' && <ProductionCycle />}
        {activeSystem === 'quality' && <QualityManagement />}
        {activeSystem === 'safety' && <SafetyManagement />}
        {activeSystem === 'environment' && <EnvironmentManagement />}
      </div>
    </div>
  );
};

export default ManagementSystems;
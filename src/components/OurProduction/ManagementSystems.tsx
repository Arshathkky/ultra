import { useState } from 'react';
import ProductionCycle from './ProductionCycle';
import QualityManagement from './QualityManagement';
import SafetyManagement from './SafetyManagement';
import EnvironmentManagement from './EnvironmentManagement';
import SystemNavigation from './SystemNavigation';

export type SystemType = 'production' | 'quality' | 'safety' | 'environment';

function ManagementSystems() {
  const [activeSystem, setActiveSystem] = useState<SystemType>('production');

  const renderActiveSystem = () => {
    switch (activeSystem) {
      case 'production':
        return <ProductionCycle />;
      case 'quality':
        return <QualityManagement />;
      case 'safety':
        return <SafetyManagement />;
      case 'environment':
        return <EnvironmentManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full lg:max-w-7xl mx-auto px-4 py-4 lg:px-8 lg:py-8">
        <SystemNavigation activeSystem={activeSystem} onSystemChange={setActiveSystem} />
        <div className="mt-4 lg:mt-8">
          {renderActiveSystem()}
        </div>
      </div>
    </div>
  );
}

export default ManagementSystems;
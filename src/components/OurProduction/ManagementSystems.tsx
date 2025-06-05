import { useState, useEffect, useLayoutEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductionCycle from './ProductionCycle';
import QualityManagement from './QualityManagement';
import SafetyManagement from './SafetyManagement';
import EnvironmentManagement from './EnvironmentManagement';
import SystemNavigation from './SystemNavigation';

export type SystemType = 'production' | 'quality' | 'safety' | 'environment';

function ManagementSystems() {
  const { system } = useParams();
  const navigate = useNavigate();
  const [activeSystem, setActiveSystem] = useState<SystemType>('production');

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (system && ['production', 'quality', 'safety', 'environment'].includes(system)) {
      setActiveSystem(system as SystemType);
      window.scrollTo(0, 0);
    } else {
      navigate('/systems/production');
    }
  }, [system, navigate]);

  const handleSystemChange = (newSystem: SystemType) => {
    window.scrollTo(0, 0);
    navigate(`/systems/${newSystem}`);
  };

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
        <SystemNavigation activeSystem={activeSystem} onSystemChange={handleSystemChange} />
        <div className="mt-4 lg:mt-8">
          {renderActiveSystem()}
        </div>
      </div>
    </div>
  );
}

export default ManagementSystems;
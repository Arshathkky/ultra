import React, { useEffect } from 'react';

import HardwareProfilesSection from '../components/Profilepage/HardwareProfilesSection';

function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        
      <main>
        <HardwareProfilesSection />
      </main>
      </div>
    </div>
  );
}

export default ProfilePage;
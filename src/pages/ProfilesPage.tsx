import React, { useEffect } from 'react';


import UnifiedProductDisplay from '../components/Profilepage/UnifiedProductDisplay';
import { sections } from '../data/profilesData';

function ProfilePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        
      <main className="pb-12">
        {sections.map((section) => (
          <UnifiedProductDisplay key={section.id} section={section} />
        ))}
      </main>
      </div>
    </div>
  );
}

export default ProfilePage;
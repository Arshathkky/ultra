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
        
      <main>
       {sections.map((section, index) => (
          <div
            key={section.id}
            className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
          >
            <UnifiedProductDisplay section={section} />
          </div>
        ))}
      </main>
      </div>
    </div>
  );
}

export default ProfilePage;
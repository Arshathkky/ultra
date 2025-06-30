import React, { useState, useEffect } from 'react';
import ChatSidebar from './ChatSidebar';
import { users } from '../data';

const WhatsAppChat: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [viewportHeight, setViewportHeight] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0);

  const handleSelectUser = (userId: number) => {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    const phoneNumber = user.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
    setSelectedUserId(userId);
  };

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div
      className="w-full bg-white rounded-lg shadow-md flex flex-col sm:flex-col overflow-hidden"
      style={{
        height: viewportHeight < 550 ? viewportHeight : 450,
        maxWidth: '100%',
      }}
    >
      {/* Sidebar */}
      <div className="w-full sm:w-[200px] flex-shrink-0 border-b sm:border-b-0 sm:border-r">
        <ChatSidebar
          users={users}
          selectedUserId={selectedUserId}
          onSelectUser={handleSelectUser}
        />
      </div>

      {/* Chat message area */}
      <div className="flex-1 flex items-center justify-center bg-[#f0f2f5] px-4 py-4">
        <p className="text-center text-gray-600 text-sm">
          Select a contact from the list to start a WhatsApp conversation.
        </p>
      </div>
    </div>
  );
};

export default WhatsAppChat;

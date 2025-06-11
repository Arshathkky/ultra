import React from 'react';
import ChatSidebar from './ChatSidebar';
import { users } from '../data';

const WhatsAppChat: React.FC = () => {
  const handleSelectUser = (userId: number) => {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    const phoneNumber = user.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-md flex overflow-hidden h-[600px] sm:h-[700px] lg:h-full">
      {/* Sidebar */}
      <div className="w-[300px] border-r">
        <ChatSidebar 
          users={users} 
          selectedUserId={null} 
          onSelectUser={handleSelectUser} 
        />
      </div>

      {/* Chat message area */}
      <div className="flex-1 flex items-center justify-center bg-[#f0f2f5] px-4">
        <p className="text-center text-gray-600 text-sm">
          Select a contact from the list to start a WhatsApp conversation.
        </p>
      </div>
    </div>
  );
};

export default WhatsAppChat;

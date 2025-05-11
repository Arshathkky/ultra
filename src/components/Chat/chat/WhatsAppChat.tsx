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
    <div className="w-full p-4 bg-[#f0f2f5] h-full flex">
      {/* Chat Sidebar */}
      <div className="w-[300px] h-full overflow-y-auto">
        <ChatSidebar 
          users={users} 
          selectedUserId={null} 
          onSelectUser={handleSelectUser} 
        />
      </div>

      {/* Right Side Text */}
      <div className="flex-1 flex items-center justify-center bg-white">
        <p className="text-lg text-gray-600 font-medium text-center px-6">
          Select a contact from the list to start a WhatsApp conversation.
        </p>
      </div>
    </div>
  );
};

export default WhatsAppChat;

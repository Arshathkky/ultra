import React from 'react';
import { Search, Menu } from 'lucide-react';
import { User } from '../chat';

interface ChatSidebarProps {
  users: User[];
  selectedUserId: number | null;
  onSelectUser: (userId: number) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ 
  users, 
  selectedUserId, 
  onSelectUser 
}) => {
  return (
    <div className="w-full h-full flex flex-col bg-white border-r">
      {/* Header */}
      <div className="bg-[#075E54] text-white py-3 px-4 flex justify-between items-center">
        <h1 className="text-xl font-medium">WhatsApp Chat</h1>
        <Menu size={20} />
      </div>
      
      {/* Search bar */}
      <div className="px-3 py-2 bg-[#F6F6F6]">
        <div className="bg-white rounded-full flex items-center px-3 py-1">
          <Search size={18} className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search or start new chat" 
            className="w-full py-1 bg-transparent outline-none text-sm"
          />
        </div>
      </div>
      
      {/* Contacts */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <div 
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className={`flex items-center px-3 py-3 border-b cursor-pointer hover:bg-gray-50 transition-colors
              ${selectedUserId === user.id ? 'bg-[#f0f2f5]' : ''}`}
          >
            {/* Avatar */}
            <div className="relative mr-3">
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
              {user.lastSeen === 'online' && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            
            {/* User info */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{user.name}</h3>
                <span className="text-xs text-gray-500">{
                  user.lastSeen === 'online' 
                    ? 'online' 
                    : user.lastSeen
                }</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 truncate pr-2">{user.status}</p>
                {user.unreadCount > 0 && (
                  <span className="bg-[#25D366] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {user.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
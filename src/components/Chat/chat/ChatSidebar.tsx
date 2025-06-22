import React from 'react';
import { Search, Menu } from 'lucide-react';
import { User } from '../chat';

interface ChatSidebarProps {
  users: User[];
  selectedUserId: number | null;
  onSelectUser: (userId: number) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({ users, onSelectUser }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Header */}
      <div className="bg-[#075E54] text-white py-3 px-4 flex justify-between items-center">
        <h1 className="text-lg font-medium">WhatsApp Chat</h1>
        <Menu size={20} />
      </div>

      {/* Search Bar */}
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

      {/* Contact List - No scroll, fits within full height */}
      <div className="flex-1">
        {users.map(user => (
          <div
            key={user.id}
            onClick={() => onSelectUser(user.id)}
            className="flex items-center px-3 py-2 border-b cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div className="flex-1">
              <h3 className="font-medium text-sm">{user.name}</h3>
              <p className="text-xs text-gray-500 truncate">{user.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;

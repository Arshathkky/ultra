import React, { useState, useEffect } from 'react';
import ChatSidebar from './ChatSidebar';
import ChatArea from './ChatArea';
import { users, initialMessages } from '../data';
import { Message } from '../chat';

const WhatsAppChat: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Record<number, Message[]>>(initialMessages);
  
  // Select a user
  const handleSelectUser = (userId: number) => {
    setSelectedUserId(userId);
    
    // Mark unread messages as read
    const updatedUsers = users.map(user => 
      user.id === userId ? { ...user, unreadCount: 0 } : user
    );
  };
  
  // Send a new message
  const handleSendMessage = (text: string) => {
    if (!selectedUserId) return;
    
    const newMessage: Message = {
      id: messages[selectedUserId].length + 1,
      senderId: 0, // Current user
      text,
      timestamp: new Date().toISOString(),
      status: 'sent'
    };
    
    // Add message to current chat
    setMessages(prev => ({
      ...prev,
      [selectedUserId]: [...prev[selectedUserId], newMessage]
    }));
    
    // Simulate message status change after a delay
    setTimeout(() => {
      setMessages(prev => {
        const updatedMessages = [...prev[selectedUserId]];
        const lastIndex = updatedMessages.length - 1;
        
        if (lastIndex >= 0 && updatedMessages[lastIndex].senderId === 0) {
          updatedMessages[lastIndex] = {
            ...updatedMessages[lastIndex],
            status: 'delivered'
          };
        }
        
        return {
          ...prev,
          [selectedUserId]: updatedMessages
        };
      });
    }, 1000);
    
    // Simulate response after a delay for demo purposes
    if (Math.random() > 0.5) {
      setTimeout(() => {
        const selectedUser = users.find(user => user.id === selectedUserId);
        if (!selectedUser) return;
        
        const responseMessage: Message = {
          id: messages[selectedUserId].length + 2,
          senderId: selectedUserId,
          text: `This is an automated response from ${selectedUser.name}`,
          timestamp: new Date().toISOString(),
          status: 'delivered'
        };
        
        setMessages(prev => ({
          ...prev,
          [selectedUserId]: [...prev[selectedUserId], responseMessage]
        }));
      }, 2000 + Math.random() * 3000);
    }
  };
  
  // Get the selected user object
  const selectedUser = selectedUserId 
    ? users.find(user => user.id === selectedUserId) || null 
    : null;
  
  // Get messages for selected user
  const selectedUserMessages = selectedUserId && messages[selectedUserId] 
    ? messages[selectedUserId] 
    : [];

  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-[#f0f2f5]">
      {/* Mobile view handling */}
      <div className={`w-full md:w-80 md:flex-shrink-0 ${selectedUserId ? 'hidden md:block' : 'block'}`}>
        <ChatSidebar 
          users={users} 
          selectedUserId={selectedUserId} 
          onSelectUser={handleSelectUser} 
        />
      </div>
      
      {/* Chat area - conditionally shown on mobile */}
      <div className={`flex-1 ${!selectedUserId ? 'hidden md:block' : 'block'}`}>
        {selectedUserId && (
          <div className="md:hidden absolute top-3 left-3 z-10">
            <button 
              onClick={() => setSelectedUserId(null)}
              className="bg-white rounded-full p-2 shadow-md"
            >
              ← Back
            </button>
          </div>
        )}
        <ChatArea 
          selectedUser={selectedUser} 
          messages={selectedUserMessages}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};

export default WhatsAppChat;
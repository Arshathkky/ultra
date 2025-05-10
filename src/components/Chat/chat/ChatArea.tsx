import React, { useState, useRef, useEffect } from 'react';
import { User, Message } from '../chat';
import { Send, Paperclip, Smile, Mic } from 'lucide-react';

interface ChatAreaProps {
  selectedUser: User | null;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({ 
  selectedUser, 
  messages, 
  onSendMessage 
}) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  // Format timestamp
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Date formatting for grouping messages by day
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  // Group messages by date
  const groupedMessages: { date: string; messages: Message[] }[] = [];
  let currentDate = '';
  
  messages.forEach(message => {
    const messageDate = formatDate(message.timestamp);
    
    if (messageDate !== currentDate) {
      currentDate = messageDate;
      groupedMessages.push({
        date: currentDate,
        messages: [message]
      });
    } else {
      groupedMessages[groupedMessages.length - 1].messages.push(message);
    }
  });

  // Render message status icon
  const renderMessageStatus = (status: string) => {
    switch (status) {
      case 'sent':
        return <span className="text-gray-400 text-xs">✓</span>;
      case 'delivered':
        return <span className="text-gray-400 text-xs">✓✓</span>;
      case 'read':
        return <span className="text-blue-500 text-xs">✓✓</span>;
      default:
        return null;
    }
  };

  if (!selectedUser) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#f0f2f5]">
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send size={24} className="text-gray-400" />
          </div>
          <h2 className="text-xl font-medium text-gray-700 mb-2">WhatsApp Chat</h2>
          <p className="text-gray-500">
            Select a contact to start chatting
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chat header */}
      <div className="bg-[#f0f2f5] py-2 px-4 flex items-center border-b">
        <img 
          src={selectedUser.avatar} 
          alt={selectedUser.name} 
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1">
          <h2 className="font-medium">{selectedUser.name}</h2>
          <p className="text-xs text-gray-500">
            {selectedUser.lastSeen === 'online' ? 'online' : `last seen ${selectedUser.lastSeen}`}
          </p>
        </div>
      </div>
      
      {/* Messages area */}
      <div 
        className="flex-1 overflow-y-auto py-4 px-5"
        style={{ backgroundColor: '#E4DDD6', backgroundImage: 'url("https://web.whatsapp.com/img/bg-chat-tile-light_04fcacde539c58cca6745483d4858c52.png")' }}
      >
        {groupedMessages.map((group, index) => (
          <div key={index} className="mb-4">
            {/* Date header */}
            <div className="flex justify-center mb-4">
              <div className="bg-white py-1 px-3 rounded-lg text-xs text-gray-500 shadow-sm">
                {group.date}
              </div>
            </div>
            
            {/* Messages */}
            {group.messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex mb-2 ${message.senderId === 0 ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[70%] rounded-lg py-2 px-3 shadow-sm
                    ${message.senderId === 0 
                      ? 'bg-[#DCF8C6] rounded-tr-none' 
                      : 'bg-white rounded-tl-none'}`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className="flex items-center justify-end space-x-1 mt-1">
                    <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                    {message.senderId === 0 && renderMessageStatus(message.status)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message input */}
      <div className="bg-[#f0f2f5] py-2 px-4">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <div className="flex space-x-2 text-gray-500 mr-2">
            <button type="button" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <Smile size={20} />
            </button>
            <button type="button" className="p-2 rounded-full hover:bg-gray-200 transition-colors">
              <Paperclip size={20} />
            </button>
          </div>
          
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 py-2 px-4 bg-white rounded-full text-sm focus:outline-none"
          />
          
          <button 
            type="submit" 
            disabled={!newMessage.trim()}
            className={`ml-2 p-2 ${newMessage.trim() ? 'text-[#128C7E]' : 'text-gray-400'} rounded-full hover:bg-gray-200 transition-colors`}
          >
            {newMessage.trim() ? <Send size={20} /> : <Mic size={20} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
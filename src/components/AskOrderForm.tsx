import React from 'react';
import WhatsAppChat from './Chat/chat/WhatsAppChat';
import AskForms from './Chat/AskForm';

function AskFormPage() {
  return (
    <div className="w-full m grid grid-cols-1 lg:grid-cols-2 bg-gray-100">
      {/* Left: Ask Form */}
      <div className="flex items-center justify-center ">
        <AskForms />
      </div>

      {/* Right: WhatsApp Chat */}
      <div className="flex items-center justify-center">
        <WhatsAppChat />
      </div>
    </div>
  );
}

export default AskFormPage;

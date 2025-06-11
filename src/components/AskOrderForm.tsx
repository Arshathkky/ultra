import React from 'react';
import WhatsAppChat from './Chat/chat/WhatsAppChat';
import AskForms from './Chat/AskForm';

function AskFormPage() {
  return (
    <div className="w-full h-[550px] grid grid-cols-1 lg:grid-cols-2 bg-gray-100 overflow-hidden">
      {/* Left side: AskForms */}
      <div className="flex items-center justify-center ">
        <AskForms />
      </div>

      {/* Right side: WhatsApp Chat */}
      <div className="flex items-center justify-center ">
        <WhatsAppChat />
      </div>
    </div>
  );
}

export default AskFormPage;

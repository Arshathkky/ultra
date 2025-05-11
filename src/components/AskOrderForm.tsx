import React from 'react';
import WhatsAppChat from './Chat/chat/WhatsAppChat';
import AskForms from './Chat/AskForm';

function AskForm() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:h-[80vh]">
      {/* Left side: AskForms */}
      <div className="overflow-y-auto">
        <AskForms />
      </div>

      {/* Right side: WhatsApp Chat */}
      <div className="py-3 px-2 overflow-y-auto">
        <WhatsAppChat />
      </div>
    </div>
  );
}

export default AskForm;

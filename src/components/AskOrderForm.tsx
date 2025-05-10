import React, { useState } from 'react';
import WhatsAppChat from './Chat/chat/WhatsAppChat';
import AskForms from './Chat/AskForm';

function AskForm() {
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen overflow-auto">
        <AskForms />
      </div>
      <div className="h-screen overflow-hidden">
        <WhatsAppChat />
      </div>
    </div>
  );
}

export default AskForm;
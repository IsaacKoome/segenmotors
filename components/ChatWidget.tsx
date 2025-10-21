// components/ChatWidget.tsx
"use client";

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import Chat from './Chat';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat widget"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-lg">
            <h3 className="text-lg font-semibold">Segen AI</h3>
            <button
              className="hover:text-gray-200 focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat widget"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <Chat />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
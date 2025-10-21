import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input, history: messages }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, { role: 'model', content: data.text }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', content: 'Sorry, I am having trouble connecting right now. Please try again later.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

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

          <div className="flex-1 p-3 overflow-y-auto custom-scrollbar">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500 text-center">
                <p>Hello! How can I assist you with your car buying journey today?</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded-lg max-w-[80%] ${msg.role === 'user'
                    ? 'bg-blue-100 text-blue-800 self-end ml-auto'
                    : 'bg-gray-100 text-gray-800'}
                  `}
                >
                  {msg.content}
                </div>
              ))
            )}
            {isLoading && (
              <div className="mb-2 p-2 rounded-lg bg-gray-100 text-gray-800 max-w-[80%]">
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t p-3 flex">
            <input
              type="text"
              className="flex-1 border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !isLoading) {
                  handleSendMessage();
                }
              }}
              disabled={isLoading}
            />
            <button
              className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 focus:outline-none disabled:opacity-50"
              onClick={handleSendMessage}
              disabled={isLoading}
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;


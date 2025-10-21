// app/chat/page.tsx
"use client";

import Chat from "@/components/Chat";
import React from "react";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4">
          <Chat />
        </div>
      </div>
    </div>
  );
}

"use client";

import ChatWidget from "@/components/ChatWidget";
import React from "react";

export default function ChatPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Chat with our AI Assistant</h1>
      <div className="w-full max-w-md">
        <ChatWidget />
      </div>
    </div>
  );
}

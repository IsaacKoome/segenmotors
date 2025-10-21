// app/chat/page.tsx
"use client";

import Chat from "@/components/Chat";
import React from "react";

export default function ChatPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="w-full max-w-2xl flex-1 flex flex-col">
        <Chat />
      </div>
    </div>
  );
}
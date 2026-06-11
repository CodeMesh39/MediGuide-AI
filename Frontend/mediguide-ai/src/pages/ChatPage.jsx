import { useEffect, useState } from "react";

import ChatWindow from "../components/chat/ChatWindow";
import ChatInput from "../components/chat/ChatInput";
import TypingIndicator from "../components/chat/TypingIndicator";

import useChatStore from "../store/chatStore";

import { sendChatMessage } from "../services/chatService";
import { exportTextPDF } from "../utils/pdfExport";

function ChatPage() {
  const [loading, setLoading] = useState(false);

  const chats = useChatStore(
    (state) => state.chats
  );

  const activeChatId = useChatStore(
    (state) => state.activeChatId
  );

  const createChat = useChatStore(
    (state) => state.createChat
  );

  const addMessage = useChatStore(
    (state) => state.addMessage
  );

  useEffect(() => {
    if (chats.length === 0) {
      createChat();
    }
  }, []);

  const activeChat = chats.find(
    (chat) => chat.id === activeChatId
  );

  const handleSend = async (message) => {
    if (!activeChat) return;

    addMessage(
      activeChat.id,
      "user",
      message
    );

    setLoading(true);

    try {
      const aiResponse =
        await sendChatMessage(message);

      addMessage(
        activeChat.id,
        "assistant",
        aiResponse
      );
    } catch (error) {
      addMessage(
        activeChat.id,
        "assistant",
        "❌ Error communicating with backend."
      );
    }

    setLoading(false);
  };

  const handleExportChat = () => {
    if (!activeChat) return;

    const chatText =
      activeChat.messages
        .map(
          (m) =>
            `${m.role}: ${m.content}`
        )
        .join("\n\n");

    exportTextPDF(
      "Chat_History",
      chatText
    );
  };

  if (!activeChat) {
    return null;
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="p-5 border-b bg-white flex items-center justify-between">
        <div>
          <h2 className="font-bold text-xl">
            {activeChat.agent}
          </h2>

          <p className="text-sm text-slate-500">
            MediGuide AI Healthcare Assistant
          </p>
        </div>

        {/* Export Chat Button */}
        <button
          onClick={handleExportChat}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Export Chat
        </button>
      </div>

      {/* Chat Messages */}
      <ChatWindow
        messages={activeChat.messages}
      />

      {/* Typing Indicator */}
      {loading && (
        <TypingIndicator />
      )}

      {/* Input Area */}
      <div className="p-4 border-t bg-white">
        <ChatInput
          onSend={handleSend}
        />
      </div>
    </div>
  );
}

export default ChatPage;
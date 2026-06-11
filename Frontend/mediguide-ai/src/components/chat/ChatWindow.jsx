import { useEffect, useRef } from "react";

import ChatMessage from "./ChatMessage";
import WelcomeScreen from "./WelcomeScreen";

function ChatWindow({
  messages,
}) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (!messages?.length) {
    return <WelcomeScreen />;
  }

  return (
    <div className="flex-1 overflow-auto p-6">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          role={msg.role}
          content={msg.content}
        />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;
import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

function ChatInput({
  onSend,
}) {
  const [message, setMessage] =
    useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-3">
      <button className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
        <FaMicrophone />
      </button>

      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask MediGuide AI..."
        className="flex-1 border rounded-2xl px-5 py-3 outline-none"
      />

      <button
        onClick={handleSend}
        className="bg-sky-500 hover:bg-sky-600 text-white px-6 rounded-2xl"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
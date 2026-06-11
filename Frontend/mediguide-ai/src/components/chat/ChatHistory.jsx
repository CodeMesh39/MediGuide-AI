import useChatStore from "../../store/chatStore";

function ChatHistory() {
  const chats =
    useChatStore(
      (state) => state.chats
    );

  const activeChatId =
    useChatStore(
      (state) => state.activeChatId
    );

  const setActiveChat =
    useChatStore(
      (state) => state.setActiveChat
    );

  return (
    <div className="space-y-2">
      {chats.map((chat) => (
        <button
          key={chat.id}
          onClick={() =>
            setActiveChat(chat.id)
          }
          className={`w-full text-left p-3 rounded-xl
          ${
            activeChatId === chat.id
              ? "bg-sky-100 border border-sky-300"
              : "bg-slate-50 hover:bg-slate-100"
          }`}
        >
          <div className="font-medium">
            {chat.title}
          </div>

          <div className="text-xs text-slate-500">
            {chat.agent}
          </div>
        </button>
      ))}
    </div>
  );
}

export default ChatHistory;
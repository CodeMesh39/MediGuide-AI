import { useEffect, useState } from "react";

export default function useChatHistory() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("mediguide_chats");

    if (stored) {
      setChats(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "mediguide_chats",
      JSON.stringify(chats)
    );
  }, [chats]);

  const createChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      createdAt: new Date().toISOString(),
    };

    setChats((prev) => [newChat, ...prev]);
  };

  const deleteChat = (id) => {
    setChats((prev) =>
      prev.filter((chat) => chat.id !== id)
    );
  };

  const renameChat = (id, title) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === id
          ? { ...chat, title }
          : chat
      )
    );
  };

  return {
    chats,
    createChat,
    deleteChat,
    renameChat,
  };
}
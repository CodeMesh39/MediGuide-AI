import { create } from "zustand";

const loadChats = () => {
  const saved = localStorage.getItem(
    "mediguide_chats"
  );

  return saved ? JSON.parse(saved) : [];
};

const saveChats = (chats) => {
  localStorage.setItem(
    "mediguide_chats",
    JSON.stringify(chats)
  );
};

const useChatStore = create((set, get) => ({
  chats: loadChats(),

  activeChatId: null,

  createChat: (agent = "Symptom Expert") => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      agent,
      messages: [],
      createdAt: new Date().toISOString(),
    };

    const updatedChats = [
      newChat,
      ...get().chats,
    ];

    saveChats(updatedChats);

    set({
      chats: updatedChats,
      activeChatId: newChat.id,
    });
  },

  setActiveChat: (id) => {
    set({
      activeChatId: id,
    });
  },

  addMessage: (
    chatId,
    role,
    content
  ) => {
    const updatedChats = get().chats.map(
      (chat) => {
        if (chat.id !== chatId)
          return chat;

        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              id: Date.now(),
              role,
              content,
            },
          ],
        };
      }
    );

    saveChats(updatedChats);

    set({
      chats: updatedChats,
    });
  },

  setChats: (updatedChats) => {
  saveChats(updatedChats);

  set({
    chats: updatedChats,
  });
},
  deleteChat: (chatId) => {
    const updatedChats = get().chats.filter(
      (chat) => chat.id !== chatId
    );

    saveChats(updatedChats);

    set({
      chats: updatedChats,
      activeChatId:
        updatedChats.length > 0
          ? updatedChats[0].id
          : null,
    });
  },
}));

export default useChatStore;
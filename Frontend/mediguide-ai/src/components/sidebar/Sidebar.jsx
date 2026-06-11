import { useState } from "react";

import {
  FaChartBar,
  FaFileMedical,
  FaImage,
  FaUser,
  FaCog,
  FaPills,
  FaExclamationTriangle,
  FaCalendarAlt,
} from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import ChatHistory from "../chat/ChatHistory";
import SearchChats from "../chat/SearchChats";
import AgentSelector from "../agents/AgentSelector";

import useChatStore from "../../store/chatStore";
import useAgentStore from "../../store/useAgentStore";

function Sidebar() {
  const [searchTerm, setSearchTerm] =
    useState("");

  const createChat =
    useChatStore(
      (state) => state.createChat
    );

  const {
    selectedAgent,
    setSelectedAgent,
  } = useAgentStore();

  return (
    <aside className="w-[340px] bg-white border-r flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-sky-600">
          MediGuide AI
        </h1>

        <p className="text-sm text-slate-500">
          Healthcare Workspace
        </p>
      </div>

      {/* New Chat */}
      <div className="p-4">
        <button
          onClick={() =>
            createChat(selectedAgent)
          }
          className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-medium"
        >
          + New Chat
        </button>
      </div>

      {/* Search */}
      <div className="px-4">
        <SearchChats
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      {/* Chat History */}
      <div className="p-4">
        <h3 className="font-semibold mb-3">
          Recent Chats
        </h3>

        <ChatHistory />
      </div>

      {/* Agent Selector */}
      <div className="px-4">
        <AgentSelector
          selectedAgent={selectedAgent}
          setSelectedAgent={
            setSelectedAgent
          }
        />
      </div>

      {/* Navigation */}
      <div className="mt-auto p-4 space-y-2">
        <SidebarItem
          title="Emergency"
          path="/emergency"
          icon={
            <FaExclamationTriangle />
          }
        />

        <SidebarItem
          title="Analytics"
          path="/analytics"
          icon={<FaChartBar />}
        />

        <SidebarItem
          title="Reports"
          path="/reports"
          icon={<FaFileMedical />}
        />

        <SidebarItem
          title="Images"
          path="/images"
          icon={<FaImage />}
        />

        <SidebarItem
          title="Medications"
          path="/medications"
          icon={<FaPills />}
        />
        <SidebarItem
  title="Appointments"
  path="/appointments"
  icon={<FaCalendarAlt />}
/>

        <SidebarItem
          title="Profile"
          path="/profile"
          icon={<FaUser />}
        />

        <SidebarItem
          title="Settings"
          path="/settings"
          icon={<FaCog />}
        />
      </div>
    </aside>
  );
}

export default Sidebar;
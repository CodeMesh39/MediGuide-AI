import { agents } from "../../data/agents";

function AgentSelector({
  selectedAgent,
  setSelectedAgent,
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-500 mb-3">
        AGENTS
      </h3>

      <div className="space-y-2">
        {agents.map((agent) => (
          <button
            key={agent.id}
            onClick={() =>
              setSelectedAgent(agent.name)
            }
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition
            ${
              selectedAgent === agent.name
                ? "bg-sky-500 text-white"
                : "bg-slate-50 hover:bg-slate-100"
            }`}
          >
            <span>{agent.icon}</span>

            <span>{agent.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AgentSelector;
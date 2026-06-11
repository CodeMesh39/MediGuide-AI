const prompts = [
  "🤒 I have fever for 3 days",
  "💊 Explain this medicine",
  "📄 Explain my blood report",
  "📷 Analyze this MRI",
];

function PromptChips() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          className="px-4 py-2 bg-white border rounded-full hover:bg-sky-50"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}

export default PromptChips;
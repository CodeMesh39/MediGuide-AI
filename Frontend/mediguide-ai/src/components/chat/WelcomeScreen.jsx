function WelcomeScreen() {
  const prompts = [
    "🤒 I have fever for 3 days",
    "💊 Explain this medicine",
    "📄 Explain my blood report",
    "📷 Analyze this MRI",
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-sky-600">
        MediGuide AI
      </h1>

      <p className="mt-4 text-slate-500 text-lg">
        How can I help with your health today?
      </p>

      <div className="flex flex-wrap gap-3 mt-8 justify-center">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            className="px-4 py-3 bg-white border rounded-full hover:bg-sky-50"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WelcomeScreen;
function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 p-4">
      <div className="w-2 h-2 rounded-full bg-sky-500 animate-bounce"></div>

      <div className="w-2 h-2 rounded-full bg-sky-500 animate-bounce delay-100"></div>

      <div className="w-2 h-2 rounded-full bg-sky-500 animate-bounce delay-200"></div>

      <span className="text-sm text-slate-500">
        MediGuide AI is thinking...
      </span>
    </div>
  );
}

export default TypingIndicator;
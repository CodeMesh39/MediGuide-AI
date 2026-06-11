import ReactMarkdown from "react-markdown";
import { FaUser, FaRobot } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy } from "react-icons/fi";

function ChatMessage({
  role,
  content,
}) {
  const isUser = role === "user";

  return (
    <div
      className={`flex mb-6 ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`flex gap-3 max-w-[80%]
        ${
          isUser
            ? "flex-row-reverse"
            : ""
        }`}
      >
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center
          ${
            isUser
              ? "bg-sky-500 text-white"
              : "bg-teal-500 text-white"
          }`}
        >
          {isUser ? (
            <FaUser />
          ) : (
            <FaRobot />
          )}
        </div>

        <div
          className={`rounded-2xl p-4 shadow-sm
          ${
            isUser
              ? "bg-sky-500 text-white"
              : "bg-white border"
          }`}
        >
          <ReactMarkdown>
            {content}
          </ReactMarkdown>

          {!isUser && (
            <div className="mt-3">
              <CopyToClipboard text={content}>
                <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-sky-600">
                  <FiCopy />
                  Copy
                </button>
              </CopyToClipboard>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
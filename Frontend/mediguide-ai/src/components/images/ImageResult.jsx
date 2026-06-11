import ReactMarkdown from "react-markdown";

import { exportTextPDF }
from "../../utils/pdfExport";

function ImageResult({
  result,
}) {
  if (!result) return null;

  return (
    <div className="bg-white rounded-2xl p-6 border">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-xl">
          AI Image Analysis
        </h2>

        <button
          onClick={() =>
            exportTextPDF(
              "Medical_Image_Analysis",
              result
            )
          }
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          Export PDF
        </button>
      </div>

      <div className="prose max-w-none">
        <ReactMarkdown>
          {result}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default ImageResult;
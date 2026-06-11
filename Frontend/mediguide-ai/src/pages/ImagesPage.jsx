import { useState } from "react";

import ImageUploader from "../components/images/ImageUploader";
import ImagePreview from "../components/images/ImagePreview";
import ImageResult from "../components/images/ImageResult";
import ImageHistory from "../components/images/ImageHistory";

import { analyzeImage } from "../services/imageService";

function ImagesPage() {
  const [file, setFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [analysis, setAnalysis] =
    useState("");

  const [history, setHistory] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "image_history"
        ) || "[]"
      )
    );

  const handleAnalyze =
    async () => {
      if (!file) return;

      setLoading(true);

      try {
        const response =
          await analyzeImage(
            file
          );

        setAnalysis(
          response.analysis
        );

        const updated = [
          {
            filename:
              response.filename,
            analysis:
              response.analysis,
          },
          ...history,
        ];

        setHistory(updated);

        localStorage.setItem(
          "image_history",
          JSON.stringify(updated)
        );
      } catch (error) {
        setAnalysis(
          "Error analyzing image."
        );
      }

      setLoading(false);
    };

  return (
    <div className="p-8 space-y-6 pb-24">
      <h1 className="text-3xl font-bold text-sky-600">
        Medical Image Analyzer
      </h1>

      <ImageUploader
        onFileSelect={setFile}
      />

      <ImagePreview
        file={file}
      />

      {file && (
        <button
          onClick={
            handleAnalyze
          }
          className="bg-sky-500 text-white px-6 py-3 rounded-xl"
        >
          Analyze Image
        </button>
      )}

      {loading && (
        <div>
          Analyzing Image...
        </div>
      )}

      <ImageResult
        result={analysis}
      />

      <ImageHistory
        history={history}
      />
    </div>
  );
}

export default ImagesPage;
import { useState } from "react";

import ReportUploader from "../components/reports/ReportUploader";
import ReportResult from "../components/reports/ReportResult";
import ReportHistory from "../components/reports/ReportHistory";

import { analyzeReport } from "../services/reportService";

function ReportsPage() {
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
          "report_history"
        ) || "[]"
      )
    );

  const handleAnalyze =
    async () => {
      if (!file) return;

      setLoading(true);

      try {
        const response =
          await analyzeReport(
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
          "report_history",
          JSON.stringify(updated)
        );
      } catch (error) {
        setAnalysis(
          "Error analyzing report."
        );
      }

      setLoading(false);
    };

  return (
    <div className="p-8 space-y-6 pb-24">
      <h1 className="text-3xl font-bold text-sky-600">
        Medical Report Analyzer
      </h1>

      <ReportUploader
        onFileSelect={setFile}
      />

      {file && (
        <button
          onClick={
            handleAnalyze
          }
          className="bg-sky-500 text-white px-6 py-3 rounded-xl"
        >
          Analyze Report
        </button>
      )}

      {loading && (
        <div>
          Analyzing Report...
        </div>
      )}

      <ReportResult
        result={analysis}
      />

      <ReportHistory
        reports={history}
      />
    </div>
  );
}

export default ReportsPage;
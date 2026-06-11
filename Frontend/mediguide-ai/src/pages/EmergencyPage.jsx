import { useState } from "react";

import EmergencyInput from "../components/emergency/EmergencyInput";
import EmergencyResult from "../components/emergency/EmergencyResult";
import EmergencyHistory from "../components/emergency/EmergencyHistory";

import { checkEmergency } from "../services/emergencyService";

function EmergencyPage() {
  const [symptoms, setSymptoms] =
    useState("");

  const [result, setResult] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [history, setHistory] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "emergency_history"
        ) || "[]"
      )
    );

  const handleCheck =
    async () => {
      if (!symptoms) return;

      setLoading(true);

      try {
        const response =
          await checkEmergency(
            symptoms
          );

        setResult(response);

        const updated = [
          {
            symptoms,
            result: response,
            date:
              new Date().toLocaleString(),
          },
          ...history,
        ];

        setHistory(updated);

        localStorage.setItem(
          "emergency_history",
          JSON.stringify(updated)
        );
      } catch {
        setResult(
          "Error checking symptoms."
        );
      }

      setLoading(false);
    };

  return (
    <div className="p-8 space-y-6 pb-24">
      <h1 className="text-3xl font-bold text-red-600">
        🚨 Emergency Detection
      </h1>

      <EmergencyInput
        symptoms={symptoms}
        setSymptoms={setSymptoms}
        onCheck={handleCheck}
      />

      {loading && (
        <div>
          Assessing emergency risk...
        </div>
      )}

      <EmergencyResult
        result={result}
      />

      <EmergencyHistory
        history={history}
      />
    </div>
  );
}

export default EmergencyPage;
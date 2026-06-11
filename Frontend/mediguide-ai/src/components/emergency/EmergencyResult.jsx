import SeverityBadge from "./SeverityBadge";
import { exportTextPDF }
from "../../utils/pdfExport";
function EmergencyResult({
  result,
}) {
  if (!result) return null;

  let severity =
    result.match(
      /Severity:\s*(.*)/i
    )?.[1]?.trim() || "Unknown";

  return (
    <div className="bg-white rounded-2xl border p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">
          Emergency Assessment
        </h2>

        <SeverityBadge
          severity={severity}
        />
      </div>

      <pre className="whitespace-pre-wrap text-slate-700">
        {result}
      </pre>
      <button
  onClick={() =>
    exportTextPDF(
      "Emergency_Assessment",
      result
    )
  }
  className="bg-green-500 text-white px-4 py-2 rounded-xl"
>
  Export PDF
</button>
    </div>
    
  );
}

export default EmergencyResult;
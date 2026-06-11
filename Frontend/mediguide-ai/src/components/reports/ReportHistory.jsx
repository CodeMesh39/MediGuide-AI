function ReportHistory({
  reports,
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border">
      <h2 className="font-bold mb-4">
        Report History
      </h2>

      {reports.map(
        (report, index) => (
          <div
            key={index}
            className="border-b py-2"
          >
            {report.filename}
          </div>
        )
      )}
    </div>
  );
}

export default ReportHistory;
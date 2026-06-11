function EmergencyHistory({
  history,
}) {
  return (
    <div className="bg-white rounded-2xl border p-5">
      <h2 className="font-bold mb-4">
        Emergency History
      </h2>

      {history.length === 0 && (
        <p className="text-slate-500">
          No assessments yet.
        </p>
      )}

      {history.map(
        (item, index) => (
          <div
            key={index}
            className="border-b py-3"
          >
            <div className="font-medium">
              {item.symptoms}
            </div>

            <div className="text-sm text-slate-500">
              {item.date}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default EmergencyHistory;
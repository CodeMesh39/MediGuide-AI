function MedicationList({
  medications,
  toggleTaken,
  deleteMedication,
}) {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="font-bold mb-4">
        Today's Medications
      </h2>

      {medications.map(
        (med) => (
          <div
            key={med.id}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <div className="font-semibold">
                {med.name}
              </div>

              <div className="text-sm text-slate-500">
                {med.dosage}
              </div>

              <div className="text-sm">
                {med.time}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() =>
                  toggleTaken(
                    med.id
                  )
                }
                className={`px-4 py-2 rounded-xl text-white ${
                  med.taken
                    ? "bg-green-500"
                    : "bg-yellow-500"
                }`}
              >
                {med.taken
                  ? "Taken"
                  : "Pending"}
              </button>

              <button
                onClick={() =>
                  deleteMedication(
                    med.id
                  )
                }
                className="bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default MedicationList;
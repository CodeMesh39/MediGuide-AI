function EmergencyInput({
  symptoms,
  setSymptoms,
  onCheck,
}) {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="font-bold mb-4">
        Describe Symptoms
      </h2>

      <textarea
        rows={5}
        value={symptoms}
        onChange={(e) =>
          setSymptoms(
            e.target.value
          )
        }
        placeholder="Example: Chest pain, sweating, shortness of breath..."
        className="w-full border rounded-xl p-4"
      />

      <button
        onClick={onCheck}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl"
      >
        🚨 Check Emergency Risk
      </button>
    </div>
  );
}

export default EmergencyInput;
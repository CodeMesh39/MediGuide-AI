import { useState } from "react";

function MedicationForm({ onAdd }) {
  const [name, setName] =
    useState("");

  const [dosage, setDosage] =
    useState("");

  const [time, setTime] =
    useState("");

  const handleSubmit = () => {
    if (
      !name ||
      !dosage ||
      !time
    )
      return;

    onAdd({
      id: Date.now(),
      name,
      dosage,
      time,
      taken: false,
    });

    setName("");
    setDosage("");
    setTime("");
  };

  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="font-bold mb-4">
        Add Medication
      </h2>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Medicine Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Dosage"
          value={dosage}
          onChange={(e) =>
            setDosage(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <input
          type="time"
          value={time}
          onChange={(e) =>
            setTime(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <button
          onClick={
            handleSubmit
          }
          className="w-full bg-sky-500 text-white py-3 rounded-xl"
        >
          Add Medication
        </button>
      </div>
    </div>
  );
}

export default MedicationForm;
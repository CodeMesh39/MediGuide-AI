import { useState } from "react";

function AppointmentForm({ onAdd }) {
  const [doctor, setDoctor] =
    useState("");

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const handleSubmit = () => {
    if (
      !doctor ||
      !date ||
      !time
    )
      return;

    onAdd({
      id: Date.now(),
      doctor,
      date,
      time,
      notes,
    });

    setDoctor("");
    setDate("");
    setTime("");
    setNotes("");
  };

  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="font-bold mb-4">
        Add Appointment
      </h2>

      <div className="space-y-3">
        <input
          type="text"
          placeholder="Doctor Name"
          value={doctor}
          onChange={(e) =>
            setDoctor(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(
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

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) =>
            setNotes(
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
          Save Appointment
        </button>
      </div>
    </div>
  );
}

export default AppointmentForm;
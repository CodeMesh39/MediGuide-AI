import { useState } from "react";

import MedicationForm from "../components/medication/MedicationForm";
import MedicationList from "../components/medication/MedicationList";

function MedicationPage() {
  const [medications, setMedications] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "medications"
        ) || "[]"
      )
    );

  const saveData = (
    data
  ) => {
    setMedications(data);

    localStorage.setItem(
      "medications",
      JSON.stringify(data)
    );
  };

  const addMedication =
    (med) => {
      saveData([
        ...medications,
        med,
      ]);
    };

  const toggleTaken =
    (id) => {
      saveData(
        medications.map(
          (med) =>
            med.id === id
              ? {
                  ...med,
                  taken:
                    !med.taken,
                }
              : med
        )
      );
    };

  const deleteMedication =
    (id) => {
      saveData(
        medications.filter(
          (med) =>
            med.id !== id
        )
      );
    };

  return (
    <div className="p-8 space-y-6 pb-24">
      <h1 className="text-3xl font-bold text-sky-600">
        Medication Tracker
      </h1>

      <MedicationForm
        onAdd={
          addMedication
        }
      />

      <MedicationList
        medications={
          medications
        }
        toggleTaken={
          toggleTaken
        }
        deleteMedication={
          deleteMedication
        }
      />
    </div>
  );
}

export default MedicationPage;
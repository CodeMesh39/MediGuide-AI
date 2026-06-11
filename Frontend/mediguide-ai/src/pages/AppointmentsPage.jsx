import { useState } from "react";

import AppointmentForm from "../components/appointments/AppointmentForm";
import AppointmentList from "../components/appointments/AppointmentList";

function AppointmentsPage() {
  const [appointments,
    setAppointments] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "appointments"
        ) || "[]"
      )
    );

  const saveData = (
    data
  ) => {
    setAppointments(data);

    localStorage.setItem(
      "appointments",
      JSON.stringify(data)
    );
  };

  const addAppointment =
    (appointment) => {
      saveData([
        ...appointments,
        appointment,
      ]);
    };

  const deleteAppointment =
    (id) => {
      saveData(
        appointments.filter(
          (item) =>
            item.id !== id
        )
      );
    };

  return (
    <div className="p-8 space-y-6 pb-24">
      <h1 className="text-3xl font-bold text-sky-600">
        Appointment Reminders
      </h1>

      <AppointmentForm
        onAdd={
          addAppointment
        }
      />

      <AppointmentList
        appointments={
          appointments
        }
        deleteAppointment={
          deleteAppointment
        }
      />
    </div>
  );
}

export default AppointmentsPage;
function AppointmentList({
  appointments,
  deleteAppointment,
}) {
  return (
    <div className="bg-white border rounded-2xl p-6">
      <h2 className="font-bold mb-4">
        Upcoming Appointments
      </h2>

      {appointments.map(
        (appointment) => (
          <div
            key={
              appointment.id
            }
            className="border-b py-4"
          >
            <div className="font-semibold">
              👨‍⚕️{" "}
              {appointment.doctor}
            </div>

            <div>
              📅{" "}
              {appointment.date}
            </div>

            <div>
              ⏰{" "}
              {appointment.time}
            </div>

            <div>
              📝{" "}
              {appointment.notes}
            </div>

            <button
              onClick={() =>
                deleteAppointment(
                  appointment.id
                )
              }
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded-xl"
            >
              Delete
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default AppointmentList;
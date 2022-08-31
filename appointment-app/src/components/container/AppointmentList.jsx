import React, { useState, useEffect } from "react";
import Form from "../pure/Form";
import Appointment from "../pure/Appointment";

const AppointmentList = () => {
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));

  if (!initialAppointments) {
    initialAppointments = [];
  }
  const [appointments, setAppointments] = useState(initialAppointments);

  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments]);

  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(newAppointments);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-5">
          <Form createAppointment={createAppointment}></Form>
        </div>
        <div className="col p-5">
          {appointments.length === 0 ? (
            <h2 className="my-5 text-white">No appointment</h2>
          ) : (
            <h2 className="my-5 text-white">Manage your appointments</h2>
          )}
          {appointments.map((appointment) => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;

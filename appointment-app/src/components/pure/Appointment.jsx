import PropTypes from "prop-types";

const Appointment = ({ appointment, deleteAppointment }) => {
  const { id, name, surname, age, date, hour, description } = appointment;

  return (
    <table className="table table-striped bg-white rounded-3">
      <thead>
        <tr>
          <th>
            <span className="fw-bold">Name:</span>
          </th>
          <th>
            <span className="fw-bold">Surname:</span>
          </th>
          <th>
            <span className="fw-bold">Age:</span>
          </th>
          <th>
            <span className="fw-bold">Date:</span>
          </th>
          <th>
            <span className="fw-bold">Hour:</span>
          </th>
          <th>
            <span className="fw-bold">Description:</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{surname}</td>
          <td>{age}</td>
          <td>{date}</td>
          <td>{hour}</td>
          <td>{description}</td>
        </tr>
        <tr>
          <td colSpan={5}></td>
          <td colSpan={1}>
            <button
              onClick={() => deleteAppointment(id)}
              className="btn btn-danger w-100 my-1"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
};

export default Appointment;

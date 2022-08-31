import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

const Form = ({ createAppointment }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    date: "",
    hour: "",
    description: "",
  });

  const [error, setError] = useState(false);

  const { name, surname, age, date, hour, description } = formData;

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      surname.trim() === "" ||
      age.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      description.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    formData.id = uuid();

    createAppointment(formData);

    setFormData({
      name: "",
      surname: "",
      age: "",
      date: "",
      hour: "",
      description: "",
    });
  };

  return (
    <Fragment>
      <h2 className="text-white mt-5">Create an appointment</h2>
      {error ? (
        <p className="badge bg-danger">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={submit}>
        <label htmlFor="name" className="form-label mt-3 text-white">
          Name
        </label>
        <input
          type="text"
          onChange={changeHandler}
          id="name"
          name="name"
          value={name}
          className="form-control"
          placeholder="Name"
        />
        <label htmlFor="surname" className="form-label mt-3 text-white">
          Surname
        </label>
        <input
          type="text"
          onChange={changeHandler}
          id="surname"
          name="surname"
          value={surname}
          className="form-control"
          placeholder="Surname"
        />
        <label htmlFor="age" className="form-label mt-3 text-white">
          Age
        </label>
        <input
          type="number"
          onChange={changeHandler}
          id="age"
          name="age"
          value={age}
          className="form-control"
          placeholder="Age"
        />
        <label htmlFor="date" className="form-label mt-3 text-white">
          Date
        </label>
        <input
          type="date"
          onChange={changeHandler}
          id="date"
          name="date"
          value={date}
          className="form-control"
        />
        <label htmlFor="hour" className="form-label mt-3 text-white">
          Hour
        </label>
        <input
          type="time"
          onChange={changeHandler}
          id="hour"
          name="hour"
          value={hour}
          className="form-control"
        />
        <label htmlFor="description" className="form-label mt-3 text-white">
          Description
        </label>
        <textarea
          onChange={changeHandler}
          id="description"
          name="description"
          value={description}
          className="form-control"
          placeholder="Description"
        />
        <button type="submit" className="btn btn-success mt-5 px-5">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired,
};

export default Form;

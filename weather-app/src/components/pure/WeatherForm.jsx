import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const WeatherForm = ({ coordinates, setCoordinates, setQuery }) => {
  const [error, setError] = useState(false);

  const { longitude, latitude } = coordinates;

  const changeHandler = (e) => {
    setCoordinates({
      ...coordinates,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (longitude.trim() === "" || latitude.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    setQuery(true);
  };

  return (
    <Fragment>
      {error ? (
        <h2 className="badge bg-danger p-3 mt-3 ms-5">
          All fields are required
        </h2>
      ) : null}
      <form onSubmit={submit} className="p-5">
        <label htmlFor="longitude" className="mt-3">
          Longitude
        </label>
        <input
          type="text"
          onChange={changeHandler}
          id="longitude"
          name="longitude"
          value={longitude}
          placeholder="Longitude"
          className="form-control mt-1"
        />
        <label htmlFor="latitude" className="mt-3">
          Latitude
        </label>
        <input
          type="text"
          onChange={changeHandler}
          id="latitude"
          name="latitude"
          value={latitude}
          placeholder="Latitude"
          className="form-control mt-1"
        />
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-warning mt-5">
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};

WeatherForm.propTypes = {};

export default WeatherForm;

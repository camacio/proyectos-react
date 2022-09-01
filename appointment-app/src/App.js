import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
import AppointmentList from "./components/container/AppointmentList";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDvv2aqFiGJOmxLigex4BPclh9qoJrKmr4",
    authDomain: "form-4e883.firebaseapp.com",
    projectId: "form-4e883",
    storageBucket: "form-4e883.appspot.com",
    messagingSenderId: "664112726972",
    appId: "1:664112726972:web:646d7225f941585c1f61b9"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  return (
    <Fragment>
      <h1 className="text-white ms-5 mt-3 fw-bold">Admin appointment</h1>
      <AppointmentList />
    </Fragment>
  );
}

export default App;

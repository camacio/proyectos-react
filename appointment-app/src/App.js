import React,{Fragment} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AppointmentList from './components/container/AppointmentList';

function App() {
  return (
    <Fragment>
      <h1 className='text-white ms-5 mt-3 fw-bold'>Admin appointment</h1>
      <AppointmentList/>
    </Fragment>
      
    
  );
}

export default App;

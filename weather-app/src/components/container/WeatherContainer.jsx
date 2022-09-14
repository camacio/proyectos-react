import React, { Fragment, useState, useEffect } from 'react'
import Navbar from '../pure/Navbar'
import WeatherForm from '../pure/WeatherForm'
import Weather from '../pure/Weather'

const WeatherContainer = () => {

    const [coordinates, setCoordinates] = useState({
        longitude: "",
        latitude: "",
    });

    const [query, setQuery] = useState(false);

    const [result, setResult] = useState({});

    const {longitude, latitude} = coordinates;

    useEffect(() => {
        const apiRequest = async () => {
            if(query){
                const apiKey = "032429ab568b445337413d5ac20c8b04"
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${longitude}&lon=${latitude}&appid=${apiKey}`
                const response = await fetch(url);
                const result = await response.json();
                setResult(result);
               
                
            }
        }
        apiRequest();
    },[query])

  return (
    <Fragment>
        <Navbar title="Weather"/>
        <div className='container-fluid'>
            <div className="row">
                <div className='col'>
                    <WeatherForm setQuery={setQuery} coordinates={coordinates} setCoordinates={setCoordinates}/>
                </div>
                <div className='col'>
                    <Weather result={result}/>
                </div>
            </div>
            
        </div>
    </Fragment>
  )
}

export default WeatherContainer
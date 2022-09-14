import React from 'react'
import PropTypes from 'prop-types'

const Weather = ({result}) => {

    const {name, main} = result;

    if(!name) return null;

  return (
    <div className='card m-5 text-center shadow'>
        <div className='card-header'>
            <h3>The weather of {name} is:</h3>
        </div>
        <div className='card-body'>
            <h4>Temperature: {main.temp}</h4>
            <h4>Humidity: {main.humidity}</h4>
            <h4>Pressure: {main.pressure}</h4>
        </div>
    </div>
  )
}

Weather.propTypes = {}

export default Weather
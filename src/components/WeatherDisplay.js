import React from 'react'

const WeatherDisplay = () => {
    const {location,current} = data;
    return (
    <div className='weather-display'>
        <h2>{location.name}</h2>
    </div>
  )
}

export default WeatherDisplay
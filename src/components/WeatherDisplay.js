import React from 'react'

const WeatherDisplay = ({data}) => {
    const {location, current} = data;
    return (
    <div className='weather-display'>
        <h2>{location.name}</h2>
        <p>Temperature: {current.temp_c} °C</p>
        <p>Weather: {current.condition.text}</p>
        <p>Humidity: {current.humidity}%</p>
        <p>Wind Speed: {current.wind_kph} kph</p>
    </div>
  );
};

export default WeatherDisplay
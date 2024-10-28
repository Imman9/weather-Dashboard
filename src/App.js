import React,{useState} from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
function App() {
  const [city,setCity] =useState('');
  const [weatherdata,setWeatherData] =useState(null);
  const [error,setError] = useState(null);

  const fetchWeather = async (city) => { 
    try {
        setError(null); 
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6f410d313f424e79bf5181920242810&q=${city}&aqi=no`);
        
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        setWeatherData(data); 
    } catch (error) {
        setError(error.message);
        setWeatherData(null); 
    }
};

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather}/>
      {error && <p className="error">{error}</p>}
     
    </div>
  );
}

export default App;

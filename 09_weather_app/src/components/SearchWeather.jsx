import { useState } from "react";
import UpcomingWeather from "./UpcomingWeather.jsx";

export default function SearchWeather() {
  // states
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //api_key
  const API_KEY = "8a4e10d76502a982e21579227667b29a";

  //if city not found and wrap tru and catch
  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      console.log("responce",response);
      

      if (!response.ok) {
        if (response.status === 404) throw new Error("City not found.");
        if (response.status === 429) throw new Error("API limit exceeded.");
        throw new Error("An error occurred.");
      }

      const data = await response.json();
      console.log("data",data);
      
      setWeather(data);
    } catch (err) {
      setError(err.message || "Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
  
    <div className="max-w-lg mx-auto  lg:w-11/12 md:w-6/6 p-3 flex flex-col items-center">
      {/* main heading */}
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>

      <div className="flex flex-col sm:flex-row gap-2 mb-4 w-full">
        {/* input search */}
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
           onKeyDown={(e) => { if (e.key === "Enter") fetchWeather();}}
          className="w-full sm:w-3/4 bg-gray-700 text-white rounded-md p-2 focus:bg-gray-600 focus:outline-none transition duration-150 placeholder-gray-300"
        />

        {/* btn-search */}
        <button
          onClick={fetchWeather}
          className="bg-cyan-400 text-gray-950 font-bold p-2 rounded-md border-2 border-gray-700 hover:bg-cyan-300 w-full sm:w-auto"
        >
          Search
        </button>
      </div>

      {/* loading data */}
      {loading && <p className="font-bold text-xl text-green-400">Loading...</p>}

      {/* error ? p : weather && div */}
      {error ? (
        <p className="font-bold text-xl text-red-600">{error}</p>
      ) : (
        weather && (
          <div className="w-fit lg:w-12/12 sm:w-3/4 md:w-2/3 border-2 border-gray-700 rounded-2xl grid gap-4 grid-cols-1 sm:grid-cols-2 p-3 m-2">

            <div className="col-span-1 sm:col-span-2 flex flex-col md:flex-row items-center justify-center">

              <h2 className="font-bold text-xl">{weather.name}</h2>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="w-16 h-16 sm:ml-2"
              />
            </div>

            <div className="flex justify-between">
              <p className="font-bold">Temperature:</p>
              <span>{weather.main.temp}°C</span>
            </div>

            <div className="flex justify-between">
              <p className="font-bold">Condition:</p>
              <span>{weather.weather[0].description}</span>
            </div>

            <div className="flex justify-between">
              <p className="font-bold">Wind:</p>
              <span>{weather.wind.speed} km/h</span>
            </div>

            <div className="flex justify-between">
              <p className="font-bold">Humidity:</p>
              <span>{weather.main.humidity}%</span>
            </div>
          </div>
        )
      )}

      {/*  Pass the city name to UpcomingWeather */}
      {weather && <UpcomingWeather city={weather.name} />}
      
    </div>
  );
}

import { useState, useEffect } from "react";

export default function UpcomingWeather({ city }) {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "8a4e10d76502a982e21579227667b29a";
useEffect(() => {
  if (!city) return;

  const fetchForecast = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log("res",res);
      
      if (!res.ok) throw new Error("Unable to fetch forecast");
      const data = await res.json();
      console.log("upcoming_weater",data);
      
      setForecast(data.list.slice(0, 5)); // next 5 intervals
    } catch (err) {
      setError(err.message);
    }
  };

  fetchForecast();
}, [city]);

  return (
    <div className="mt-6 w-full border-2 border-gray-700 p-3 rounded-2xl">
      <h2 className="text-xl font-bold mb-2 text-center">Upcoming Weather</h2>

      {loading && <p className="text-green-400 text-center">Loading forecast...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {forecast && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {forecast.map((item, index) => (
            <div
              key={index}
            className="bg-gray-700 p-3 rounded-xl text-center border border-gray-600 transition-all duration-300 ease-in-out hover:bg-gray-600 hover:border-gray-500 hover:scale-105"
            >
              <p>{new Date(item.dt_txt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="w-12 h-12 mx-auto"
              />
              <p>{item.main.temp}°C</p>
              <p>{item.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

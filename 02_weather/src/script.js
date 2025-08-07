const apiKey = "8a4e10d76502a982e21579227667b29a";
const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const card = document.getElementById("weatherCard");
 const danger = document.querySelector("#errorMsg");



// Fetch coordinates of city using OpenWeatherMap Geocoding API
const getCoordinates = async (city) => {
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  console.log("01_geoUrl", geoUrl);
  
  const response = await fetch(geoUrl);
  const data = await response.json();
  console.log("02_data",data);
  
  return data[0]; // contains lat, lon, name, country
};

// Fetch weather using coordinates
const fetchWeather = async (city) => {
  try {
    const location = await getCoordinates(city);
    if (!location) {
    danger.classList.remove("hidden");
    card.classList.add("hidden");
    return;
    }else {
    danger.classList.add("hidden");
   }

    const { lat, lon, name, country } = location;
    currentCoords = { lat, lon }; // Save for later tabs

    // find the weather in geo
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    console.log("03_weatherUrl", weatherUrl);
    
    const res = await fetch(weatherUrl);
    console.log("04_res", res);
    
    const weather = await res.json();
     console.log("06_weather", weather);


    // this is the function which we include the arguments
    updateUI(weather, name, country);
    
  } catch (err) {
    console.error("Error:", err);
    alert("Something went wrong!");
  }
};

// Update UI with ES6


const updateUI = (data, name, country) => {
  const { main, weather, wind, visibility } = data;
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const favicon = document.getElementById("favicon");
if (favicon) {
  favicon.href = iconUrl;
  favicon.href = `${iconUrl}?v=${new Date().getTime()}`;
} else {
  console.warn("Favicon element not found!");
}

  document.getElementById("location").textContent = `${name}, ${country}`;
  document.getElementById("temperature").textContent = `${main.temp}°C`;
  document.getElementById("description").textContent = weather[0].description;
  document.getElementById("wind").textContent = `${wind.speed} m/s`;
  document.getElementById("humidity").textContent = `${main.humidity}%`;
  document.getElementById("pressure").textContent = `${main.pressure} hPa`;
  document.getElementById("visibility").textContent = `${visibility / 1000} km`;
  document.getElementById("weatherIcon").src = iconUrl;
  document.getElementById("weatherIcon").alt = weather[0].description;
  document.getElementById("favicon").href = iconUrl;

  card.classList.remove("hidden");
};

// Event listener
button.addEventListener("click", () => {
  const city = input.value.trim();
  console.log("05_btn_city");
  
  if (city) fetchWeather(city);
});


// next part hourly weather data fetching


const fetchHourlyForecast = async () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentCoords.lat}&lon=${currentCoords.lon}&units=metric&appid=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();

  console.log("07_Hourly Forecast:", data);

  if (!data.list || data.list.length === 0) {
    throw new Error("No hourly data found");
  }

  return data.list.slice(0, 6); // First 6 time slots (~3-hour steps)
};
const fetchAirQuality = async () => {
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${currentCoords.lat}&lon=${currentCoords.lon}&appid=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log("Air Quality:", data); // debug
  return data.list[0]; // first result
};

const renderTabContent = async (tab) => {
  const container = document.getElementById("tabContent");
  container.innerHTML = "Loading...";

  if (!currentCoords.lat || !currentCoords.lon) {
    container.innerHTML = "<p>Please search a city first.</p>";
    return;
  }

else if (tab === "hourly") {
  try {
    const hours = await fetchHourlyForecast();
    container.innerHTML = "";
    hours.forEach((hour) => {
      const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const temp = hour.main.temp;
      const description = hour.weather[0].description;

      container.innerHTML += `
        <div class="flex justify-between items-center border-b border-gray-600 py-2">
          <div>${time}</div>
          <div>${temp}°C</div>
          <div>${description}</div>
        </div>
      `;
    });
  } catch (err) {
    container.innerHTML = "<p>Error loading hourly data.</p>";
    console.error("Hourly tab error:", err);
  }
}

  else if (tab === "humidity") {
  try {
    const hours = await fetchHourlyForecast();
    container.innerHTML = "";
    hours.forEach((hour) => {
      const time = new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      const humidity = hour.main.humidity;

      container.innerHTML += `
        <div class="flex justify-between items-center border-b border-gray-600 py-2">
          <span>${time}</span>
          <span>Humidity: ${humidity}%</span>
        </div>
      `;
    });
  } catch (err) {
    container.innerHTML = "<p>Error loading humidity data.</p>";
    console.error("Humidity tab error:", err);
  }
}
  else if (tab === "air") {
    try {
      const air = await fetchAirQuality();
      container.innerHTML = `
        <p><strong>PM2.5:</strong> ${air.components.pm2_5} µg/m³</p>
        <p><strong>PM10:</strong> ${air.components.pm10} µg/m³</p>
        <p><strong>CO:</strong> ${air.components.co} ppm</p>
        <p><strong>NO₂:</strong> ${air.components.no2} ppm</p>
        <p><strong>O₃:</strong> ${air.components.o3} ppm</p>
      `;
    } catch (err) {
      container.innerHTML = "<p>Error loading air quality data.</p>";
    }
  }
};
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("bg-yellow-500"));
    btn.classList.add("bg-yellow-500");

    const tab = btn.dataset.tab;
    renderTabContent(tab);
  });
});

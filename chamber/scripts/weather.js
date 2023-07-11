// API URL for current weather
const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=38.77&lon=-121.25&units=imperial&appid=ba8d6824cfeb4c1d90136d5c049a1d34";

// API URL for forecast
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=38.77&lon=-121.25&units=imperial&appid=ba8d6824cfeb4c1d90136d5c049a1d34";

// Fetching current weather data
fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(currentWeatherData => {
    // Extracting required information
    const currentTemperature = currentWeatherData.main.temp;
    const currentWeatherDescription = currentWeatherData.weather[0].description;

    // Displaying current weather data
    document.getElementById("currentTemperature").textContent = currentTemperature + "°F";
    document.getElementById("currentWeatherDescription").textContent = currentWeatherDescription;
  })
  .catch(error => {
    console.log("Error fetching current weather data:", error);
  });

// Fetching forecast data
fetch(forecastUrl)
  .then(response => response.json())
  .then(forecastData => {
    // Extracting forecast temperatures for the next three days
    const forecastTemperatures = forecastData.list.slice(0, 3).map(forecast => forecast.main.temp);

    // Displaying forecast temperatures
    const forecastTemperaturesList = document.getElementById("forecast-temperatures");
    forecastTemperatures.forEach(temperature => {
      const listItem = document.createElement("li");
      listItem.textContent = temperature + "°F";
      forecastTemperaturesList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.log("Error fetching forecast data:", error);
  });
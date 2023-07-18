
const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=38.77&lon=-121.25&units=imperial&appid=ba8d6824cfeb4c1d90136d5c049a1d34";

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=38.77&lon=-121.25&units=imperial&appid=ba8d6824cfeb4c1d90136d5c049a1d34";


fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(currentWeatherData => {
    const currentTemperature = currentWeatherData.main.temp;
    const currentWeatherDescription = currentWeatherData.weather[0].description;

    document.getElementById("current-temperature").textContent = currentTemperature + "°F";
    document.getElementById("current-weather-description").textContent = currentWeatherDescription;
  })
  .catch(error => {
    console.log("Error fetching current weather data:", error);
  });


fetch(forecastUrl)
  .then(response => response.json())
  .then(forecastData => {

    const forecastTemperatures = forecastData.list.slice(0, 3).map(forecast => forecast.main.temp);

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
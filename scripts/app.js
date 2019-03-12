"use strict";

searchButton.addEventListener('click', searchWeather);

function searchWeather(event) {

  showLoading();
  
  const cityName = searchCity.value;

  if (!cityName.trim()) return alert("Please enter a city name");

  const apiKey = 'f6e5038295775386925943fcae1ba859';
  const units = "metric";
  
  const http = new XMLHttpRequest();  
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&APPID=${apiKey}`;
  const method = "GET";
  
  http.open(method, url);

  http.onreadystatechange = function() {

    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {

      const data = JSON.parse(http.responseText);
      const description = data.weather[0].description.toUpperCase();

      // Create a new instance of the Weather object
      const weatherData = new Weather(cityName, description);

      // Use the setter for 'temperature', which internally converts celsius to farenheit
      weatherData.temperature = data.main.temp;

      // Update the page
      showWeather(weatherData);

    } else if (http.readyState === XMLHttpRequest.DONE) {
      alert('Something went wrong!');
    }
  }

  http.send(null);
  
}

function showLoading() {

  weather.style.display = "none";
  loading.style.display = "block";

}

function showWeather(weatherData) {
  
  // Update fields in weather box with weather response
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;

  // Hide the loading element and display the weather box
  loading.style.display = "none";
  weather.style.display = "block";

}
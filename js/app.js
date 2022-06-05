function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  let apiKey = "e76643bfa6d843d9c5ecb52ecebf3c40";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperture);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
//---------------------------------------------------------
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
//---------------------------------

function showTemperture(responce) {
  let temperture = document.querySelector("#temperature");
  let temp = Math.round(responce.data.main.temp);
  temperture.innerHTML = temp;
  let description = document.querySelector("#description");
  description.innerHTML = responce.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${responce.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  let wind1 = Math.round(responce.data.wind.speed);
  wind.innerHTML = `Wind: ${wind1} km/h`;
  // console.log(responce.data);
}
function showTemp(responce) {
  let temperture = document.querySelector("#temperature");
  let temp = Math.round(responce.data.main.temp);
  temperture.innerHTML = temp;
  let description = document.querySelector("#description");
  description.innerHTML = responce.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${responce.data.main.humidity}%`;
  let wind = document.querySelector("#wind");
  let wind1 = Math.round(responce.data.wind.speed);
  wind.innerHTML = `Wind: ${wind1} km/h`;
}
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemp);
}

function getPostion() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getPostion);

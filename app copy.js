// --API_KEY ---
// const apiKey = "3cfef61111c549ece8c0c4eb0c2e149d";

// --Selectors --
const dataDisplay = document.querySelector(".dataDisplay");
const btn = document.querySelector(".btn");
const textInput = document.querySelector(".textInput");

// Default Temp ----
// window.addEventListener("load", () => {}

navigator.geolocation.getCurrentPosition(function (position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  fetch(
    `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
  )
    .then((res) => res.json)
    .then((data) => console.log(data));

  dataDisplay.innerHTML = `                         <div class="data-container">
  <div class="data">Place: ${location}, ${data.sys.country}</div>
  <div class="data">Temperature: ${tempCel.toFixed(0)} °C </div>
  <div class="data">Max-Temp: ${temp_maxCel.toFixed(0)} °C </div>
  <div class="data">Pressure: ${data.main.pressure} hectopascal (hPa)</div>
  <div class="data">Humidity: ${data.main.humidity}%</div>
  <div class="data">Wind Speed: ${speedKmH.toFixed(2)} km/h</div>
  </div>`;
});

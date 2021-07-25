// --API_KEY ---
const apiKey = "3cfef61111c549ece8c0c4eb0c2e149d";

// --Selectors --
const dataDisplay = document.querySelector(".dataDisplay");
const btn = document.querySelector(".btn");
const textInput = document.querySelector(".textInput");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherDesc = document.querySelector(".Weather-desc");
const appItems = document.querySelector(".app-items");
const dataContain = document.querySelector(".dataContain");
const heading = document.querySelector(".heading");
appItems.style.display = "none";

// ------Diaplying Entered cordinates ----

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let location = textInput.value;
  textInput.value = " ";

  // --------Item-box display -logic --
  if (location.length <= 0) {
    alert("Please enter location to get weather report");
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      // ----Temperature conversion ---
      // let { temp, temp_max } = data.main;
      let temp = data.main.temp;
      let temp_max = data.main.temp_max;

      let tempCel = temp - 273.15;
      let temp_maxCel = temp_max - 273.15;

      // ------Wind speed conversion --

      const { speed } = data.wind;
      let speedKmH = speed * 3.6;

      // ---Description to Upper case --

      let description = data.weather[0].description;
      description = description.toUpperCase();

      console.log(description);

      // --------Icons ------

      let icon = data.weather[0].icon;
      weatherIcon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${icon}@4x.png`
      );
      // ---Weather Description insertion --
      weatherDesc.innerHTML = `            <div class="data-main">
<h1>" ${description} "</h1>
</div>`;

      // ------Displaying Data --

      dataDisplay.innerHTML = `<hr> 

<div class="data-container">
<div class="data-first">

      <div class="data-main">
            <h2> Place:</h2> <h1> ${location},  ${data.sys.country}</h1>
      </div>
      <div class="data-main">
            <h2>Current Temp: </h2>
            <h1>${tempCel.toFixed(1)} °C </h1>
      </div>
      <div class="data-main">
            <h2>Max-Temp: </h2>
            <h1>  ${temp_maxCel.toFixed(1)} °C </h1>
      </div>
</div>
<div class="data-sec">

      <div class="data-sec">
            <h2>Wind Speed: </h2> <h1>${speedKmH.toFixed(2)}
            km/h </h1>
      </div>
      <div class="data-sec">
            <h2>Humidity: </h2> <h1> ${data.main.humidity}% </h1>
      </div>
      <div class="data-sec">
            <h2>Pressure: </h2> <h1> ${data.main.pressure} hPa </h1>
      </div>

</div>


</div>
<hr> 
`;
      if ((data.main.mame = location)) {
        appItems.style.display = "block";
        console.log(123);
      } else {
      }

      console.log(data);
    });
});

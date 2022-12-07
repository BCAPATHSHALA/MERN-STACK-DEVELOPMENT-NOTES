const cityName = document.querySelector("#city-name");
const form = document.querySelector("form");
const innerData = document.querySelector(".inner-container");
const loading = document.querySelector(".loading");

const apiKey = "dc3ad3b4c9097cc45f30d92ade5b2181";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(cityName.value);

  const fetchWeather = async function () {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`
    );
    const responseJSON = await response.json();
    return responseJSON;
  };

  const weatherData = fetchWeather();
  weatherData.then((data) => {
    let html = `
    <div class="city-container">
        <div class="city-name">${data.name}, ${data.sys.country}</div>
        <div class="weather-condition">${data.weather[0].main}</div>
        </div>
        <div class="temperature-container">
        <div class="weather-icon">
            <img src="https://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@2x.png" alt="image">
        </div>
        <div class="temp">${(data.main.temp - 273.15).toFixed(2)} °C</div>
        <div class="minmax">
            <div class="min">Min: ${(data.main.temp_min - 273.15).toFixed(
              2
            )}°C</div>
            <div class="max">Max: ${(data.main.temp_max - 273.15).toFixed(
              2
            )}°C</div>
        </div>
    </div>`;

    innerData.innerHTML = html;
    loading.style.display = "none";
  });

  loading.style.display = "block";
  cityName.value = "";
});

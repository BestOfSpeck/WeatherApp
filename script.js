let weatherData = [];

/**
 * Search weatherdata from location by inputvalue
 */
async function searchWeatherByInput() {
  document.getElementById("render_container").innerHTML = "";
  weatherData = [];
  let locationName = document.getElementById("search").value;
  await fetchDataForInputvalue(locationName);

  // Überprüfe, ob Wetterdaten vorhanden sind, bevor du darauf zugreifst
  if (weatherData.length > 0 && weatherData[0]["current"]) {
    console.log(weatherData[0]["current"]["temp_c"]);
    await renderCard();
  } else {
    console.error("Wetterdaten nicht verfügbar");
  }
}

async function renderCard() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <div class="card-body roboto-regular">
      <div>
        <h2 class="card-title roboto-regular">${weatherData[0]["location"]["name"]}</h2>
        <div class="card-img-container">
        <img src="${weatherData[0]["current"]["condition"]["icon"]}" alt="Wetter Icon">
        </div>
        <p class="card-text roboto-regular">${weatherData[0]["current"]["temp_c"]}°C</p>
        <p class="card-text-feelslike roboto-regular">feels like: ${weatherData[0]["current"]["feelslike_c"]}°C</p>

        </div>
      </div>
    `;
  document.getElementById("render_container").appendChild(card);
}

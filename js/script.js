let weatherData = [];

async function init() {
  console.log(weatherData);
  await getLocation();
  await getDataByCurrentLocation();
}

async function getDataByCurrentLocation() {
  document.getElementById("render_container").innerHTML = "";

  if (weatherData.length > 0 && weatherData[0]["current"]) {
    console.log(weatherData[0]["current"]["temp_c"]);
    await renderCard();
  } else {
    console.error("Wetterdaten nicht verfügbar");
  }
}

/**
 * Search weatherdata from location by inputvalue
 */
async function searchWeatherByInput() {
  document.getElementById("render_container").innerHTML = "";
  weatherData = [];
  let locationName = document.getElementById("search").value;
  await fetchDataForInputvalue(locationName);

  if (weatherData.length > 0 && weatherData[0]["current"]) {
    console.log(weatherData[0]["current"]["temp_c"]);
    await renderCard();
  } else {
    console.error("Wetterdaten nicht verfügbar");
  }
}

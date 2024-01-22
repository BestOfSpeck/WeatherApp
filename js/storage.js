const ApiKey = "2ad4eb2c564b452c8dc93631241801";
const ApiUrl = "https://api.weatherapi.com/v1/current.json";

let cordinates = [];

/**
 *  Fetches data from the API
 * @param {string} location location from inputvalue to fetch data from
 * @returns {Promise} Promise object represents the fetched data
 */
async function fetchDataForInputvalue(location) {
  const url = `${ApiUrl}?key=${ApiKey}&q=${location}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("Fehler beim Abrufen der Wetterdaten:", data.error.message);
    } else {
      weatherData.push(data);
      console.log(weatherData);
    }
  } catch (error) {
    console.error(error);
  }
}

async function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return;
  }
}

/**
 *  Shows the position of the user
 * @param {Object} position position of the user
 */
async function showPosition(position) {
  console.log("Latitude:", position.coords.latitude);
  console.log("Longitude:", position.coords.longitude);

  cordinates.push({
    lat: position.coords.latitude,
    lon: position.coords.longitude,
  });

  await fetchDataByCurrentLocation();
}
async function fetchDataByCurrentLocation() {
  let coordinates = cordinates[0];
  console.log(coordinates);
  const url = `${ApiUrl}?key=${ApiKey}&q=${coordinates.lat},${coordinates.lon}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      console.error("Fehler beim Abrufen der Wetterdaten:", data.error.message);
    } else {
     weatherData.push(data)
    }
  } catch (error) {
    console.error(error);
  }
}

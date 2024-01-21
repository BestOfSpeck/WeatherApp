const ApiKey = "2ad4eb2c564b452c8dc93631241801";
const ApiUrl = "https://api.weatherapi.com/v1/current.json";

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


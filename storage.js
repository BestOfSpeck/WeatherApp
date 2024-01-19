const ApiKey = "2ad4eb2c564b452c8dc93631241801";
const ApiUrl = "https://api.weatherapi.com/v1/current.json";

/**
 *  Fetches data from the API
 * @param {string} location location from inputvalue to fetch data from
 * @returns {JSON} Promise object represents the fetched data
 */
async function fetchDataForInputvalue(location) {
  const url = `${ApiUrl}?key=${ApiKey}&q=${location}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      return
    });
}

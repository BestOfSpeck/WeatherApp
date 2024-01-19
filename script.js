
/**
 * Search location by inputvalue
 */
async function searchWeatherByInput(){
    let locationName = document.getElementById("search").value;
    await fetchDataForInputvalue(locationName);
}
async function searchWeatherByInput(){
    let locationName = document.getElementById("search").value;
    await fetchData(locationName);
}
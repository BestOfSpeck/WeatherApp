const ApiKey = "2ad4eb2c564b452c8dc93631241801";
const ApiUrl = "https://api.weatherapi.com/v1/current.json";

async function fetchData(location) {
    const url = `${ApiUrl}?key=${ApiKey}&q=${location}`; // Add the "q" parameter with your desired location
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Process the data here
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors here
            console.error(error);
        });
}

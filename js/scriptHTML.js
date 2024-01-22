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
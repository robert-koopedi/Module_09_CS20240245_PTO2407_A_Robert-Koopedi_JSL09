// Fetching the random image from Unsplash
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch(err => {
    console.log("Something went wrong!");
    // Default background image
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1539593395743-7da5ee10ff07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MzgyMjU0OTB8&ixlib=rb-4.0.3&q=80&w=1080)`;
  });

  // Fetching Bitcoin info from CoinGecko
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
.then(res => {
  if (!res.ok) {
    throw new Error("Something went wrong fetching cryptocurrency data");
  }
  return res.json();
})
.then(data => {
  document.getElementById("crypto-top").innerHTML = `
    <img src="${data.image.small}" />
    <span>${data.name}</span>
    <p>🎯: R${data.market_data.current_price.zar}</p>
    <p>👇: R${data.market_data.high_24h.zar}</p>
    <p>👇: R${data.market_data.low_24h.zar}</p>
  `;
})
.catch(err => console.error("Error fetching cryptocurrency data:", err));

// Function to update time
function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString([], { timeStyle: "short" });
}

// Update time every 1 seconds
setInterval(updateTime, 1000);
updateTime();

// Fetching weather data based on geolocation
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Weather data not available");
        }
        return res.json();
      })
      .then(data => {
        const weatherElement = document.getElementById("weather");
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      console.log(data)

        // Display weather info with icon
        weatherElement.innerHTML = `
        <img src="${iconUrl}" alt="Weather icon" />
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${weatherDescription}</p>
      `;
    })
    .catch(err => console.error("Error fetching weather data:", err));
});

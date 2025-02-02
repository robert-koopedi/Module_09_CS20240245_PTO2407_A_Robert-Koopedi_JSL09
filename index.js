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
.then(res => res.json()
)
.then(data => {
  document.getElementById("crypto-top").innerHTML = `
    <img src="${data.image.small}" />
    <span>${data.name}</span>
    <p>🎯: R${data.market_data.current_price.zar}</p>
    <p>👇: R${data.market_data.high_24h.zar}</p>
    <p>👇: R${data.market_data.low_24h.zar}</p>
  `;
})

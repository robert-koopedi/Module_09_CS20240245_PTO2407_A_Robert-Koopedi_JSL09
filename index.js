// Fetching the random image from Unsplash
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch(err => {
    console.log("Something went wrong!");
  
  });


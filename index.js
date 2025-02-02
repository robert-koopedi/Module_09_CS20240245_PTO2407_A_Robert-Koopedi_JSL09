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


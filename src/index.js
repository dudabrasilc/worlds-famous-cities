document.addEventListener("DOMContentLoaded", () => {

  fetch("http://localhost:3000/cities")
  .then(response => response.json())
  .then(cities => {
    // console.log(cities)
    renderCities(cities)
  })
})

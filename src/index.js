document.addEventListener("DOMContentLoaded", () => {

  fetch("http://localhost:3000/cities")
  .then(response => response.json())
  .then(cities => {
    // console.log(cities)
    renderCities(cities)
  })
  
  // render cities array from json server 
  function renderCities(cities) {
    cities.forEach(city => {
      renderCity(city)
    })
  }
  
  function renderCity(city) {
      // get node of city cards div
      const citiesCardsDiv = document.getElementById("cities-cards");
      // create a div node of class="card"
      const cardDiv = document.createElement("div")
      }
  
})



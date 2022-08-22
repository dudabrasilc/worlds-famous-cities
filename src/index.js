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
    // add class of 'card' to the card div created
      cardDiv.className = 'card';
      // create children nodes for div with class="card"
      const h2 = document.createElement("h2");
      h2.setAttribute("id", "city-name")
      h2.textContent = city.name;
    // create img tag
      const img = document.createElement("img");
      img.setAttribute("src", city.image);
      img.setAttribute("class", "city-img")
    // create p tag that is going to have the like count
      const p = document.createElement("p");
      p.className = "likes-count";
      p.textContent = `${city.likes} likes`;
    // create like button
      const button = document.createElement("button");
      button.setAttribute("class", "like-btn");
    button.setAttribute("id", city.id);
      button.textContent = "👍";
    // button event listener
      button.addEventListener('click', () => {
        let count = 0;
        count = city.likes++ +1
        // console.log(count);
        p.textContent = `${count} likes`;
        updateLikes(city, count);
      })
    const unlike = document.createElement("button");
      unlike.setAttribute("class", "unlike-btn");
    
  }
  
})



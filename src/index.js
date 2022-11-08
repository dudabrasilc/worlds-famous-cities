document.addEventListener("DOMContentLoaded", () => {

  fetch("http://localhost:3000/cities")
  .then(response => response.json())
  .then(cities => {
    renderCities(cities)
  })
  
  
  function renderCities(cities) {
    cities.forEach(city => {
      renderCity(city)
    })
  }
  

  function renderCity(city) {
    const citiesCardsDiv = document.getElementById("cities-cards");
    const cardDiv = document.createElement("div")
    cardDiv.className = 'card';
    const h2 = document.createElement("h2");
    h2.setAttribute("id", "city-name")
    h2.textContent = city.name;

    const img = document.createElement("img");
    img.setAttribute("src", city.image);
    img.setAttribute("class", "city-img")
    const p = document.createElement("p");
    p.className = "likes-count";
    p.textContent = `${city.likes} likes`;
    const like = document.createElement("button");
    like.setAttribute("class", "like-btn");
    like.setAttribute("id", city.id);
    like.textContent = "👍";
    like.addEventListener('click', () => {
      let count = 0;
      count = city.likes++ +1
      p.textContent = `${count} likes`;
      updateLikes(city, count);
    })
    const unlike = document.createElement("button");
    unlike.setAttribute("class", "unlike-btn");
    unlike.setAttribute("id", city.id);
    unlike.textContent = "👎";
    unlike.addEventListener("click", () => {
      let count = city.likes;
      count = city.likes-- - 1;
      p.textContent = `${count} likes`;
      updateLikes(city, count)
    })
    cardDiv.appendChild(h2)
    cardDiv.appendChild(img)
    cardDiv.appendChild(p)
    cardDiv.appendChild(like)
    cardDiv.appendChild(unlike)
    citiesCardsDiv.appendChild(cardDiv)
  }


  function updateLikes(city, count) {
    fetch(`http://localhost:3000/cities/${city.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "likes": count
    })
    })
    .then(response => response.json())
    .then(data => console.log(data))  
  }
})

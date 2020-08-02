const searchHero = document.getElementById('hero-search');
const search = document.getElementById('search');
const displayHeroes = document.getElementById('display-heroes');

const findHero = async () => {
  const response = await fetch(
   
    `https://akabab.github.io/superhero-api/api/all.json`

  );

  const data = await response.json();
  console.log(data);
  const heroes = data.map((item) => {
    return `
        <div class="flip-card card" style="width: 25rem">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src=${item.images.lg} alt="Avatar" style="width:350px;height:400px;" class = "img-responsive">
          </div>
          <div class="flip-card-back">
            <h1> <br>Name: ${item.name}</h1>
            <h3> Gender: ${item.appearance.gender}</h3>
            <h3>Race: ${item.appearance.race}</h3>
            <h3>Occupation: ${item.work.occupation}</h3>
            <h3>Publisher: ${item.biography.publisher}</h3>       
          </div>
        </div>
      </div>
        `;
  });

  displayHeroes.innerHTML = heroes;
};

window.addEventListener('DOMContentLoaded', findHero);

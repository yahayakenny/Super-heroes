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
            <img src=${item.images.lg} alt="Avatar" style="width:350px;height:400px;">
          </div>
          <div class="flip-card-back">
            <h1> <br>${item.name}</h1>
            <h4>${item.appearance.gender}</h4>
            <h4>${item.appearance.race}</h4>
            <h4>${item.work.occupation}</h4>
            <h4>${item.biography.publisher}</h4>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
        `;
  });

  displayHeroes.innerHTML = heroes;
};

window.addEventListener('DOMContentLoaded', findHero);

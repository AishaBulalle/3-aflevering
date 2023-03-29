"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pokemon = await getPokemons();

  pokemon.forEach(showpokemon);

  //startAnimation();
}

async function getPokemons() {
  const response = await fetch("dewgong.json");
  const data = await response.json();
  console.log("done fetching");
  console.log(data);
  return data;
}

//function startAnimation() {
//document.querySelector("#pokemon").classList.add("pulse");
//}

function showpokemon(pokemons) {
  console.log(pokemons);

  const list = document.querySelector("#pokemons");
  list.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${pokemons.image}">
                <h2>${pokemons.name}</h2>
                <p>Gender:${pokemons.gender}</p>
                <p>ability: ${pokemons.ability}</p>
                
            </article>
        `
  );
  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    showpokemonModal(pokemon);
  }
}

function showpokemonModal(pokemon) {
  console.log(pokemon);
  //image, name and house
  document.querySelector("#dialog-image").src = pokemon.image;
  document.querySelector("#dialog-title").textContent = pokemon.name;

  // description
  document.querySelector("#dialog-description").textContent =
    pokemon.description;

  document.querySelector("#dialog-ability").textContent = pokemon.ability;
  document.querySelector("#dialog-footprint").textContent = pokemon.footprint;
  document.querySelector("#dialog-dexindex").textContent = pokemon.dexindex;
  document.querySelector("#dialog-type").textContent = pokemon.type;
  document.querySelector("#dialog-subtype").textContent = pokemon.subtype;
  document.querySelector("#dialog-weaknesses").textContent = pokemon.weaknesses;
  document.querySelector("#dialog-gender").textContent = pokemon.gender;
  document.querySelector("#dialog-weight").textContent = pokemon.weight;
  document.querySelector("#dialog-height").textContent = pokemon.height;
  document.querySelector("#dialog-generation").textContent = pokemon.generation;
  document.querySelector("#dialog-spilversion").textContent =
    pokemon.spilversion;
  document.querySelector("#dialog-canEvolve").textContent = pokemon.canEvolve;
  document.querySelector("#dialog-statsHP").textContent = pokemon.statsHP;
  document.querySelector("#dialog-statsAttack").textContent =
    pokemon.statsAttack;
  document.querySelector("#dialog-statsDefence").textContent =
    pokemon.statsDefence;
  document.querySelector("#dialog-statsSpecialAttack").textContent =
    pokemon.statsSpecialAttack;
  document.querySelector("#dialog-statsSpecialDefence").textContent =
    pokemon.statsSpecialDefence;
  document.querySelector("#dialog-statsSpeed").textContent = pokemon.statsSpeed;

  // show dialog
  document.querySelector("#dialog-pokemon").showModal();
}

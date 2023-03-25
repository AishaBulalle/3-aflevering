"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const dewgong = await getCharacter("dewgong.json");
  showCharacter(dewgong);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function addPokemon(pokemons) {
  const myPokemons = /* html */ `
<li> <b> Discription</b>: <br> ${pokemons.discription}</li>
  <br><li> <b>Name</b>: ${pokemons.name}</li>
  <li> <b>Number</b>: ${pokemons.number} </li>
  <li> <b>Height</b>: ${pokemons.height} </li>
  <li> <b>Weight</b>: ${pokemons.weight} </li>
  <li> <b>Category</b>: ${pokemons.category} </li>
  <li> <b>Gender</b>: ${pokemons.gender} </li>
  <li> <b>Type</b>: ${pokemons.type} </li>
  <li> <b>Weaknesses</b>: ${pokemons.weaknesses} </li>
  
`;

  document
    .querySelector("#pokemons")
    .insertAdjacentHTML("beforeend", myPokemons);
}

addPokemon(dewgong);

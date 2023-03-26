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

function showCharacter(character) {
  console.log(character);

  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
            <article class="grid-item">
                <img src="${character.image}">
                <h2>${character.name}</h2>
                <p>Gender:${character.gender}</p>
                <p>ability: ${character.ability}</p>
                
            </article>
        `
  );
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    showCharacterModal(character);
  }
}

function showCharacterModal(character) {
  console.log(character);
  //image, name and house
  document.querySelector("#dialog-image").src = character.image;
  document.querySelector("#dialog-title").textContent = character.name;

  // description
  document.querySelector("#dialog-description").textContent =
    character.description;

  document.querySelector("#dialog-ability").textContent = character.ability;
  document.querySelector("#dialog-type").textContent = character.type;
  document.querySelector("#dialog-subtype").textContent = character.subtype;
  document.querySelector("#dialog-weaknesses").textContent =
    character.weaknesses;
  document.querySelector("#dialog-gender").textContent = character.gender;
  document.querySelector("#dialog-weight").textContent = character.weight;
  document.querySelector("#dialog-height").textContent = character.height;
  document.querySelector("#dialog-generation").textContent =
    character.generation;
  document.querySelector("#dialog-statsHP").textContent = character.statsHP;
  document.querySelector("#dialog-statsAttack").textContent =
    character.statsAttack;
  document.querySelector("#dialog-statsDefence").textContent =
    character.statsDefence;
  document.querySelector("#dialog-statsSpecialAttack").textContent =
    character.statsSpecialAttack;
  document.querySelector("#dialog-statsspecialDefence").textContent =
    character.statsspecialDefence;
  document.querySelector("#dialog-statsSpeed").textContent =
    character.statsSpeed;

  // show dialog
  document.querySelector("#dialog-character").showModal();
}

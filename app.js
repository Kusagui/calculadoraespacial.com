// Importando los objetos planeta para manejar los datos
import { solarSystem } from "./source/planets.js";
// Importando componente de tarjeta para cada respuesta
import planetCard from "./source/components/planet-card.js";
customElements.define("planet-card", planetCard);

// Obteniendo el los planetas deseados por el usuario
function getPlanetsInput() {
  let selectedPlanets = document.querySelectorAll("input[type=checkbox]");
  let InitialAnswers = [...selectedPlanets];
  let realAnswers = [];
  InitialAnswers.forEach((answer) => {
    if (answer.checked) {
      realAnswers.push(answer.value);
    }
  });
  return realAnswers;
}

// Get user input weight
function getUserWeight() {
  let userWeight = document.querySelector("#earth");
  let weightValue = parseInt(userWeight.value);
  return weightValue;
}

// Calculate weight in other planets
function calculateMyWeight(userW, planetG) {
  const earthGravity = solarSystem[2].gravity;
  let myNewWeight = (userW * planetG) / earthGravity;
  return myNewWeight;
}

// Creating the answers by planet card
function answerListItem(planet, finalUW) {
  let pName = planet.name;
  let pGravity = planet.gravity;
  let pImage = planet.photo;
  let uWeight = finalUW;

  const answerContainer = document.createElement("li");
  answerContainer.classList.add("answer");

  const pCard = document.createElement("planet-card");
  pCard.dataset.name = pName;
  pCard.dataset.img = pImage;
  pCard.dataset.gravity = pGravity;
  pCard.dataset.userWeight = uWeight.toFixed(2);

  answerContainer.appendChild(pCard);

  return answerContainer;
}

// calculating and  pushing each answer to a container
function gettingPlanetAnswers(chosenPlanets, uWeight) {
  let arrayTotalAnswers = [];
  let nodeTotalAnswers = document.createElement("ul");
  nodeTotalAnswers.classList.add("answers-container");

  chosenPlanets.forEach((chosenPlanet) => {
    for (let index = 0; index < solarSystem.length; index++) {
      const planet = solarSystem[index];

      if (chosenPlanet === planet.name) {
        let finalUserWeight = calculateMyWeight(uWeight, planet.gravity);
        let answerPlanet = answerListItem(planet, finalUserWeight);
        arrayTotalAnswers.push(answerPlanet);
      }
    }
  });

  nodeTotalAnswers.append(...arrayTotalAnswers);
  return nodeTotalAnswers;
}

// Main function
function startProgram() {
  // Getting Planets
  let chosenPlanets = getPlanetsInput();

  // Getting user weight
  let userWeight = getUserWeight();

  // Calculating my weight
  let finalAnswers = gettingPlanetAnswers(chosenPlanets, userWeight);

  // Creando contenedor de sección de respuestas
  const answerContainer = document.createElement("section");
  answerContainer.classList.add("answer-container");

  // The close tab of main container
  const closeIcon = document.createElement("img");
  closeIcon.classList.add("close-icon");
  closeIcon.src = "../assets/icons/close.png";

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("icon-container");

  iconContainer.append(closeIcon);

  // Title
  const answerTitle = document.createElement("h2");
  answerTitle.classList.add("answer-title");
  answerTitle.textContent = "Hi Friend!";

  const inputRemainder = document.createElement("p");
  inputRemainder.classList.add("user-input-reminder");
  inputRemainder.textContent = `Your weight in the planet ${solarSystem[2].name} is ${userWeight}`;

  const finalTitle = document.createElement("h3");
  finalTitle.classList.add("final-planets-title");
  finalTitle.textContent = "Your weight in the chosen planets";

  answerContainer.append(
    iconContainer,
    answerTitle,
    inputRemainder,
    finalTitle,
    finalAnswers
  );

  const calculator = document.querySelector(".calculator");
  calculator.appendChild(answerContainer);

  const closeNode = () => {
    calculator.removeChild(answerContainer);
  };

  closeIcon.addEventListener("click", closeNode);
}

const button = document.querySelector(".button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  startProgram();
  document.querySelector(".calculator--form").reset();
});

let userWeight = document.querySelector('#earth').value;

let mercury = document.querySelector('#mercury');
let venus = document.querySelector('#venus');
let mars = document.querySelector('#mars');
let jupiter = document.querySelector('#jupiter');
let saturn = document.querySelector('#saturn');
let uranus = document.querySelector('#uranus');
let neptune = document.querySelector('#neptune');
let pluto = document.querySelector('#pluto');

const EARTHGRAVITY = 9.8;

let chosenPlanets = [];

if (mercury.checked) {
    const gMercury = 3.7;
    chosenPlanets.push(gMercury);
} else if (venus.checked) {
    const gVenus = 8.87;
    chosenPlanets.push(gVenus);
} else if (mars.checked) {
    const gMars = 3.7;
    chosenPlanets.push(gMars)
} else if (jupiter.checked) {
    const gJupiter = 24.8;
    chosenPlanets.push(gJupiter);
} else if (saturn.checked) {
    const gSaturn = 10.44;
    chosenPlanets.push(gSaturn);
} else if (uranus.checked) {
    const gUranus = 8.87;
    chosenPlanets.push(gUranus);
} else if (neptune.checked) {
    const gNeptune = 11.15;
    chosenPlanets.push(gNeptune);
} else if (pluto.checked) {
    const gPluto = 0.62;
    chosenPlanets.push(gPluto);
}

let planets = chosenPlanets.map();
console.log(planets);



let button = document.querySelector('#button');

button.addEventListener("click", function () {
    let finalWeight = () => (userWeight * chosenPlanets[i]) / EARTHGRAVITY;    
});



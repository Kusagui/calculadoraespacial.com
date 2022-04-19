const planets = [
    {
        'name' : 'Mercury',
        'gravity': 3.7
    },
    {
        'name' : 'Venus',
        'gravity': 8.87
    },
    {
        'name' : 'Earth',
        'gravity': 9.8
    },
    {
        'name' : 'Mars',
        'gravity': 3.7
    },
    {
        'name' : 'Jupiter',
        'gravity': 24.8
    },
    {
        'name' : 'Saturn',
        'gravity': 10.44
    },
    {
        'name' : 'Uranus',
        'gravity': 8.87
    },
    {
        'name' : 'Neptune',
        'gravity': 11.15
    },
    {
        'name' : 'Pluto',
        'gravity': 0.62
    }
];

// Obteniendo el los planetas deseados por el usuario
function getPlanetsInput() {
    // Tomando checkboxes dentro de un nodeList
    let selectedPlanets = document.querySelectorAll('input[type=checkbox]');  
    
    // Convirtiendo nodeList a un array
    let InitialAnswers = [...selectedPlanets];
    
    // Variable que contenga los planetas seleccionados
    let realAnswers = [];
    
    // Empujando cada planeta seleccionado al contenedor de respuestas
    InitialAnswers.forEach((answer) => {
    
        if (answer.checked) {
            realAnswers.push(answer);
        }
    
    });

    return realAnswers;
}

// Get user input weight
function getUserWeight() {
    let userWeight = document.querySelector('#earth');
    let weightValue = parseInt(userWeight.value);
    
    return weightValue;
}

// Calculate weight in other planets
function calculateMyWeight(userW, planetG) {
    const earthGravity = planets[2].gravity;
    let myNewWeight = (userW * planetG) / earthGravity;
    return myNewWeight;
}

// Creating the answers by planet card
function answerListItem(planetName, planetGravity, finalUW) {
    
    let pName = planetName;
    let pGravity = planetGravity;
    let uWeight = finalUW; 
    
    const answerContainer = document.createElement('li');
    answerContainer.classList.add('answer-li');

    const answerP = document.createElement('div');
    answerP.classList.add('answer-planet');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const planetImage = document.createElement('img');
    planetImage.classList.add('planet-image');

    imageContainer.appendChild(planetImage);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const answerTitle = document.createElement('h3');
    answerTitle.classList.add('answer-title');
    answerTitle.textContent = `The gravity of the planet ${pName} is: ${pGravity}`;

    const answerText = document.createElement('p');
    answerText.classList.add('answer-text');
    answerText.textContent = `${uWeight.toFixed(2)}`;

    textContainer.append(answerTitle, answerText);

    answerP.append(imageContainer, textContainer);

    answerContainer.appendChild(answerP);

    return answerContainer;
}

// calculating and  pushing each answer to a container
function gettingPlanetAnswers(cPlanets) {
    let arrayTotalAnswers = [];
    let nodeTotalAnswers = document.createElement('ul');
    nodeTotalAnswers.classList.add('answers-list');

    let finalTitle = document.createElement('h3');
    finalTitle.classList.add('final-planets-title');
    finalTitle.textContent = 'Your weight in the chosen planets';

    // Getting user weight
    let userWeight = getUserWeight();

    for (let i = 0; i < cPlanets.length; i++) {
        let planet = cPlanets[i];

        for (let p = 0; p < planets.length; p++ ) {
            let chosenPlanet = planets[p].name;
            let chosenGravity = planets[p].gravity;

            if (planet.value === chosenPlanet) {                
        
                let finalUserWeight = calculateMyWeight(userWeight, chosenGravity);

                let answerPlanet = answerListItem(chosenPlanet, chosenGravity, finalUserWeight);

                arrayTotalAnswers.push(answerPlanet);
            }
        }        
    }

    nodeTotalAnswers.append(finalTitle, ...arrayTotalAnswers);
    return nodeTotalAnswers;
}

// Main function
function startProgram() {
    // Getting Planets
    let chosenPlanets = getPlanetsInput();

    // Getting user weight
    let userWeight = getUserWeight();
    
    // Calculating my weight
    let finalAnswers = gettingPlanetAnswers(chosenPlanets);
    console.log(finalAnswers);
    
    // Creando contenedor de sección de respuestas
    const answerContainer = document.createElement('section');
    answerContainer.classList.add('answer-container');

    // The close tab of main container 
    const closeIcon = document.createElement('img');
    closeIcon.classList.add('close-icon');
    closeIcon.src = '../assets/icons/close.png';

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    iconContainer.append(closeIcon);

    // Title 
    const answerTitle = document.createElement('h2');
    answerTitle.classList.add('answer-title');
    answerTitle.textContent = 'Hi Friend!';

    const inputRemainder = document.createElement('p');
    inputRemainder.classList.add('user-input-reminder');
    inputRemainder.textContent = `Your weight in the planet ${planets[2].name} is ${userWeight}`;


    answerContainer.append(iconContainer, answerTitle, inputRemainder, finalAnswers);

    const body = document.querySelector('.main-body');
    body.appendChild(answerContainer);  

    const closeNode = () => {
        body.removeChild(answerContainer);
    }
    
    closeIcon.addEventListener('click', closeNode);  
}

const button = document.querySelector('.button');
button.addEventListener('click', startProgram);


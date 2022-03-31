function calculateMyWeight() {

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
        
        chosenPlanets.push({
            'name': mercury.value,
            'gravity': gMercury
        });
    }
    
    if (venus.checked) {
        const gVenus = 8.87;
        
        chosenPlanets.push({
            'name': venus.value,
            'gravity': gVenus
        });
    }
    
    if (mars.checked) {
        const gMars = 3.7;
        
        chosenPlanets.push({
            'name': mars.value,
            'gravity': gMars
        });
    }
    
    if (jupiter.checked) {
        const gJupiter = 24.8;
        
        chosenPlanets.push({
            'name': jupiter.value,
            'gravity': gJupiter
        });
    }
    
    if (saturn.checked) {
        const gSaturn = 10.44;
        
        chosenPlanets.push({
            'name': saturn.value,
            'gravity': gSaturn
        });
    }
    
    if (uranus.checked) {
        const gUranus = 8.87;
        
        chosenPlanets.push({
            'name': uranus.value,
            'gravity': gUranus
        });
    }
    
    if (neptune.checked) {
        const gNeptune = 11.15;
        
        chosenPlanets.push({
            'name': neptune.value,
            'gravity': gNeptune
        });
    }
    
    if (pluto.checked) {
        const gPluto = 0.62;
        
        chosenPlanets.push({
            'name': pluto.value,
            'gravity': gPluto
        });
    }

    function calculateMyWeight(n1, n2) {
        return (n1 * n2) / EARTHGRAVITY;
    }

    const answerContainer = document.createElement('div');
    answerContainer.classList.add('answer-container');    

    const answerTitle = document.createElement('h2');
    answerTitle.classList.add('answer-title');
    answerTitle.textContent = 'Your weight in the chosen planets';

    const earthCard = document.createElement('div');
    earthCard.classList.add('earth-card');

    const earthCardTitle = document.createElement('h3');
    earthCardTitle.classList.add('earth-card--title');
    earthCardTitle.textContent = `The gravity in Earth is: ${EARTHGRAVITY}m/s2`

    const earthCardText = document.createElement('p');
    earthCardText.classList.add('earth-card--text');
    earthCardText.textContent = `Then Your weight is: ${userWeight}Kg`;

    earthCard.append(earthCardTitle, earthCardText);

    const planetCards = [];

    for (let i = 0; i < chosenPlanets.length; i++) {

        let planetGravity = chosenPlanets[i].gravity;
        let finalWeight = calculateMyWeight(userWeight, planetGravity);

        const planetCard = document.createElement('div');
        planetCard.classList.add('planet-card');

        const planetCardTitle = document.createElement('h3');
        planetCardTitle.classList.add('planet-card--title');
        planetCardTitle.textContent = `The gravity in ${chosenPlanets[i].name} is: ${chosenPlanets[i].gravity}m/s2`

        const planetCardText = document.createElement('p');
        planetCardText.classList.add('earth-card--text');
        planetCardText.textContent = `Then Your weight is: ${finalWeight.toFixed(2)}kg`;

        planetCard.append(planetCardTitle, planetCardText);

        planetCards.push(planetCard);

        console.log(`Your weight in ${chosenPlanets[i].name} is: ${finalWeight.toFixed(2)}kg`);
    }  

    answerContainer.append(answerTitle, earthCard);
    answerContainer.append(...planetCards);

    const body = document.querySelector('.main-body');
    body.appendChild(answerContainer);
}



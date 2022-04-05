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

    /* Main container */
    const answerContainer = document.createElement('div');
    answerContainer.classList.add('answer-container');   
    
    /* The close tab of main container */
    const closeIcon = document.createElement('img');
    closeIcon.classList.add('close-icon');
    closeIcon.src = "../assets/icons/close.png"
    closeIcon.width = "24"

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');

    iconContainer.append(closeIcon);

    /* Title */
    const answerTitle = document.createElement('h2');
    answerTitle.classList.add('answer-title');
    answerTitle.textContent = 'Your weight in the chosen planets';

    /* Earth Card */
    const earthCard = document.createElement('article');
    earthCard.classList.add('earth-card');

    const earthImage = document.createElement('img');
    earthImage.src = '';
    earthImage.classList.add('earth--image');

    const earthImageContainer = document.createElement('figure');
    earthImageContainer.classList.add('image-container');
    earthImageContainer.append(earthImage);

    const earthCardTitle = document.createElement('h3');
    earthCardTitle.classList.add('earth-card--title');
    earthCardTitle.textContent = `The gravity in Earth is: ${EARTHGRAVITY}m/s2`

    const earthCardText = document.createElement('p');
    earthCardText.classList.add('earth-card--text');
    earthCardText.textContent = `Then Your weight is: ${userWeight}Kg`;

    const earthTextContainer = document.createElement('div');
    earthTextContainer.classList.add('earth-text-container');
    earthTextContainer.append(earthCardTitle, earthCardText);

    earthCard.append(earthImageContainer, earthTextContainer);

    const planetCards = [];

    for (let i = 0; i < chosenPlanets.length; i++) {

        let planetGravity = chosenPlanets[i].gravity;
        let finalWeight = calculateMyWeight(userWeight, planetGravity);

        /* Planet card */

        const planetCard = document.createElement('article');
        planetCard.classList.add('planet-card');

        const planetImage = document.createElement('img');
        planetImage.src = '';
        planetImage.classList.add('planet-card--image');

        const imageContainer = document.createElement('figure');
        imageContainer.classList.add('planet-image-container');
        imageContainer.append(planetImage);

        const planetCardTitle = document.createElement('h3');
        planetCardTitle.classList.add('planet-card--title');
        planetCardTitle.textContent = `The gravity in ${chosenPlanets[i].name} is: ${chosenPlanets[i].gravity}m/s2`

        const planetCardText = document.createElement('p');
        planetCardText.classList.add('earth-card--text');
        planetCardText.textContent = `Then Your weight is: ${finalWeight.toFixed(2)}kg`;

        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');
        resultContainer.append(planetCardTitle, planetCardText)

        planetCard.append(imageContainer, resultContainer);

        planetCards.push(planetCard);

        console.log(`Your weight in ${chosenPlanets[i].name} is: ${finalWeight.toFixed(2)}kg`);
    }  

    answerContainer.append(iconContainer, answerTitle, earthCard);
    answerContainer.append(...planetCards);

    const body = document.querySelector('.main-body');
    body.appendChild(answerContainer);

    const closeNode = () => {
        body.removeChild(answerContainer);
    }

    closeIcon.addEventListener('click', closeNode);
}



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
    

    for (let i = 0; i < chosenPlanets.length; i++) {

        let planetGravity = chosenPlanets[i].gravity;

        let finalWeight = calculateMyWeight(userWeight, planetGravity);

        console.log(`Your weight in ${chosenPlanets[i].name} is: ${finalWeight.toFixed(2)}kg`);
    }  
}



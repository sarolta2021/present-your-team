function loadFirstTeam() {
    fetch('fantasticfour.json')
        .then(r => r.json())
        .then(displayData);
}

function loadSecondTeam() {
    fetch('otherteam.json')
        .then(r => r.json())
        .then(displaySecondData);
}

function displayData(firstteam) {
    let name = document.createElement("h1");
    let 
}
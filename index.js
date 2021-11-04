function loadFirstTeam() {
    fetch('fantasticfour.json')
        .then(r => r.json())
        .then(displayPeoples);
}

function displayPeoples(peoples) {
    displayPeople(peoples[0]);
}

function displayPeople(people) {
    let name = document.createElement("h1");
    let email = document.createElement("div");
    name.innerText = people.name;
    let box = document.createElement("div");
    box.append(name, email);
    document.getElementById("people").append(box);
}

window.addEventListener('load', loadFirstTeam);
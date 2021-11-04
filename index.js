function loadFirstTeam() {
    fetch('fantasticfour.json')
        .then(r => r.json())
        .then(displayFirstTeam);
}

function displayFirstTeam(peoples) {
    displayPeople(peoples[0]);
    displayPeople(peoples[1]);
    displayPeople(peoples[2]);
    displayPeople(peoples[3]);
}

function displayPeople(people) {
    let name = document.createElement("h1");
    let email = document.createElement("div");
    name.innerText = people.name;
    email.innerText = people.email;
    let box = document.createElement("div");
    box.append(name, email);
    document.getElementById("peoples").append(box);
}

window.addEventListener('load', loadFirstTeam);
function loadFirstTeam() {
    fetch('fantasticfour.json')
        .then(r => r.json())
        .then(displayData);
}
//To Be implemented later
//function loadSecondTeam() {
    //fetch('otherteam.json')
        //.then(r => r.json())
        //.then(displaySecondData);
//}

function displayData(firstteam) {
    let name = document.createElement('h1');
    let email = document.createElement('div');
    let box = document.createElement("div");
    name.innerText = personname.name;
    email.innerText = personmail.email;
    box.append(name, email);
    document.getElementById("teams").append(box);
}

window.addEventListener('load', loadFirstTeam);
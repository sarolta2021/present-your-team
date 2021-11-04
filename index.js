function loadFirstTeam() {
    fetch('fantasticfour.json')
        .then(r => r.json())
        .then(displayFirstTeam);
}
function loadSecondTeam() {
    fetch('otherteam.json')
        .then(r => r.json())
        .then(displaySecondTeam);
}
function displayFirstTeam(teamOnePeoples) {
    displayTeamOnePeople(teamOnePeoples[0]);
    displayTeamOnePeople(teamOnePeoples[1]);
    displayTeamOnePeople(teamOnePeoples[2]);
    displayTeamOnePeople(teamOnePeoples[3]);
}
function displaySecondTeam(teamTwoPeoples) {
    displayTeamTwoPeople(teamTwoPeoples[0]);
    displayTeamTwoPeople(teamTwoPeoples[1]);
    displayTeamTwoPeople(teamTwoPeoples[2]);
}
function displayTeamOnePeople(people) {
    let name = document.createElement("h1");
    let email = document.createElement("div");
    let hobby = document.createElement("div");
    let openperson = document.createElement("div");
    let cleaningscore = document.createElement("div");
    let goodfriend = document.createElement("div");
    let drink = document.createElement("div");
    let location = document.createElement("div");
    let motto = document.createElement("div");
    let bestholiday = document.createElement("div");
    let biggestfear = document.createElement("div");
    name.innerText = "\nName: " + people.name;
    email.innerText = "\nEmail address to spam: " + people.email;
    hobby.innerText = "\nHobby: " + people.hobby;
    openperson.innerText = "\nHe / She is an open person: " + people.openperson;
    cleaningscore.innerText = "\nHow much He / She likes cleanliness on a scale from 1 to 10: " + people.cleaningscore;
    goodfriend.innerText = "\nHe / She is a good friend: " + people.goodfriend;
    drink.innerText = "\nFavorite type of drink: " + people.drink;
    location.innerText = "\nCurrent location: " + people.location;
    motto.innerText = "\nTheir motto: " + people.motto;
    bestholiday.innerText = "\nHis / Her best place for Holidays: " + people.bestholiday;
    biggestfear.innerText = "\nHis / Her biggest fear: " + people.biggestfear;
    let box = document.createElement("div");
    box.append(name, email, hobby, openperson, cleaningscore, goodfriend, drink, location, motto, bestholiday, biggestfear);
    document.getElementById("teamone").append(box);
}
function displayTeamTwoPeople(peopletwo) {
    let name = document.createElement("h1");
    let email = document.createElement("div");
    let hobby = document.createElement("div");
    let openperson = document.createElement("div");
    let cleaningscore = document.createElement("div");
    let goodfriend = document.createElement("div");
    let drink = document.createElement("div");
    let location = document.createElement("div");
    let motto = document.createElement("div");
    let bestholiday = document.createElement("div");
    let biggestfear = document.createElement("div");
    name.innerText = "\nName: " + peopletwo.name;
    email.innerText = "\nEmail address to spam: " + peopletwo.email;
    hobby.innerText = "\nHobby: " + peopletwo.hobby;
    openperson.innerText = "\nHe / She is an open person: " + peopletwo.openperson;
    cleaningscore.innerText = "\nHow much He / She likes cleanliness on a scale from 1 to 10: " + peopletwo.cleaningscore;
    goodfriend.innerText = "\nHe / She is a good friend: " + peopletwo.goodfriend;
    drink.innerText = "\nFavorite type fo drink (this doens't seem right): " + peopletwo.drink;
    location.innerText = "\nCurrent location: " + peopletwo.location;
    motto.innerText = "\nTheir motto: " + peopletwo.motto;
    bestholiday.innerText = "\nHis / Her best place for Holidays: " + peopletwo.bestholiday;
    biggestfear.innerText = "\nHis / Her biggest fear: " + peopletwo.biggestfear;
    let box = document.createElement("div");
    box.append(name, email, hobby, openperson, cleaningscore, goodfriend, drink, location, motto, bestholiday, biggestfear);
    document.getElementById("teamtwo").append(box);
}
window.addEventListener('load', loadFirstTeam);
window.addEventListener('load', loadSecondTeam);
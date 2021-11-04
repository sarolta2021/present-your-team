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

}
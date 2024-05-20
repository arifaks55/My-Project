function increaseGoal(teamID) {
    var goalsElement = document.getElementById(teamID + 'Goals');
    var currentGoals = parseInt(goalsElement.innerText);
    goalsElement.innerText = currentGoals + 1;
}

function decreaseGoal(teamID) {
    var goalsElement = document.getElementById(teamID + 'Goals');
    var currentGoals = parseInt(goalsElement.innerText);
    if (currentGoals > 0) {
        goalsElement.innerText = currentGoals - 1;
    }
}

function setGoal(teamID) {
    var goalsElement = document.getElementById(teamID + 'Goals');
    var newGoal = prompt('Yeni gol sayısını girin:');
    if (!isNaN(newGoal)) {
        goalsElement.innerText = parseInt(newGoal);
    } else {
        alert('Lütfen geçerli bir sayı girin!');
    }
}

function changeTeamName(teamID) {
    var newName = prompt('Yeni takım ismini girin:');
    var nameElement = document.getElementById(teamID + 'Name');
    nameElement.innerText = newName;
}
// JavaScript ile ses çaları kontrol etmeye yarıyor.
const audio = document.getElementById("myAudio");

// Sayfa yüklendiğinde müziği otomatik olarak çalmak için kullandım.
window.addEventListener("load", () => {
    audio.play();
});

// Müziği durdurmak için bir düğme ekledim.
const stopButton = document.createElement("button");
stopButton.textContent = "Müziği Durdur";
stopButton.addEventListener("click", () => {
    audio.pause();
});
document.body.appendChild(stopButton);
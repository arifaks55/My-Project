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

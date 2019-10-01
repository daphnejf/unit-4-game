var wins = 0;
var losses = 0;
var totalScore = 0;

var randomNumber = Math.floor(Math.random() * (120 - 20 + 1)) + 20;
$("#randomNumber").text(randomNumber);

var cr1 = Math.floor(Math.random()*12) + 1;
var cr2 = Math.floor(Math.random()*12) + 1;
var cr3 = Math.floor(Math.random()*12) + 1;
var cr4 = Math.floor(Math.random()*12) + 1;

var c = [cr1,cr2,cr3,cr4];
console.log(c);

function reset() {
    totalScore = 0;
    $("#totalScore").text(totalScore);  

    randomNumber = Math.floor(Math.random() * (120 - 20 + 1)) + 20;
    $("#randomNumber").text(randomNumber);
    console.log(randomNumber);

    cr1 = Math.floor(Math.random()*12) + 1;
    cr2 = Math.floor(Math.random()*12) + 1;
    cr3 = Math.floor(Math.random()*12) + 1;
    cr4 = Math.floor(Math.random()*12) + 1;
    
    var c = [cr1,cr2,cr3,cr4];
    console.log(c);
}

function win() {
    wins++;
    $("#wins").text("Wins: " + wins);
    reset();
}

function lose() {
    losses++;
    $("#losses").text("Losses: " + losses);
    reset();
}

$("#crystal1").click(() => {
    totalScore = totalScore + cr1;
    $("#totalScore").text(totalScore);
    if (totalScore === randomNumber) {
        win();
    }
    else if (totalScore > randomNumber) {
        lose();
    }
});

$("#crystal2").click(() => {
    totalScore = totalScore + cr2;
    $("#totalScore").text(totalScore);
    if (totalScore === randomNumber) {
        win();
    }
    else if (totalScore > randomNumber) {
        lose();
    }
});

$("#crystal3").click(() => {
    totalScore = totalScore + cr3;
    $("#totalScore").text(totalScore);
    if (totalScore === randomNumber) {
        win();
    }
    else if (totalScore > randomNumber) {
        lose();
    }
});

$("#crystal4").click(() => {
    totalScore = totalScore + cr4;
    $("#totalScore").text(totalScore);
    if (totalScore === randomNumber) {
        win();
    }
    else if (totalScore > randomNumber) {
        lose();
    }
});


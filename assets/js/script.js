// variables from html.
let buttons = document.querySelectorAll('button');
let player = document.getElementById('P-area');
let computer = document.getElementById('C-area');

let resultMessage = document.getElementsByClassName('message')[0];

let playerScore = parseInt(document.getElementById('P-score').innerText);
let computerScore = parseInt(document.getElementById('C-score').innerText);
let drawScore = parseInt(document.getElementById('D-score').innerText);

// array links to player and computer choices.
let choices = ['rock', 'paper', 'scissor', 'lizard', 'spock'];
// index guide - 0   -    1    -    2     -    3    -   4
let startButton = document.getElementById("start");

startButton.addEventListener("click", function () {
    start = 1;
    document.getElementById("start").style.display = "none";
})

for (let button of buttons) {
    button.addEventListener('click', function () {
        let playerChoice = this.getAttribute('data-type');
        startGame(playerChoice);
    });
}

function getResult(var1, var2) {
    if (var1 === var2) {
        resultMessage.innerHTML = "It's a DRAW!";
        draw();
    } else if (var1 === choices[0] && var2 === choices[1]) {
        resultMessage.innerHTML = "Paper covers Rock, you Lost!";
        loser();
    } else if (var1 === choices[1] && var2 === choices[0]) {
        resultMessage.innerHTML = "Paper covers Rock, you Won!";
        winner();
    } else if (var1 === choices[2] && var2 === choices[0]) {
        resultMessage.innerHTML = "Rock crushes Scissors, you Lost!";
        loser();
    } else if (var1 === choices[0] && var2 === choices[2]) {
        resultMessage.innerHTML = "Rock crushes Scissors, you Won!";
        winner();
    } else if (var1 === choices[1] && var2 === choices[2]) {
        resultMessage.innerHTML = "Scissors cut Paper, you Lost!";
        loser();
    } else if (var1 === choices[2] && var2 === choices[1]) {
        resultMessage.innerHTML = "Scissors cut Paper, you Won!";
        winner();
    } else if (var1 === choices[3] && var2 === choices[0]) {
        resultMessage.innerHTML = "Rock crushes Lizard, you Lost!";
        loser();
    }
}
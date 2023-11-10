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
    } else if (var1 === choices[4] && var2 === choices[3]) {
        resultMessage.innerHTML = "Lizard poisons Spock, you Lost!";
        loser();
    } else if (var1 === choices[3] && var2 === choices[4]) {
        resultMessage.innerHTML = "Lizard poisons Spock, you Won!";
        winner();
    } else if (var1 === choices[2] && var2 === choices[4]) {
        resultMessage.innerHTML = "Spock smashes Scissors, you Lost!";
        loser();
    } else if (var1 === choices[4] && var2 === choices[2]) {
        resultMessage.innerHTML = "Spock smashes Scissors, you Won!";
        winner();
    } else if (var1 === choices[3] && var2 === choices[2]) {
        resultMessage.innerHTML = "Scissors cuts Lizard, you Lost!";
        loser();
    } else if (var1 === choices[2] && var2 === choices[3]) {
        resultMessage.innerHTML = "Scissors cuts Lizard, you Won!";
        winner();
    } else if (var1 === choices[1] && var2 === choices[3]) {
        resultMessage.innerHTML = "Lizard eats Paper, you Lost!";
        loser();
    } else if (var1 === choices[3] && var2 === choices[1]) {
        resultMessage.innerHTML = "Lizard eats Paper, you Won!";
        winner();
    } else if (var1 === choices[4] && var2 === choices[1]) {
        resultMessage.innerHTML = "Paper disproves Spock, you Lost!";
        loser();
    } else if (var1 === choices[1] && var2 === choices[4]) {
        resultMessage.innerHTML = "Paper disproves Spock, you Won!";
        winner();
    } else if (var1 === choices[0] && var2 === choices[4]) {
        resultMessage.innerHTML = "Spock vaporizes Rock, you Lost!";
        loser();
    } else if (var1 === choices[4] && var2 === choices[0]) {
        resultMessage.innerHTML = "Spock vaporizes Rock, you Won!";
        winner();
    }
}

/** Start game function to be called when player presses button
 * the player area is updated with playerChoice and game message in correspondence to choice.
 * Get random number between 0-4 and links to array.
 */

function startGame(playerChoice) {
    player.innerHTML = `<p><strong><u>You:</u></strong></p> <br> 
    <img alt="${choices[playerChoice]}" src="assets/images/${choices[playerChoice]}.png">`;

    // choices.length allows for more button choices
    let computerChoice = Math.floor(Math.random() * choices.length); 
    
    computer.innerHTML = `<p><strong><u>Computer:</u></strong></p> <br> 
    <img alt="${choices[computerChoice]}" src="assets/images/${choices[computerChoice]}.png">`;

    //  calls getResult() function*/
    getResult(choices[playerChoice], choices[computerChoice]);
}

/** Adds 1 to playerscore */
function winner() {
    document.getElementById('P-score').innerText = ++playerScore;
}

/** Adds 1 to drawscore */
function draw() {
    document.getElementById('D-score').innerText = ++drawScore;
}

/** Adds 1 to computerscore */
function loser() {
    document.getElementById('C-score').innerText = ++computerScore;
}
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
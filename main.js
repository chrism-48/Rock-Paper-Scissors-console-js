
console.log("Let's play a game of rock paper scissors!")
console.log("Enter rock paper or scissors into prompt.")
function playerSelection() {
    const gameQuestion = prompt("Enter your choice.").toLowerCase();
    console.log(`You have chosen ${gameQuestion}.`);
    return gameQuestion;
    
    
}


function computerSelection(gameQuestion) {    
    const gameVar = ['rock', 'paper', 'scissors'];
    const randomItem = gameVar[Math.floor(Math.random() * gameVar.length)];
    console.log(`Computer has chosen ${randomItem}.`);
    return randomItem;
        
}


function playRound(randomItem,gameQuestion) {
    console.log("I'm here")
    
}


// Run program //

playerSelection();
computerSelection();
playRound();





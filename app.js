//player chooses rock paper or scissors.
//Computer chooses one of 3 choices. 
//Of those 3 there are 


//Needed
//3 buttons
//2 columns where something happens win loose or draw. 
//Functions 
//1 playerChoice chooses rock paper or scissors.
//2 CompChoice chooses rock paper or scissors.



function play(playerChoice) {
    debugger
    let options = ['rock', 'paper', 'scissors']
    let compChoice = options[Math.floor(Math.random() * options.length)]
    if (playerChoice == 'rock' && compChoice == 'rock') {
        document.getElementById('tie').classList.remove("hideTie");
    } else if (playerChoice == 'rock' && compChoice == 'paper') {
        document.getElementById('loss').classList.remove("hideLoss");
    } else if (playerChoice == 'rock' && compChoice == 'scissors') {
        document.getElementById('win').classList.remove("hideWin");
    } else if (playerChoice == 'paper' && compChoice == 'rock') {
        document.getElementById('win').classList.remove("hideWin");
    } else if (playerChoice == 'paper' && compChoice == 'paper') {
        document.getElementById('tie').classList.remove("hideTie");
    } else if (playerChoice == 'paper' && compChoice == 'scissors') {
        document.getElementById('loss').classList.remove("hideLoss");
    } else if (playerChoice == 'scissors' && compChoice == 'rock') {
        document.getElementById('loss').classList.remove("hideLoss");
    } else if (playerChoice == 'scissors' && compChoice == 'paper') {
        document.getElementById('win').classList.remove("hideWin");
    } else if (playerChoice == 'scissors' && compChoice == 'scissors') {
        document.getElementById('tie').classList.remove("hideTie");
    }
}

// function comparison() {
//     if (playerChoice == 'rock' && compChoice == 'rock') {
//         console.log(tie)
//     }
// }


//function compChoice()

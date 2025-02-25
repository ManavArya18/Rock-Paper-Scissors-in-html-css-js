let userScore=0;
let compScore=0;
const choices = document.querySelectorAll('.choice');
const computer = document.querySelector('.computer'); // Ensure this selects the correct element
const playerScore = document.querySelector('#player')
const computerScore = document.querySelector('#ComputerScore')
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    console.log('function');
    return options[randIdx];
};
const computerOutput = (compChoice) =>{
    if (compChoice == "rock"){
        computer.style.backgroundImage = "url('images/rock.png')";
    }
    else if (compChoice == "paper"){
        computer.style.backgroundImage = "url('images/paper.png')";
    }
    else{
        computer.style.backgroundImage = "url('images/scissors.png')";
    }
};
const drawGame = () =>{
    
};
const playGame = (userChoice) =>{
    let compChoice = genCompChoice();
    computerOutput(compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        if(userWin){
            userScore++;
            playerScore.textContent = userScore;
        }
        else{
            compScore++;
            computerScore.textContent = compScore;
        }
    }
}
choices.forEach(choice => choice.addEventListener('click', (event) => { // Pass the event object
    const userChoice = event.target.id; // Use event.target.id to get the user choice
    playGame(userChoice);
}));
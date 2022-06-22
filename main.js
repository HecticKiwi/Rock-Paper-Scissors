const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let outcome = document.querySelector("#outcome");

rock.addEventListener('click', () => {
    playRound("rock")
})

paper.addEventListener('click', () => {
    playRound("paper")
})

scissors.addEventListener('click', () => {
    playRound("scissors");
})

function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const AIChoice = choices[Math.floor(Math.random() * choices.length)];

    outcome.textContent = `You chose ${playerChoice} and the AI chose ${AIChoice}.`;
    console.log(`You chose ${playerChoice} and the AI chose ${AIChoice}.`);

    if (playerChoice === AIChoice) {
        outcome.textContent = outcome.textContent += " It's a draw.";
    } else if (
        (playerChoice === "rock" && AIChoice === "scissors") ||
        (playerChoice === "paper" && AIChoice === "rock") ||
        (playerChoice === "scissors" && AIChoice === "paper")
    ) {
        outcome.textContent = outcome.textContent += " You win this round!";
    } else {
        outcome.textContent = outcome.textContent += " You lose this round...";
    }
}
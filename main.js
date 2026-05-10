// Simple Number Guessing Game

function startGame() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;

    let attempts = 3;

    console.log("Guess a number between 1 and 10!");

    while (attempts > 0) {
        const guess = Math.floor(Math.random() * 10) + 1; // simulated guess

        console.log(`You guessed: ${guess}`);

        if (guess === secretNumber) {
            console.log("Correct! You win 🎉");
            return;
        } else {
            console.log("Wrong guess ❌");
        }

        attempts--;
    }

    console.log(`Game over! The number was ${secretNumber}`);
}

// Start game
startGame();
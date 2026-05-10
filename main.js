// Simple Countdown Timer

function startCountdown(seconds) {
    let timeLeft = seconds;

    const timer = setInterval(() => {
        console.log(`Time left: ${timeLeft}s`);

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            console.log("Countdown finished!");
        }
    }, 1000);
}

// Example
startCountdown(10);
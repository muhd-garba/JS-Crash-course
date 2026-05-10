// Simple Digital Clock

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}

// Update every second
setInterval(updateClock, 1000);
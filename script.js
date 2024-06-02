const START = document.querySelector("#start");
const PAUSE = document.querySelector("#pause");
const RESET = document.querySelector("#reset");

let timeInMs = 0;
let timer;

function updateTimer() {
    let hrs = Math.floor(timeInMs / (60 * 60 * 1000)) % 24;
    let min = Math.floor(timeInMs / (60 * 1000)) % 60;
    let sec = Math.floor(timeInMs / 1000) % 60;
    let ms = Math.floor(timeInMs % 1000);

    document.querySelector("#hrs").innerText = hrs < 10 ? "0" + hrs : hrs;
    document.querySelector("#min").innerText = min < 10 ? "0" + min : min;
    document.querySelector("#sec").innerText = sec < 10 ? "0" + sec : sec;
    document.querySelector("#ms").innerText = ms / 10 < 10 ? "0" + Math.floor(ms / 10) : Math.floor(ms / 10);
}

function startTimer() {
    document.querySelector("#hrs").classList.remove("hidden"); // Show the hours span
    document.querySelector("#hrs-colon").classList.remove("hidden"); // Show the hours colon span
    timer = setInterval(() => {
        timeInMs += 10;
        updateTimer();
    }, 10);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    pauseTimer();
    timeInMs = 0;
    document.querySelector("#hrs").classList.add("hidden"); // Hide the hours span
    document.querySelector("#hrs-colon").classList.add("hidden"); // Hide the hours colon span
    updateTimer();
}

START.addEventListener("click", startTimer);
PAUSE.addEventListener("click", pauseTimer);
RESET.addEventListener("click", resetTimer);

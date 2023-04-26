const timer = document.getElementById('timer');
const startStopButton = document.getElementById('startStop');
let startTime;
let elapsedTime = 0;
let timerInterval;

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        timer.textContent = timeToString(elapsedTime);
    }, 10);
}

function stop() {
    clearInterval(timerInterval);
}

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

startStopButton.addEventListener('click', function() {
    if (startStopButton.textContent === 'Start') {
        start();
        startStopButton.textContent = 'Stop';
    } else {
        stop();
        startStopButton.textContent = 'Start';
    }
});

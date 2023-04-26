document.addEventListener('DOMContentLoaded', () => {
  const timer1 = document.getElementById('timer1');
  const startStop1 = document.getElementById('startStop1');
  const reset1 = document.getElementById('reset1');

  const timer2 = document.getElementById('timer2');
  const startStop2 = document.getElementById('startStop2');
  const reset2 = document.getElementById('reset2');

  let startTime1;
  let startTime2;
  let elapsedTime1 = 0;
  let elapsedTime2 = 0;
  let timerInterval1;
  let timerInterval2;
  let isRunning1 = false;
  let isRunning2 = false;

  function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }

  function startStopTimer1() {
    if (!isRunning1) {
      startTime1 = Date.now() - elapsedTime1;
      timerInterval1 = setInterval(function printTime() {
        elapsedTime1 = Date.now() - startTime1;
        timer1.textContent = timeToString(elapsedTime1);
      }, 10);
      startStop1.textContent = 'Stop';
      isRunning1 = true;
    } else {
      clearInterval(timerInterval1);
      startStop1.textContent = 'Start';
      isRunning1 = false;
    }
  }

  function resetTimer1() {
    clearInterval(timerInterval1);
    startStop1.textContent = 'Start';
    isRunning1 = false;
    elapsedTime1 = 0;
    timer1.textContent = '00:00:00';
  }

  function startStopTimer2() {
    if (!isRunning2) {
      startTime2 = Date.now() - elapsedTime2;
      timerInterval2 = setInterval(function printTime() {
        elapsedTime2 = Date.now() - startTime2;
        timer2.textContent = timeToString(elapsedTime2);
      }, 10);
      startStop2.textContent = 'Stop';
      isRunning2 = true;
    } else {
      clearInterval(timerInterval2);
      startStop2.textContent = 'Start';
      isRunning2 = false;
    }
  }

  function resetTimer2() {
    clearInterval(timerInterval2);
    startStop2.textContent = 'Start';
    isRunning2 = false;
    elapsedTime2 = 0;
    timer2.textContent = '00:00:00';
  }

  startStop1.addEventListener('click', startStopTimer1);
  reset1.addEventListener('click', resetTimer1);

  startStop2.addEventListener('click', startStopTimer2);
  reset2.addEventListener('click', resetTimer2);
});







// Add this new function to your existing script.js file
function updateImprovementPercentage() {
  if (elapsedTime1 > 0 && elapsedTime2 > 0) {
    let improvement = (elapsedTime1 - elapsedTime2) / elapsedTime1;
    let improvementPercentage = (improvement * 100).toFixed(2);
    document.getElementById('improvementPercentage').textContent = `${improvementPercentage}%`;
  } else {
    document.getElementById('improvementPercentage').textContent = '0%';
  }
}

// Update the resetTimer1 and resetTimer2 functions in your existing script.js file
function resetTimer1() {
  clearInterval(timerInterval1);
  startStop1.textContent = 'Start';
  isRunning1 = false;
  elapsedTime1 = 0;
  timer1.textContent = '00:00:00';
  updateImprovementPercentage();
}

function resetTimer2() {
  clearInterval(timerInterval2);
  startStop2.textContent = 'Start';
  isRunning2 = false;
  elapsedTime2 = 0;
  timer2.textContent = '00:00:00';
  updateImprovementPercentage();
}

// Update the startStopTimer1 and startStopTimer2 functions in your existing script.js file
function startStopTimer1() {
  // ... (existing code) ...
  } else {
    clearInterval(timerInterval1);
    startStop1.textContent = 'Start';
    isRunning1 = false;
    updateImprovementPercentage();
  }
}

function startStopTimer2() {
  // ... (existing code) ...
  } else {
    clearInterval(timerInterval2);
    startStop2.textContent = 'Start';
    isRunning2 = false;
    updateImprovementPercentage();
  }
}

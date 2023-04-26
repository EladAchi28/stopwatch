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
    let formattedMS = ms.toString

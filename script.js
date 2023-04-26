const timer1 = document.getElementById('timer1');
const startStop1 = document.getElementById('startStop1');
const reset1 = document.getElementById('reset1');

const timer2 = document.getElementById('timer2');
const startStop2 = document.getElementById('startStop2');
const reset2 = document.getElementById('reset2');

const improvement = document.getElementById('improvement');

let running1 = false;
let running2 = false;

let time1 = 0;
let time2 = 0;

let interval1;
let interval2;

function updateTime1() {
  const minutes = Math.floor(time1 / 6000);
  const seconds = Math.floor((time1 % 6000) / 100);
  const centiseconds = time1 % 100;

  timer1.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  time1++;
}

function updateTime2() {
  const minutes = Math.floor(time2 / 6000);
  const seconds = Math.floor((time2 % 6000) / 100);
  const centiseconds = time2 % 100;

  timer2.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
  time2++;
}

function startStopTimer1() {
  if (running1) {
    clearInterval(interval1);
    startStop1.textContent = 'Start';
  } else {
    interval1 = setInterval(updateTime1, 10);
    startStop1.textContent = 'Stop';
  }
  running1 = !running1;
}

function startStopTimer2() {
  if (running2) {
    clearInterval(interval2);
    startStop2.textContent = 'Start';
  } else {
    interval2 = setInterval(updateTime2, 10);
    startStop2.textContent = 'Stop';
  }
  running2 = !running2;
}

function resetTimer1() {
  clearInterval(interval1);
  time1 = 0;
  timer1.textContent = '00:00:00';
  startStop1.textContent = 'Start';
  running1 = false;
}

function resetTimer2() {
  clearInterval(interval2);
  time2 = 0;
  timer2.textContent = '00:00:00';
  startStop2.textContent = 'Start';
  running2 = false;
}

function calculateImprovement() {
  const time1Arr = timer1.textContent.split(':');
  const time1Seconds = (+time1Arr[0]) * 60 * 60 + (+time1Arr[1]) * 60 + (+time1Arr[2]);
  
  const time2Arr = timer2.textContent.split(':');
  const time2Seconds = (+time2Arr[0]) * 60 * 60 + (+time2Arr[1]) * 60 + (+time2Arr[2]);
  
  const improvementPercent = Math.round(((time1Seconds - time2Seconds) / time1Seconds) * 100);
  improvement.textContent = `Improvement: ${improvementPercent}%`;
}

startStop1.addEventListener('click', startStopTimer1);
reset1.addEventListener('click', resetTimer1);

startStop2.addEventListener('click', startStopTimer2);
reset2.addEventListener('click', resetTimer2);

setInterval(calculateImprovement, 100);

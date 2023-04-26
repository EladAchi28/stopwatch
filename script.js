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
  running1 = !running1

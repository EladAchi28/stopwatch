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

function timeToString(time)

$(document).ready(() => {
  let running1 = false,
    running2 = false,
    time1 = 0,
    time2 = 0,
    interval1,
    interval2,
    startTime1,
    startTime2;

  const timer1 = $('#timer1'),
    timer2 = $('#timer2'),
    startStop1 = $('#startStop1'),
    startStop2 = $('#startStop2'),
    reset1 = $('#reset1'),
    reset2 = $('#reset2'),
    improvement = $('#improvement'),
    calculateImprovementBtn = $('#calculateImprovementBtn'),
    solutionBtn = $('#solutionBtn');

  function updateTime1() {
    const currentTime = Date.now();
    time1 += currentTime - startTime1;
    startTime1 = currentTime;
    timer1.text(formatTime(time1));
  }

  function startStopTimer1() {
    if (running1) {
      clearInterval(interval1);
      startStop1.text('Start');
    } else {
      startTime1 = Date.now();
      interval1 = setInterval(updateTime1, 10);
      startStop1.text('Stop');
    }
    running1 = !running1;
  }

  function resetTimer1() {
    clearInterval(interval1);
    running1 = false;
    time1 = 0;
    timer1.text(formatTime(time1));
    startStop1.text('Start');
  }

  function updateTime2() {
    const currentTime = Date.now();
    time2 += currentTime - startTime2;
    startTime2 = currentTime;
    timer2.text(formatTime(time2));
  }

  function startStopTimer2() {
    if (running2) {
      clearInterval(interval2);
      startStop2.text('Start');
      if (time2 > 0) {
        calculateImprovement();
      }
    } else {
      startTime2 = Date.now();
      interval2 = setInterval(updateTime2, 10);
      startStop2.text('Stop');
    }
    running2 = !running2;
  }

  function resetTimer2() {
    clearInterval(interval2);
    running2 = false;
    time2 = 0;
    timer2.text(formatTime(time2));
    startStop2.text('Start');
    improvement.empty();
  }

  function formatTime(time) {
    const date = new Date(time);
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(date.getUTCMilliseconds() / 10)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  function calculateImprovement() {
    const time1InSeconds = time1 / 1000;
    const time2InSeconds = time2 / 1000;
    const improvementInSeconds = time1InSeconds - time2InSeconds;
    const improvementPercentage = Math.round(
      (improvementInSeconds / time1InSeconds) * 100
    );
    const improvementText = `Improvement: <span style="color: #f42b5b; font-family: Rubik">${im

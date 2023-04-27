$(document).ready(() => {
  const currentMethod = $('.currentMethod');
  const currentMood = $('.currentMood');

  const stopwatch1 = $('.stopwatch').eq(0);
  const stopwatch2 = $('.stopwatch').eq(1);

  const startStop1 = stopwatch1.find('#startStop1');
  const startStop2 = stopwatch2.find('#startStop2');

  const reset1 = stopwatch1.find('#reset1');
  const reset2 = stopwatch2.find('#reset2');

  const time1Display = stopwatch1.find('.stopwatch__time');
  const time2Display = stopwatch2.find('.stopwatch__time');

  const improvement = $('.improvement__result');

  let time1 = 0;
  let time2 = 0;
  let timer1;
  let timer2;

  function formatTime(timeInMilliseconds) {
    const date = new Date(timeInMilliseconds);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = Math.floor(date.getMilliseconds() / 10)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  }

  function startTimer1() {
    const startTime = Date.now() - time1;
    timer1 = setInterval(() => {
      time1 = Date.now() - startTime;
      time1Display.html(formatTime(time1));
      calculateImprovement();
    }, 10);
  }

  function startTimer2() {
    const startTime = Date.now() - time2;
    timer2 = setInterval(() => {
      time2 = Date.now() - startTime;
      time2Display.html(formatTime(time2));
      calculateImprovement();
    }, 10);
  }

  function stopTimer1() {
    clearInterval(timer1);
  }

  function stopTimer2() {
    clearInterval(timer2);
  }

  function resetTimer1() {
    stopTimer1();
    time1 = 0;
    time1Display.html(formatTime(time1));
    improvement.html('Improvement:');
  }

  function resetTimer2() {
    stopTimer2();
    time2 = 0;
    time2Display.html(formatTime(time2));
    improvement.html('Improvement:');
  }

  function calculateImprovement() {
    const time1InSeconds = time1 / 1000;
    const time2InSeconds = time2 / 1000;
    const improvementInSeconds = time1InSeconds - time2InSeconds;
    const improvementPercentage = Math.round(
      (improvementInSeconds / time1InSeconds) * 100
    );
    const improvementText = `Improvement: <span style="color: #f42b5b; font-family: Rubik">${improvementPercentage}% (${formatTime(
      improvementInSeconds * 1000
    )})</span>`;
    improvement.html(improvementText);
  }

  startStop1.on('click', () => {
    if (startStop1.text() === 'Start') {
      startStop1.text('Stop');
      startTimer1();
    } else {
      startStop1.text('Start');
      stopTimer1();
    }
  });

 reset1.on('click', resetTimer1);

  startStop2.on('click', () => {
    if (startStop2.text() === 'Start') {
      startStop2.text('Stop');
      startTimer2();
    } else {
      startStop2.text('Start');
      stopTimer2();
    }
  });

  reset2.on('click', resetTimer2);

  currentMethod.css('color', '#fff');
  currentMood.css('color', '#fff');

  $('.solutionBtn').on('click', () => {
    window.location.href = 'https://docs.google.com/presentation/d/1A7fNQXmaXX3sYC_lhAn2J0t_BhSIFKW3CCDDDgucR08/edit#slide=id.g23a1fb12a21_3_50';
  });

  function startTimer1() {
    const startTime = Date.now() - time1;
    timer1 = setInterval(() => {
      time1 = Date.now() - startTime;
      time1Display.html(formatTime(time1));
      calculateImprovement();
    }, 10);
  }

  function stopTimer1() {
    clearInterval(timer1);
  }

  function resetTimer1() {
    stopTimer1();
    time1 = 0;
    time1Display.html(formatTime(time1));
    improvement.html('Improvement:');
  }

  function startTimer2() {
    const startTime = Date.now() - time2;
    timer2 = setInterval(() => {
      time2 = Date.now() - startTime;
      time2Display.html(formatTime(time2));
      calculateImprovement();
    }, 10);
  }

  function stopTimer2() {
    clearInterval(timer2);
  }

  function resetTimer2() {
    stopTimer2();
    time2 = 0;
    time2Display.html(formatTime(time2));
    improvement.html('Improvement:');
  }

  function calculateImprovement() {
    const time1InSeconds = time1 / 1000;
    const time2InSeconds = time2 / 1000;
    const improvementInSeconds = time1InSeconds - time2InSeconds;
    const improvementPercentage = Math.round(
      (improvementInSeconds / time1InSeconds) * 100
    );
    const improvementText = `Improvement: <span style="color: #f42b5b; font-family: Rubik">${improvementPercentage}% (${formatTime(
      improvementInSeconds * 1000
    )})</span>`;
    improvement.html(improvementText);
  }
});
<script>

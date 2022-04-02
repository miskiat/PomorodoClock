const minutesEl = document.querySelector(".min");
const secondsEl = document.querySelector("sec");
const msecondsEl = document.querySelector("msec");
const worktimeEl = document.querySelector(".worktime");
const breaktimeEl = document.querySelector(".breaktime");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const workBtn = document.querySelector(".work");
const breakBtn = document.querySelector(".break");

let mseconds = 100;
let seconds = 00;
let minutes = 25;
function timer() {
  seconds--;
  if (seconds < 0) {
    minutes--;
    seconds = 60;
    minutesEl.innerHTML = minutes;
  }
  if (seconds < 10) {
    secondsEl.innerHTML = `0${seconds}`;
  }
  if (seconds >= 10 && seconds <= 59) {
    secondsEl.innerHTML = seconds;
  }
  if (minutes >= 10 && minutes <= 59) {
    minutesEl.innerHTML = minutes;
  }
  if (minutes < 10) {
    minutesEl.innerHTML = `0${minutes}`;
  }
  if (minutes === 0 && seconds === 0) {
    clearInterval(interval);
  }
}

workBtn.addEventListener("click", () => {
  minutesEl.innerHTML = worktimeEl.value;
  minutes = minutesEl.innerHTML;
  secondsEl.innerHTML = "00";
  clearInterval(interval);
});

startBtn.addEventListener("click", () => {
  interval = setInterval(timer, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

breakBtn.addEventListener("click", () => {
  clearInterval(interval);
  minutesEl.innerHTML = breaktimeEl.value;
  minutes = minutesEl.innerHTML - 1;
  secondsEl.innerHTML = "00";
});

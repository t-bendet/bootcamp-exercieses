const start = document.querySelector(".start");
const stops = document.querySelector(".stop");
const clock = document.querySelector(".clock");
let h = 00;
let m = 0;
let s = 0;
let stoptime = true;
function startTimer() {
  if (stoptime) {
    stoptime = false;
    timerCycle();
  }
}
function stopTimer() {
  if (!stoptime) {
    stoptime = true;
  }
}
function timerCycle() {
  if (!stoptime) {
    s = parseInt(s);
    m = parseInt(m);
    h = parseInt(h);
    s = s + 1;
    if (s == 60) {
      m = m + 1;
      s = 0;
    }
    if (s < 10 || s == 0) {
      s = "0" + s;
    }
    if (m < 10 || m == 0) {
      m = "0" + m;
    }
    if (h < 10 || h == 0) {
      h = "0" + h;
    }
    clock.innerHTML = `${h}:${m}:${s}`;
    setTimeout("timerCycle()", 1000);
  }
}
start.addEventListener("click", () => {
  startTimer();
});
stops.addEventListener("click", () => {
  stopTimer();
});

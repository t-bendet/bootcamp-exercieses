function startTime() {
  let now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;
  document.querySelector(".clock").innerHTML = `${h}:${m}:${s}`;
  let t = setTimeout(startTime, 500);
}
startTime();

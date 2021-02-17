function persistence(num) {
  let str = num.toString();
  let times = 0;
  while (str.length > 1) {
    str = str
      .split("")
      .reduce((acc, item) => acc * item)
      .toString();
    times += 1;
  }
  return times;
}
let x = 39;

console.log(persistence(x));

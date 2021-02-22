let min = document.querySelector(".min");
let plus = document.querySelector(".plus");
let text = document.querySelector(".text");
let computedStr = window.getComputedStyle(text).fontSize;
let computedNum = parseInt(computedStr.replace("px", ""));
const bigger = () => {
  if (computedNum < 100) {
    computedNum += 2;
    text.style.fontSize = computedNum + "px";
  }
};
const smaller = () => {
  if (computedNum > 6) {
    computedNum -= 2;
    text.style.fontSize = computedNum + "px";
    console.log(computedNum);
  }
};
plus.addEventListener("click", bigger);
min.addEventListener("click", smaller);

const $ = (x) => document.querySelector(x);
const body = $("body");
const tester = document.querySelectorAll("[data-new]");
const oldTest = document.querySelector(".oldTest");
const newTest = document.querySelector(".newTest");

console.log(oldTest.children)
function sorting(){

  var divCard = oldTest.children
  divCard = Array.prototype.slice.call(divCard)
  divCard.sort(function(a, b) {
    if (b.dataset.new < a.dataset.new  ) {
      return -1;
  } else {
      return 1;
  }
  })
  oldTest.innerHTML = "";
  for(var i = 0, l = divCard.length; i < l; i++) {
    oldTest.appendChild(divCard[i]);}
}
sorting()


// let temp = [...this.numSet].sort(function (a, b) {
//   return a - b;
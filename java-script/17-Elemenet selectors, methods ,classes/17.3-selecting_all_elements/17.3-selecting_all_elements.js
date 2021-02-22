const divSelector = document.querySelectorAll("div");
for (const [i, v] of divSelector.entries()) {
  this["div" + (i + 1)] = v;
}
console.log(div1);
console.log(div2);
console.log(div3);
console.log(div4);

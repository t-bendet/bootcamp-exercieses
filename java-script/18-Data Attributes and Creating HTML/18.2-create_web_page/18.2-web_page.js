const body = document.querySelector("body");
const all = document.querySelector("*");
const allAtt = [
  ["box-sizing", "border-box"],
  ["margin", "0px"],
  ["padding", "0px"],
];
allAtt.forEach((arr) => {
  all.style[arr[0]] = arr[1];
});
//grid
let div1 = document.createElement("div");
div1.classList.add("grid");
body.appendChild(div1);
const grid = document.querySelector(".grid");
const gridAtt = [
  ["display", "grid"],
  ["margin", "20px"],
  ["gap", "1rem"],
  ["grid-template-areas", `"header" "sidebar" "content" "sidebar2" "footer"`],
];
gridAtt.forEach((arr) => {
  grid.style[arr[0]] = arr[1];
});
//add to all
const toAll = [
  ["padding", "2rem"],
  ["border-radius", "10px"],
  ["font-size", "1.5rem"],
  ["font-weight", "bold"],
  ["color", "white"],
];

// header
let div2 = document.createElement("div");
div2.classList.add("header");
grid.appendChild(div2);
const header = document.querySelector(".header");
const headerAtt = [
  ["background", "red"],
  ["grid-area", "header"],
  ["innerText", "header"],
  ...toAll,
];
headerAtt.forEach((arr) => {
  header.style[arr[0]] = arr[1];
});
header.innerText = "Header";

//sidebar
let div3 = document.createElement("div");
div3.classList.add("sidebar");
grid.appendChild(div3);
const sidebar = document.querySelector(".sidebar");
const sidebarAtt = [
  ["background", "blue"],
  ["grid-area", "sidebar"],
  ["innerText", "sidebar"],
  ...toAll,
];
sidebarAtt.forEach((arr) => {
  sidebar.style[arr[0]] = arr[1];
});
sidebar.innerText = "sidebar";

// content
let div4 = document.createElement("div");
div4.classList.add("content");
grid.appendChild(div4);
const content = document.querySelector(".content");
const contentAtt = [
  ["background", "green"],
  ["grid-area", "content"],
  ...toAll,
];
contentAtt.forEach((arr) => {
  content.style[arr[0]] = arr[1];
});
//sidebar2
let div5 = document.createElement("div");
div5.classList.add("sidebar2");
grid.appendChild(div5);
const sidebar2 = document.querySelector(".sidebar2");
const sidebar2Att = [
  ["background", "purple"],
  ["grid-area", "sidebar2"],
  ["innerText", "sidebar2"],
  ...toAll,
];
sidebar2Att.forEach((arr) => {
  sidebar2.style[arr[0]] = arr[1];
});
sidebar2.innerText = "sidebar2";

//footer2
let div6 = document.createElement("div");
div6.classList.add("footer2");
grid.appendChild(div6);
const footer2 = document.querySelector(".footer2");
const footer2Att = [
  ["background", "yellow"],
  ["grid-area", "footer"],
  ["innerText", "footer"],
  ...toAll,
];
footer2Att.forEach((arr) => {
  footer2.style[arr[0]] = arr[1];
});
footer2.innerText = "footer2";

//h3 and p
let h3 = document.createElement("h3");
content.appendChild(h3);
h3.innerText = "Content";
let p = document.createElement("p");
content.appendChild(p);
p.innerText =
  "More content then we had before so this column is now quite tall";

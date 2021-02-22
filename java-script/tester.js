const body = document.querySelector("body");
const grid = document.createElement("div");
grid.classList.add("grid");

frown.src = "./image/frown.png";
frown.alt = "frown";
const mydiv2 = document.createElement("div");
mydiv2.classList.add("wrapper2");

const grid = elementsMaker("div", "grid", [
  ["display", "grid"],
  ["margin", "20px"],
  ["gap", "1rem"],
  ["grid-template-areas", `"header" "sidebar" "content" "sidebar-2" "footer"`],
]);
const toAll = [
  ["padding", "2rem"],
  ["border-radius", "10px"],
  ["font-size", "1.5rem"],
  ["font-weight", "bold"],
  ["color", "white"],
];
const header = elementsMaker("div", "header", [
  ["background", "red"],
  ["grid-area", "header"],
  ["innerText", "header"],
  ...toAll,
]);
const sidebar = elementsMaker("div", "sidebar", [
  ["background", "blue"],
  ["grid-area", "sidebar"],
  ["innerText", "sidebar"],
  ...toAll,
]);
const content = elementsMaker("div", "content", [
  ["background", "green"],
  ["grid-area", "content"],
  ...toAll,
]);
const sidebar2 = elementsMaker("div", "sidebar2", [
  ["background", "purple"],
  ["grid-area", "sidebar2"],
  ["innerText", "sidebar-2"],
  ...toAll,
]);
const footer = elementsMaker("div", "footer", [
  ["background", "yellow"],
  ["grid-area", "footer"],
  ["innerText", "footer"],
  ...toAll,
]);
const h3 = elementsMaker("h3", "h3", [["innerText", "Content"]]);
const p = elementsMaker("p", "p", [
  [
    "innerText",
    "More content then we had before so this column is now quite tall",
  ],
]);
content.appendChild(h3);
content.appendChild(p);
grid.appendChild(header);
grid.appendChild(sidebar);
grid.appendChild(content);
grid.appendChild(sidebar2);
grid.appendChild(footer);
body.appendChild(grid);
header.background = "red";

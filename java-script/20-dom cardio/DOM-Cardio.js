// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
const body = document.querySelector("body");
body.appendChild(div);
// make an unordered list
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const ul = document.createElement("ul");
div.appendChild(ul);
ul.style["listStyleType"] = "none";
const arr = ["one", "two", "three"];
arr.forEach((item) => {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = item;
});
// create an image
const img = document.createElement("img");
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
img.src = "./smile.png";
img.width = 250;
img.height = 250;
img.classList.add("cute");
img.alt = "Cute Puppy!";
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;
const ulElement = div.querySelector("ul");
// add a class to the second paragraph called warning
ulElement.insertAdjacentHTML("beforebegin", myHTML);
const myDiv = div.querySelector(".myDiv");
myDiv.children[1].classList.add("warning");
// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const players = [
  {
    name: "tal",
    age: 33,
    height: "1.88",
  },
  {
    name: "tim",
    age: 25,
    height: "1.95",
  },
  {
    name: "tom",
    age: 19,
    height: "1.76",
  },
];
const wrapper = document.querySelector(".wrapper");

const generatePlayerCard = (obj) => {
  let div = document.createElement("div");
  div.classList.add("playerCard");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  div.appendChild(h2);
  div.appendChild(p);
  h2.innerHTML = `${obj["name"]}-${obj["age"]}`;
  p.innerHTML = `he is ${obj["height"]} tall and ${
    obj["age"]
  } years old. In Dog years this person would be 
  ${obj["age"] * 7}. That would be a tall dog!`;
  wrapper.appendChild(div);
};
players.forEach(generatePlayerCard);

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element

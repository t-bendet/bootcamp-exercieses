//number of smiles
const howMany = document.querySelector(".num");
//submit
const btn = document.querySelector(".submit");
//flexBox selector
const flexBox = document.querySelector(".flex-box");
const check = () => {
  flexBox.innerHTML = "";
  const numOfSmileys = parseInt(howMany.value);
  if (isNaN(numOfSmileys)) {
    const frown = document.createElement("img");
    frown.src = "./image/frown.png";
    frown.alt = "frown";
    const mydiv2 = document.createElement("div");
    mydiv2.classList.add("wrapper2");
    mydiv2.appendChild(frown);
    flexBox.appendChild(mydiv2);
  } else {
    for (let i = 0; i < numOfSmileys; i++) {
      const smile = document.createElement("img");
      smile.src = "./image/smile.png";
      smile.alt = "smile";
      const mydiv = document.createElement("div");
      mydiv.classList.add("wrapper");
      mydiv.appendChild(smile);
      flexBox.appendChild(mydiv);
    }
  }
};
btn.addEventListener("click", check);
howMany.addEventListener("keyup", (Event) => {
  console.log(howMany);
  console.log(Event.keyCode);
  if (Event.keyCode === 13) {
    check();
  }
});

// Execute a function when the user releases a key on the keyboard
// btn.addEventListener("keyup", function (event) {
//   if (event.keyCode === 13) {
//     check();
//   }
// });

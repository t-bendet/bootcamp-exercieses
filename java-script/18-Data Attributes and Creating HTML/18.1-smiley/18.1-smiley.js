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
const body = document.querySelector("body");

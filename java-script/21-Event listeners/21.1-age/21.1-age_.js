//number of smiles
const howOld = document.querySelector(".num");
//submit
const btn = document.querySelector(".submit");
//flexBox selector
const flexBox = document.querySelector(".flex-box");
const check = () => {
  flexBox.innerHTML = "";
  const age = parseInt(howOld.value);
  if (isNaN(age)) {
    const p = document.createElement("p");
    flexBox.appendChild(p);
    p.innerHTML = "not a number";
  } else {
    if (age >= 18) {
      const p = document.createElement("p");
      flexBox.appendChild(p);
      p.innerHTML = "you can drink";
    } else {
      const p = document.createElement("p");
      flexBox.appendChild(p);
      p.innerHTML = "you’re too young";
    }
  }
};
btn.addEventListener("click", check);

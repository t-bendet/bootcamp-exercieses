// secret char
function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
const secretChar = generateRandomLetter();
//consts
const body = document.querySelector("body");
const charBox = document.querySelector(".char-box"); //char
const charInstruction = document.querySelector(".char-instruction"); // char instrucions
const gameInstruction = document.querySelector(".game-instruction");
const guessContinue = document.querySelector(".guess-continue");
let wrongGuess = "";
const guess = document.querySelector("html");
const keyFunk = (e) => {
  if (e.keyCode === secretChar.charCodeAt(0)) {
    charBox.innerText = secretChar;
    charInstruction.innerText = "right letter!";
    charInstruction.style.color = "green";
    gameInstruction.innerHTML = `<p>would you like to play again?</p>`;
    guess.removeEventListener("keydown", keyFunk);
    guessContinue.innerHTML = `<button>yes</button>`;
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
      location.reload();
    });
  } else if (e.keyCode > 90 || e.keyCode < 65) {
    charInstruction.innerText = "please enter a valid letter";
    charInstruction.style.color = "red";
  } else if (wrongGuess.includes(String.fromCharCode(e.keyCode))) {
    charInstruction.innerText = `${String.fromCharCode(
      e.keyCode
    )}  has already been guessed`;
    charInstruction.style.color = "red";
  } else {
    charInstruction.innerText = "nope, wrong letter";
    charInstruction.style.color = "red";
    wrongGuess = wrongGuess + String.fromCharCode(e.keyCode);
    guessContinue.innerHTML = `<p>${[...wrongGuess].join(",")}</p>`;
  }
};
guess.addEventListener("keydown", keyFunk); //use keydown to avoid case sensetivety

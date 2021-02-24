//We need a way for JavaScript to update the board state.
//Createsimple JavaScript functions that update’s a player’s position.
//To move the car’s do not use the click event. Use the ‘keyup’ event.
//Find a way to announce the winner of the race.●Find a way to restart the game.
const game = document.querySelector("html");
const course1 = document.querySelector("#player1-race");
const course2 = document.querySelector("#player2-race");
const keyFunk = (e, key) => {
  if (e.code === "ArrowRight"){
    course1.children.
  };
  if (e.code === "Space") console.log("Space ");
};
game.addEventListener("keydown", keyFunk);
// TODO dry code make the function for two rows

course1.children[1].classList.add("active"); //move for
course1.children[0].classList.remove("active"); //delete last td

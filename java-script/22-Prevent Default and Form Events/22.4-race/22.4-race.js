//Find a way to announce the winner of the race.●Find a way to restart the game.
const course1 = document.querySelector("#player1-race");
const course2 = document.querySelector("#player2-race");
const keyFunk = (e, key) => {
  if (e.code === "ArrowRight") {
    let currPlace = course1.getElementsByClassName("active")[0];
    let nextPlace = currPlace.nextElementSibling;
    currPlace.classList.remove("active");
    nextPlace.classList.add("active");
    if (nextPlace.classList.contains("finish")) {
      document.removeEventListener("keydown", keyFunk);
      const again = confirm(
        `thw winner is fdfd, would you like to play another game?`
      );
      if (again) {
        location.reload();
      }
    }
  }
  // if (e.code === "Space") console.log("Space ");
};
document.addEventListener("keydown", keyFunk);
// TODO dry code make the function for two rows

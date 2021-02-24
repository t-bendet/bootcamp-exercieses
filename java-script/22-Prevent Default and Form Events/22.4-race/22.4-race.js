const course1 = document.querySelector("#player1-race");
const course2 = document.querySelector("#player2-race");
const keyFunk = (e) => {
  let currPlace = course1.getElementsByClassName("active")[0];
  let nextPlace = currPlace.nextElementSibling;
  if (e.code === "ArrowRight") {
    currPlace.classList.remove("active");
    nextPlace.classList.add("active");
  }
  if (nextPlace.classList.contains("finish")) {
    document.removeEventListener("keydown", keyFunk);
    document.removeEventListener("keydown", keyFunk2);
    setTimeout(() => {
      const again = confirm(`and the winner is team red.
      would you like to play again?`);
      if (again) {
        location.reload();
      }
    }, 50);
  }
};
const keyFunk2 = (e) => {
  let currPlace = course2.getElementsByClassName("active")[0];
  let nextPlace = currPlace.nextElementSibling;
  if (e.code === "Space") {
    currPlace.classList.remove("active");
    nextPlace.classList.add("active");
  }
  if (nextPlace.classList.contains("finish")) {
    document.removeEventListener("keydown", keyFunk2);
    document.removeEventListener("keydown", keyFunk);
    setTimeout(() => {
      const again = confirm(`and the winner is team yellow.
      would you like to play again?`);
      if (again) {
        location.reload();
      }
    }, 50);
  }
};
document.addEventListener("keydown", keyFunk);
document.addEventListener("keydown", keyFunk2);

// TODO dry code make the function for two rows with .this

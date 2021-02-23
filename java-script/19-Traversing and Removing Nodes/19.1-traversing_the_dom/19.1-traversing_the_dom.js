//Create a variable that holds the <li> element with the class “start-here”.
const start = document.querySelector(".start-here");
//1. Change the text from “title 2” to “main title”
start.innerHTML = "main title";
//2. Add another sub title with the text “sub title 4”
let li = document.createElement("li");
start.nextElementSibling.children[0].appendChild(li);
li.innerHTML = "sub title 4";
//3. Delete the last <li> element from the list
start.nextElementSibling.children[0].lastElementChild.remove();
//4. Change the <title> element text to “Master Of The Dom”.
start.parentElement.parentElement.parentElement.children[0].lastElementChild.innerHTML =
  "Master Of The Dom";
//5. Change the text of the <p> element ot something else of your
start.parentElement.nextElementSibling.children[0].innerHTML =
  "that was a lot of copy paste";
console.log(start);

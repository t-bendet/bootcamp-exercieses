let textArea = document.querySelector("textarea");
let btn = document.querySelector("input");

btn.addEventListener("click", function (check) {
  let currentLength = textArea.value.length;
  let notEnough = `your application should contain at least 100 charecthers,just ${
    100 - currentLength
  } more`;
  if (currentLength < 100) {
    check.preventDefault();
    btn.insertAdjacentHTML("afterend", notEnough);
  }
});

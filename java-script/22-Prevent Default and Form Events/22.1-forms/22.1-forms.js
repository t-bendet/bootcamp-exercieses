const button = document.querySelector(".inputs");
button.addEventListener("submit", (e) => {
  const curr = e.currentTarget;
  const shouldISubmit = confirm(
    `Please confirm your name is ${curr.name.value},your age is ${curr.age.value},and your email is ${curr.email.value} `
  );
  if (!shouldISubmit) {
    e.preventDefault();
    alert("change the information");
  } else {
    alert("congratulations you successfully sent this form");
    e.returnValue = true;
  }
});

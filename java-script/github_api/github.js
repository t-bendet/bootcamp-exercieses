const githubUsersData = {};
async function getUserData(userName) {
  const userObj = {};
  const personPromise = await fetch(`https://api.github.com/users/${userName}`);
  const personData = await personPromise.json();
  userObj.picLink = personData.avatar_url;
  userObj.name = personData.name;
  userObj.email = personData.email; // if empty dont show
  userObj.repos = personData.public_repos; // if 0 "no"
  userObj.id = personData.id;
  userObj.link = personData.html_url; //card is a cliclable link
  return userObj;
}
const $ = (x) => document.querySelector(x);
const cardFactory = async (inputUserName) => {
  const cardData = await getUserData(inputUserName);
  if (cardData.id in githubUsersData) {
    alert("we have this already");
  } else {
    githubUsersData[`${cardData.id}`] = cardData;
    let cardArea = $(".card-area");
    //main card
    let cardSelector = document.createElement("div");
    cardSelector.classList.add("card");
    cardArea.appendChild(cardSelector);
    //card img
    let picSelector = document.createElement("div");
    picSelector.classList.add("pic");
    picSelector.style["background-image"] = `url(${cardData.picLink})`;
    cardSelector.appendChild(picSelector);
    //card name
    let nameSelector = document.createElement("p");
    nameSelector.innerText = cardData.name
      ? `${cardData.name}`
      : "no cuurent name";
    cardSelector.appendChild(nameSelector);
    // card email
    let emailSelector = document.createElement("p");
    emailSelector.innerText = cardData.email
      ? `${cardData.email}`
      : "no cuurent email";
    cardSelector.appendChild(emailSelector);
    // card num of repos
    let repoSelector = document.createElement("p");
    repoSelector.innerText = cardData.repos
      ? `${cardData.repos} repositories`
      : "no cuurent repos";
    cardSelector.appendChild(repoSelector);
  }
};
const btn = $(".submit");
const query = $(".user-input");
query.focus();
// btn event
btn.addEventListener("click", sendUser);
function sendUser(e) {
  e.preventDefault();
  const userSubmit = query.value;
  cardFactory(userSubmit);
  query.value = "";
}
//enter event
function sendUser2(e) {
  if (e.key === "Enter") {
    e.stopPropagation();
    e.preventDefault();
    const userSubmit = query.value;
    cardFactory(userSubmit);
    query.value = "";
  }
}
query.addEventListener("keypress", sendUser2);

const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
const body = document.querySelector("body");
const all = document.querySelector("*");
const allAtt = [
  ["box-sizing", "border-box"],
  ["margin", "0px"],
  ["padding", "0px"],
];
allAtt.forEach((arr) => {
  all.style[arr[0]] = arr[1];
});
const ol = document.createElement("ol");
body.appendChild(ol);
ol.style["listStyleType"] = "none";
users.forEach((obj) => {
  let li = document.createElement("li");
  ol.appendChild(li);
  li.innerHTML = `${obj["firstName"]} ${obj["lastName"]}`;
  li.setAttribute("data-id", `${obj["id"]}`);
});

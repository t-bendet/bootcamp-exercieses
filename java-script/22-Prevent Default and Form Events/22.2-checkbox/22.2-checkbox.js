const check = document.querySelector('input[type="checkbox"]');
const box = document.querySelector(".box");
const img = document.createElement("img");
img.src = "./smile.png";
img.style.height = "100px";
img.style.width = "100px";
check.addEventListener("change", function () {
  if (this.checked) {
    box.appendChild(img);
  } else {
    box.removeChild(img);
  }
});

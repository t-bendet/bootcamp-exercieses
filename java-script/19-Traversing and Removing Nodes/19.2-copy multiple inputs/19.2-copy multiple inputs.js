const inputs = document.querySelectorAll("#myform .input__box");
console.log(inputs);
inputs.forEach((item, i, arr) => {
  item.addEventListener("input", (evt) => {
    if (item.value && i < arr.length - 1) {
      arr[i + 1].focus();
    }
  });
  item.addEventListener("paste", (e) => {
    let paste = (e.clipboardData || window.clipboardData).getData("text");
    inputs.forEach((input, index) => {
      if (paste[index]) {
        input.value = paste[index];
      }
    });
    inputs[paste.length - 1].focus();
    //TODO change for each to for or while loop
    // let len = paste.length;
    // let spaceLeft = arr.length - i;
    // console.log(paste[0], len, spaceLeft);
  });
});

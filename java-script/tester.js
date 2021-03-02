function intializeGrids() {
  let worldrow = 12;
  for (let row = 0; row < worldrow; row++) {
    let worldcol = 5;
    let matrix = [];
    matrix[row] = [];
    if (row == 0) {
      const gridHeader = document.createElement("div");
      gridHeader.style["grid-area"] = "1/1/6/2";
      gridHeader.classList.add("table-box");
      gridHeader.classList.add("header");
    }
    for (let col = 0; col < worldcol; col++) {
      matrix[row][col] = document.createElement("div");
      matrix[row][col].style["grid-area"] = `${row + 1} / ${col + 1} / ${
        row + 2
      } / ${col + 1}`;
      matrix[row][col].classList.add("table-box");
      if (row == 1) {
        if (col == 0) {
          matrix[row][col].innerText = col;
        }
        if (col == 1) {
          matrix[row][col].innerText = col;
        }
        if (col == 2) {
          matrix[row][col].innerText = col;
        }
        if (col == 3) {
          matrix[row][col].innerText = col;
        }
        if (col == 4) {
          matrix[row][col].innerText = col;
        }
      } else {
        matrix[row][col].innerText = "testing";
        //inject inner html from objects and add classses
      }

      gridDiv.appendChild(matrix[row][col]);
    }
  }
}

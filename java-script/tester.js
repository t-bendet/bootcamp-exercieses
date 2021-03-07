const handleLoading = () => {
  const spinner = document.querySelector(".spinner");
  if (state.isLoading) {
    spinner.classList.remove("none");

    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else {
    spinner.classList.add("none");
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }
};
handleLoading();
matrix[row][col].setAttribute("data-row", row + 1);

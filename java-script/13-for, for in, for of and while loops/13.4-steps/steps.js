const steps = (n) => {
  for (let i = 0; i < n; i++) {
    let stars = new Array(n).fill("#");
    for (let j = n - i - 1; j > 0; j--) {
      stars.splice(j - n + i, 1, " ");
    }
    console.log(stars.join(""));
  }
};
steps(9);

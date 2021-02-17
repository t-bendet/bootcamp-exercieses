// n =3
// #!!
//##!
//###
// const steps = (n) => {
//   for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i) + "!".repeat(n - i));
//   }
// };
// steps(6);

const steps2 = (n) => {
  for (let row = 0; row < n; row++) {
    var stair = "";
    for (let col = 0; col < n; col++) {
      if (row >= col) {
        stair += "#";
      } else {
        stair += "!";
      }
    }
  }
  console.log(stair);
};
steps2(3);

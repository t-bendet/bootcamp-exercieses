function getSum(arr1, arr2) {
  let sum = 0;
  debugger;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3],[5, 66, 23]);
//1.line 4
//2.Uncaught TypeError at the concole
//3.cant reassign values to const,chenged to let.
// and there was a missing "," in the function Arguments


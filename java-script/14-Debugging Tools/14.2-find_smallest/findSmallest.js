debugger
function findSmallest(a, b, c){
  if (a > b > c){
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52,66, 2);
// 1. line 10 findSmalest is not defined
// 2. debugger
// 3. the function name was diffrent from sthe funcion call
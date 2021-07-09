// Currying
function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}

const counter = outer();
console.log(counter());
const stam = counter();
const testArr = [counter(), counter(), counter() + counter(), counter()];
console.log(testArr);
console.log(stam);

function Counter() {
  var count = 0;
  this.incrementCount = function () {
    count++;
    console.log(count);
  };
}

var adder = new Counter();
adder.incrementCount(); // 1

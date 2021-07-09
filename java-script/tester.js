// the arguments object() -  a local variable available within all non-arrow functions
function tester(parm1, parm2, parm3) {
  console.log(arguments.callee);
  console.log(arguments[1]);
}

// Array.from()
const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
Array.from(mapper.keys());
// spread oparetor and rest parms
function testMore(a, b, ...parms) {
  //rest parms
  console.log(a + b);
  console.log(...parms); // spread oparetor
  // a variadic function is a function of indefinite arity, i.e., one which accepts a variable number of arguments.
}
const recipe = { flour: 500, sugar: 200, eggs: 1 };
const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
//
function cakes(recipe, available) {
  let max = [];
  for (const [key, value] of Object.entries(recipe)) {
    if (available[key]) {
      max.push(Math.floor(available[key] / value));
    } else {
      return 0;
    }
  }
  return Math.min(...max);
}
const res = cakes(recipe, available);
console.log(res);

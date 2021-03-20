// the arguments object() -  a local variable available within all non-arrow functions
function tester(parm1, parm2, parm3) {
  console.log(arguments.callee);
  console.log(arguments["1"]);
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
console.log("10" + "3");

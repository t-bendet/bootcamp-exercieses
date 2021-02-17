function outer() {
  const outervar = "i am outer";
  function inner() {
    const innervar = "i am inner";
    console.log(innervar);
    console.log(outervar);
  }
  inner();
}
outer();

console.log(globalThis);

const stringer = "hello";
const num = 33;
const obj = {
  name: "tal",
  last: "bendet",
};
const bool = true;
obj.last = null;
let donaDefineMe;
const sym = Symbol("baba");
console.log(
  typeof stringer,
  typeof num,
  typeof obj,
  typeof bool,
  typeof obj.last,
  obj.last,
  typeof donaDefineMe,
  typeof sym
);

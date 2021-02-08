const stringi = "hello";
const num = 33;
const obj = {
  name: "tal",
  last: "bendet",
};
const bool = true;
obj.last = null;
let dontDefineMe;
const sym = Symbol("baba");
console.log(
  typeof stringi,
  typeof num,
  typeof obj,
  typeof bool,
  typeof obj.last,
  obj.last,
  typeof dontDefineMe,
  typeof sym
);

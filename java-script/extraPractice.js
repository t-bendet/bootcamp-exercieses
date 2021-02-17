var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

// var obj = {
//   fullName: "Colin Ihrig",
//   prop: {
//     fullName: "Aurelio De Rosa",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };
// console.log(obj.prop.getFullName());
// fullName = "John Doe";
// test = obj.prop.getFullName;
// console.log(globalThis.test());

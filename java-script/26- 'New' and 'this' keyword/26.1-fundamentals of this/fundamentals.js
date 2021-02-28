//1 it will point to the window becuse that is the object it was called on
console.log(this);
//2 becuse it used an arrow function,and in arrow function the this dosent change and refers to this of a higer order function
const myObj = {
  name: "Timmy",
  greet() {
    console.log(`Hello ${this.name}`);
  },
};
//3 the global object becusse it is not inside another object,it lives in the global scope
//4 the window object becuse the method was called on the global obj
//5 it will point to the window object becuse arrow function dosent change this
document.querySelector(".element").addEventListener("click", funky);
function funky() {
  console.log(this);
}

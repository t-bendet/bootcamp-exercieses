// var declaration is hoisted up and initialized with undefined.
// let and const declarations are hoisted up but not initialized.
// function definitions are also hoisted up and stored as they are

function consoleNum() {
  console.log(num);
  var num = 10;
}

consoleNum(); // undefined

// Why no error?

// This is how runtime sees this
{
  var num;
  console.log(num);
  num = 9;
}

let a;
a = 9;

console.log(a);

a = 6;

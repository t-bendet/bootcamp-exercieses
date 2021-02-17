//1.the output will be: undefined and 2.
//console.log(a) will output undefined because the var will be hoisted but the vakue of var will not.
// console.log(foo()) will output 2 becuse the whole function declartion will be hoisted and avalible in the function scope.
//to fix output of var we could assign 1 to var before the console.log

//2.in node the output will be :Aurelio De Rosaand and undefined .
// because var test is a refrence to the function getFullName() ,when you run test inside obj, "this" refer to prop,outside the
//obj it refer to nothing in the case of node and window inside the browser ,and in this case it will display John Doe
//this = window ,fullName = "John Doe"

//3.the output will be: undefined and number.
//because a is declared inside the function scope abd cannot be accesd outside the function it will return undefined
// b is not declared ,if you assign a value to a variable that has not been declared, it will automatically become a global variable.

//4.the output will be: 2
// the second funcC will overwrite the first one,you could give the second function another name

//5.the output will be: 1 , ReferenceError
// d is not declared ,if you assign a value to a variable that has not been declared, it will automatically become a global variable.
// e is declared inside the function ,if var is declared inside a block he will be global but inside a function he will not "leak out"
// you can declare var e outside the function

//6.the output will be:undefined , 1
//because var f is assignsd a value after the first console,log
//you van declare f and assign to it a value at the top of the page

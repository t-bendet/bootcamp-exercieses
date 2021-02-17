//1.var firstResult  is the return value of someFunction which is the function other function  ,number and input are not being used inside the functions,
//function other function returns b,it does not have it in the locale scope so it goes one level above it b=5
//the parent function var is still avalible because of closures

//2.function a is hoisted to the top of the function so when we assagin a=10 it just change the value of a to 10 LOCALY ,which means it dosent leaks out
//otherwise "a" would have been declared in the global scope outside the function and change the value of var a

//3. myfunc return to us an array with a length of 3 ,in each array there is  a function (const log)
// the inner loop rins 3 times which gives myfunc value of i the value 0f 3
//when logs runs ,each time the log function runs it looks for the value of i inside the my func function
// and there the value of i is 3

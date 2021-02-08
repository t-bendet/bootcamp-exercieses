/*
--Delete the wrong answers--

1. Which of the following is/are strings?

a) 
b) 
c) '4'

2. Which of the following is/are numbers?

a) 4
b) 4.0
c) 
d) -4

3. Which of the following is/are booleans?

a) true
b) false
c) 

4. What is the result of 80 + 71.2?

a) 151.2
b) 
c) 

5. What is the result of "80" + 71.2?

a) 
b) 
c) "8071.2"

6. Does 100 + 30 produce a number or a string?

a) number
b)

7. Does "100" + 30 produce a number or a string?

a)
b)string

*/

//------Submit your answers under the question------//

//create three different ways to declare variables
var x = 3;
let z = 't';
const y = true;

//declare a variable and reassign a value to it
let dogName = 'zeus';
dogName = 'boff';

//create a variable and after that assign a string with its value being: He's got it!
let tal;
tal = "He's got it!";
/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
let check = 20 + 50 + 37;
let tax = check*0.17;
let total = `Your total bill is ${check+tax} $.`
console.log(total)
// Round the number 50.6 to its nearest integer
let num = Math.round(50.6)
console.log(num)
//Create a variable that is undefined
let undef;
